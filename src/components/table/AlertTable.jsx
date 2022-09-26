import React, { useEffect, useState } from "react";

import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import axios from "axios";
import {
  handleErrorWithToast,
  handleToastMsg,
} from "../../helpers/toastMessage";
import { authAxios } from "../../helpers/authAxios";
import UpdateAlertDialog from "../editDialog/EditAlert";
const AlertTable = ({ reload, setReload }) => {
  const [alerts, setAlerts] = useState([]);
  const [page, setPage] = useState(0);
  const [alertPerPage, setAlertPerPage] = useState(10);
  const [count, setCount] = useState(1);
  const data = {
    page: page + 1,
    pageSize: alertPerPage,
  };

  const getAllItem = () => {
    authAxios
      .get(`/alert`, { params: data })
      .then(({ data }) => {
        const { alerts, totalPages, counts } = data;
        setAlerts(alerts);
        setCount(counts);
        setReload(false);
      })
      .catch((error) => {
        handleErrorWithToast(error);
        setReload(false);
      });
  };

  useEffect(() => {
    getAllItem();
  }, [page, alertPerPage, reload]);

  const handleDelete = (itemId) => {
    authAxios
      .delete(`alert/${itemId}`)
      .then((data) => {
        getAllItem();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   pagination

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setAlertPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      {alerts.length && (
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "90%",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <button onClick={() => setReload(true)}>Relaod</button>
          <Table aria-label="Admin Users" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price Signal</TableCell>
                <TableCell>Criteria</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Active Days</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alerts.map((data) => (
                <TableRow
                  key={data._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{data.name}</TableCell>
                  <TableCell>DK1</TableCell>
                  <TableCell>{data.criteria}</TableCell>
                  <TableCell>{data.value}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.days}</TableCell>

                  <TableCell align="center">
                    <button
                      onClick={() => {
                        handleDelete(data._id);
                      }}
                    >
                      Delete
                    </button>
                    <UpdateAlertDialog />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={alertPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
      {!alerts.length && <h1> No item exist!</h1>}
    </>
  );
};

export default AlertTable;
