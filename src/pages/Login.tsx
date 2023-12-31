import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import {
  Paper,
  Box,
  Grid,
  Typography,
  CssBaseline,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
  CardMedia,
} from "@mui/material";
import api from "../api/api";
import lendsqrLogo from "../assets/lendsqr-logo.svg";
import illustration from "../assets/illustration.svg";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Must be a valid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password cannot be less than 5 character"),
});

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, args) => {
      try {
        setLoading(true);
        const response = await api.signIn(values);
        if (response.status === 200) {
          const userData = response.data;
          const token = response.data.token;
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("token", token);
          args.resetForm();
          toast.success("Login Successfully");
          navigate("/user");
        } else toast.error("Incorrect Credentials");
      } catch (error: any) {
        setLoading(false);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong, please try again");
        }
      }
    },
  });

  useEffect(() => {
    //check if user is already login and rediect to dashboard
    if (isLoggedIn) {
      navigate("/user");
    }
  }, [isLoggedIn]);

  return (
    <Box>
      <Grid container component="main">
        <CssBaseline />
        <Grid
          item
          xs={false}
          md={6}
          className="illustrator-bg-shadow"
          sx={{
            pt: "40px",
            height: "100vh",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <Box component="div" sx={{ width: "170px", ml: "80px" }}>
            <CardMedia
              component="img"
              width="20"
              image={lendsqrLogo}
              alt="lendsqrLogo"
              sx={{}}
            />
          </Box>

          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "60px",
            }}
          >
            <CardMedia
              component="img"
              image={illustration}
              alt="illustration"
              sx={{ width: "90%" }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          component={Paper}
          elevation={0}
          square
          sx={{ px: { xs: "0px", sm: "80px", md: "40px", lg: "80px" } }}
        >
          <Box component="div" sx={{ width: "100px", mt: 4, ml: 4 }}>
            <CardMedia
              component="img"
              width="20"
              image={lendsqrLogo}
              alt="lendsqrLogo"
              sx={{ display: { md: "none" } }}
            />
          </Box>
          <Box
            sx={{
              mt: 8,
              mb: 4,
              mx: 4,
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              color="secondary"
              fontWeight={600}
              fontSize={40}
              mt={4}
              sx={{ fontFamily: "AvenirNext", mb: "10px", lineHeight: "55px" }}
            >
              Welcome!
            </Typography>

            <Typography
              component="p"
              variant="subtitle2"
              fontWeight={400}
              fontSize={20}
              color="text.primary"
              sx={{ fontFamily: "AvenirNext", mb: "30px" }}
            >
              Enter details to login.
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                fullWidth
                size="small"
                label="Email"
                id="email"
        data-testid="email"
                InputLabelProps={{
                  style: {
                    fontSize: 14,
                  },
                }}
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                sx={{ mt: "20px" }}
              />

              <Typography color="error.main" sx={{ fontSize: "13px" }}>
                {formik.errors.email && formik.touched.email ? (
                  <span>{formik.errors.email}</span>
                ) : null}
              </Typography>

              <TextField
                fullWidth
                size="small"
                name="password"
                id="password"
                label="Password"
        data-testid="password"
                InputLabelProps={{
                  style: {
                    fontSize: 14,
                  },
                }}
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                sx={{ mt: "20px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={500}
                        onClick={handleShowPassword}
                        sx={{ cursor: "pointer" }}
                        className="prevent-select"
                      >
                        {showPassword ? "HIDE" : "SHOW"}
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography color="error.main" sx={{ fontSize: "13px" }}>
                {formik.errors.password && formik.touched.password ? (
                  <span>{formik.errors.password}</span>
                ) : null}
              </Typography>

              <Typography
                color="primary"
                sx={{
                  fontSize: "12px",
                  cursor: "pointer",
                  mt: "20px",
                  mb: "10px",
                  fontWeight: "500",
                }}
              >
                FORGET PASSWORD?
              </Typography>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disableElevation
                disabled={!(formik.isValid && formik.dirty) || loading}
                sx={{ mt: 3, mb: 2, p: 1.5 }}
        data-testid="submit-button"
              >
                {loading ? (
                  <CircularProgress sx={{ color: "white" }} size={20} />
                ) : (
                  <Typography
                    color="text.white"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    LOG IN
                  </Typography>
                )}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
