import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import WalletAddressTableToolbar from "./walletAddressTableToolbar/WalletAddressTableToolbar"
import WalletAddressTableRow from "./walletAddressTableRow/WalletAddressTableRow"
import WalletAddressTableHead from "./walletAddressTableHead/WalletAddressTableHead"


function WalletAddressTable() {

  return (
    <Stack mt={"2rem"}>
      {/* <Container> */}
        <Card
          sx={{
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "2rem",
            padding: { xs: "1rem", md: "2rem" }
          }}
        >
          <WalletAddressTableToolbar />
          <TableContainer>
            <Table sx={{ minWidth: 800 }}>
              <WalletAddressTableHead />
              <TableBody>
                <WalletAddressTableRow />
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePaginationComponent /> */}
        </Card>
      {/* </Container> */}
    </Stack>
  );
}

export default WalletAddressTable;