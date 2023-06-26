import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getcart } from "../../slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import KhaltiCheckout from "khalti-checkout-web";
import getKhaltiConfig from "./Khalticonfig";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Config from "./Khalticonfig";
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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const dispatch = useDispatch();
  let checkout = new KhaltiCheckout(getKhaltiConfig);
  const appointment = useSelector((state) => state.cart);
  console.log(appointment.list.user_appointments);

  React.useEffect(() => {
    dispatch(getcart());
  }, [dispatch]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Doctors Name</StyledTableCell>

              <StyledTableCell align="right">Disease</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Invoice</StyledTableCell>
              <StyledTableCell align="right">Pay Now</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointment?.list?.user_appointments?.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell align="right">
                  {item.doctor.name}
                </StyledTableCell>
                <StyledTableCell align="right">{item.disease}</StyledTableCell>
                <StyledTableCell align="right">{item.date}</StyledTableCell>
                <StyledTableCell align="right">{item.status}</StyledTableCell>
                <StyledTableCell align="right">{item.invoice}</StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {
                    item.status === "checked" ? (
                      item.payment === "paid" ? (
                        <Typography>Paid</Typography>
                      ) : (
                        <Box
                          sx={{
                            display: "inline-block",
                            backgroundColor: "purple",
                            padding: "10px",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                            border: "1px solid white",
                          }}
                        >
                          <button
                            onClick={() =>
                              checkout.show({ amount: item.invoice * 10})
                              
                            }
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              color: "inherit",
                              cursor: "inherit",
                              padding: 0,
                            }}
                          >
                            Pay Via Khalti
                          </button>
                        </Box>
                      )
                    ) : (
                      <Typography>Pending</Typography>
                    )

                    // <Box
                    //   sx={{
                    //     display: "inline-block",
                    //     backgroundColor: "purple",
                    //     padding: "10px",
                    //     color: "white",
                    //     cursor: "pointer",
                    //     fontWeight: "bold",
                    //     border: "1px solid white",
                    //   }}
                    // >

                    //   <button
                    //     onClick={() =>
                    //       checkout.show({ amount: item.invoice * 10 })
                    //     }
                    //     style={{
                    //       backgroundColor: "transparent",
                    //       border: "none",
                    //       color: "inherit",
                    //       cursor: "inherit",
                    //       padding: 0,
                    //     }}
                    //   >
                    //     Pay Via Khalti
                    //   </button>
                    // </Box>
                  }
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
