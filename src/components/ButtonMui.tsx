import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const ButtonMui = ({ title, color } : any) => {
  return (
    <Stack direction="row" spacing={4}>
      <Button variant="outlined" color={color} size="small" style={{paddingLeft: "16px", paddingRight: "16px", borderWidth: "2px", fontWeight: "600", borderRadius: '8px'}}>
        {title}
      </Button>
    </Stack>
  );
}

export default ButtonMui