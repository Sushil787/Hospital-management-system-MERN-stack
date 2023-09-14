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
import moment from "moment";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";


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
  const navigate=useNavigate()
  const [id, setId] = React.useState(null);
  const [report,setReport]=React.useState(false)

  const [selectedInvoice, setSelectedInvoice] = React.useState(null);

  const dispatch = useDispatch();
  const tokens = localStorage.getItem("jwt");

  const MakePayment = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/patient/payment",
        {
          status: "paid",
          _id: id,
        },
        {
          headers: {
            authorization: tokens,
          },
        }
      );

      console.log(response.data);
      toast.success("payment successfull!!!");
      setReport(true)
      setId(null);
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

        MakePayment(id);
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
  }, [dispatch, id]);

  React.useEffect(() => {
    if (id && selectedInvoice) {
      checkout.show({ amount: selectedInvoice * 100 });
    }
  }, [id, selectedInvoice]);

  return (
    <>

    <Grid container sx={{display:"flex" ,flexDirection:'column'}}>
      <Grid item sx={{
        marginTop:"20px",
        marginBottom:"20px"
      }}>
      <Typography variant="h4" align="center" gutterBottom>
            User DashBoard
          </Typography>
      </Grid >
      <Grid item>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Doctors Name</StyledTableCell>

              <StyledTableCell align="left">Disease</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              {/* <StyledTableCell align="left">Status</StyledTableCell> */}
              <StyledTableCell align="left">Invoice</StyledTableCell>
              <StyledTableCell align="left">Pay Now</StyledTableCell>
              <StyledTableCell align="left">Report</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointment?.list?.user_appointments?.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell align="left">
                  {item?.doctor?.name}
                </StyledTableCell>
                <StyledTableCell align="left">{item?.disease}</StyledTableCell>
                <StyledTableCell align="left">{moment.utc(item?.date).format('MM/DD/YYYY')}</StyledTableCell>
                {/* <StyledTableCell align="left">{item?.status}</StyledTableCell> */}
                <StyledTableCell align="left">{item?.doctor?.ammount}</StyledTableCell>
                <StyledTableCell align="left">
                
                      <Box
                        sx={{
                          display: "inline-block",
                          backgroundColor: "purple",
                          padding: " 0px 10px",
                          color: "white",
                          cursor: "pointer",
                          fontWeight: "bold",
                          border: "1px solid white",
                        }}
                      >

                { item?.payment !== "paid"
                     ? (
                           <button
                           onClick={() => {
                             // setId(item._id)
                             // if(id)
                             // {
                             //   checkout.show({ amount: item.invoice * 100})
                             // }
                             setId(item?._id);
                             setSelectedInvoice(item?.doctor?.ammount);
                           }}
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
                        )  :( <Typography>paid</Typography>)
                          }
                       
                      </Box>
                  
                </StyledTableCell>
                <StyledTableCell align="left">
                  { item?.payment === "paid"
                     ? (

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

                       onClickCapture={() => navigate(`/report/${item._id}`)
                      }
                        
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "inherit",
                          cursor: "inherit",
                          padding: 0,
                        }}
                      >
                        Report
                      </button>
                    </Box>
                      
                    ) : (
                      <Typography>pending....</Typography>
                    )
                   }
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
       
    </Grid>
     
    </>
  );
}
