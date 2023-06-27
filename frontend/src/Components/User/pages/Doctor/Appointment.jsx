import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getpatient } from "../../slices/patientSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import KhaltiCheckout from "khalti-checkout-web";

import toast from 'react-hot-toast'

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import { getId } from "../../slices/idslice";
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
  const tokens = localStorage.getItem("jwt");
  const id=useSelector((state)=>state.id)
    console.log(id)

  const MakePayment = async () => {
    if(!id)
    {
      return;
    }
    
  
    try {
        
       
      const response = await axios.post(
        "http://localhost:8080/patient/payment",
        {
          status:'paid',
          _id:id.id
        },
        {
          headers: {
            authorization: tokens
  
          },
        }
      );
  
      console.log(response.data);
      toast.success("payment successfull!!!")
    } catch (error) {
      console.log(error.message);
    }
    
  };

  const Config = {
  
    publicKey: "test_public_key_2a7f2e2188034b8c8afe09bba670bd67",
    productIdentity: "123766",
    productName: "My Ecommerce Store",
    productUrl: "http://localhost:3000",
    eventHandler: {
      onSuccess(payload) {
        console.log(payload);
       
        MakePayment();
       
        
      },
      onError(error) {
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };
  let checkout = new KhaltiCheckout(Config);
  const appointment = useSelector((state) => state.patient);
  console.log(appointment.list.user_appointments);

  React.useEffect(() => {
    dispatch(getpatient());
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
                              {
                              checkout.show({ amount: item.invoice * 10})
                              dispatch(getId(item._id))
                              }
                              
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
