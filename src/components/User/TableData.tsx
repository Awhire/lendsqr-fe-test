import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Paper,
  Table,
  TableBody,
  TablePagination,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { format } from 'date-fns'

import TableDropDown from "./TableDropDown";
import FilterListIcon from "@mui/icons-material/FilterList";

const formatDate = (date: any) => {
  return format(new Date(date), 'MMM dd, yyyy HH:mm aa')
};

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
  _id: string;
  fullName: string
  UserTier: number;
  balance: string;
  bankDetails: any
};

function createData(
  organizationName: string,
  userName: string,
  email: string,
  phone: string,
  createdAt: string,
  status: string,
  _id: string,
  fullName: string,
  UserTier: number,
  balance: string,
  bankDetails: any

): Data {
  return { organizationName, userName, email, phone, createdAt, status, _id, fullName, UserTier, balance, bankDetails };
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

const TableData = (usersDataList: any) => {
  const data = usersDataList.usersDataList;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rows = data.map((item: any) =>
    createData(
      item.organizationName,
      item.userName,
      item.email,
      item.phone,
      item.createdAt,
      item.status,
      item._id,
      item.fullName,
      item.UserTier,
      item.balance,
      item.bankDetails
    )
  );

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
    <Paper className="card-shadow" sx={{ width: "100%", overflow: "hidden" }}>
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
                  <TableRow hover key={index}>
                    <TableCell sx={{ p: "12px" }}>
                      <Typography fontWeight={400} sx={{ fontSize: "12px" }}>
                        {row.organizationName}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ p: "12px" }}>
                      <Typography fontWeight={400} sx={{ fontSize: "12px" }}>
                        {row.userName}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ p: "12px" }}>
                      <Typography fontWeight={400} sx={{ fontSize: "12px" }}>
                        {row.email}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ p: "12px" }}>
                      <Typography fontWeight={400} sx={{ fontSize: "12px" }}>
                        {row.phone}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ p: "12px" }}>
                      <Typography fontWeight={400} sx={{ fontSize: "12px" }}>
                        {formatDate(row.createdAt)}
                      </Typography>
                    </TableCell>

                    <TableCell sx={{ p: "12px" }}>
                      <Typography
                        fontWeight={400}
                        sx={{ fontSize: "12px" }}
                        style={makeStyles(row.status)}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ p: "1px" }}>
                      <TableDropDown rowData={row} />
                    </TableCell>
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

export default TableData;
