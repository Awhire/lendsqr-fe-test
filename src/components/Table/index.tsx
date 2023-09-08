import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Column = {
  id:
    | "organizationName"
    | "userName"
    | "email"
    | "phone"
    | "createdAt"
    | "status";
  label: string;
  minWidth?: number;
  format?: (value: number) => string;
};

const columns: readonly Column[] = [
  {
    id: "organizationName",
    label: "ORGANIZATION",
  },
  {
    id: "userName",
    label: "USERNAME",
  },
  {
    id: "email",
    label: "EMAIL",
  },
  {
    id: "phone",
    label: "PHONE NUMBER",
  },
  {
    id: "createdAt",
    label: "DATE JOINED",
  },
  {
    id: "status",
    label: "STATUS",
  },
];

type Data = {
  organizationName: string;
  userName: string;
  email: string;
  phone: string;
  createdAt: string;
  status: string;
};

function createData(
  organizationName: string,
  userName: string,
  email: string,
  phone: string,
  createdAt: string,
  status: string
): Data {
  return { organizationName, userName, email, phone, createdAt, status };
}

const makeStyles = (status: string) => {
  if (status === "Active") {
    return {
      background: "rgba(57, 205, 98, 0.1)",
      color: "#39CD62",
      padding: "3px 0px 3px 25px",
      borderRadius: "10px",
    };
  } else if (status === "Inactive") {
    return {
      background: "rgba(33, 63, 125, 0.1)",
      color: "#545F7D",
      padding: "3px 0px 3px 20px",
      borderRadius: "10px",
    };
  } else if (status === "Pending") {
    return {
      background: "rgba(233, 178, 0, 0.1)",
      color: "#E9B200",
      padding: "3px 0px 3px 20px",
      borderRadius: "10px",
    };
  }
  if (status === "Blacklisted") {
    return {
      background: "rgba(228, 3, 59, 0.1)",
      color: "#E4033B",
      padding: "3px 0px 3px 14px",
      borderRadius: "10px",
    };
  }
};

const StickyHeadTable = (usersDataList: any) => {
  const data = usersDataList.usersDataList;

  const rows = data.map((item: any) =>
    createData(
      item.organizationName,
      item.userName,
      item.email,
      item.phone,
      item.createdAt,
      item.status
    )
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500, pl: 2 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#545F7D",
                    p: 0,
                    pl: 1.5,
                    pt: 1,
                    borderBottom: "none",
                  }}
                >
                  {column.label}
                  <IconButton>
                    <FilterListIcon />
                  </IconButton>
                </TableCell>
              ))}
              <TableCell
                align="left"
                sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#545F7D",
                  p: 0,
                  pl: 1.5,
                  pt: 1,
                  borderBottom: "none",
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: number) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align="left"
                            sx={{ p: "12px" }}
                          >
                            {column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              <Typography
                                fontWeight={400}
                                sx={{ fontSize: "12px" }}
                                style={makeStyles(row[column.id])}
                              >
                                {value}
                              </Typography>
                            )}
                          </TableCell>
                        );
                      })}
                      <TableCell align="left" sx={{ p: "1px" }}>
                      <IconButton>
                        <MoreVertIcon />
                        </IconButton>
                      </TableCell>
                    </>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;