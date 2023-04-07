import React, { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
  Box,
  tableCellClasses,
  TableContainer,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { deleteUser, getallUsers } from "../../service/api";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getallUsers();
    setUser(response.data);
  };

  const deleteData = async (id) => {
    await deleteUser(id);
    getUsers();
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    cursor: "pointer",
  }));

  return (
    <Box sx={{ minWidth: 450 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>UserName</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {user.map((data) => (
              <StyledTableRow key={data.id}>
                <StyledTableCell>{data.id}</StyledTableCell>
                <StyledTableCell>{data.name}</StyledTableCell>
                <StyledTableCell>{data.username}</StyledTableCell>
                <StyledTableCell>{data.email}</StyledTableCell>
                <StyledTableCell>{data.phone}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "0px 20px" }}
                    component={Link}
                    to={`/editUser/${data.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    style={{ margin: "0px 20px" }}
                    onClick={() => deleteData(data.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllUsers;
