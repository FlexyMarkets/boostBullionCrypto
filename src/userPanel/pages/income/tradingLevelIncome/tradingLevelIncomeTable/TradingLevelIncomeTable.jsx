import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import TradingLevelIncomeTableToolbar from "./tradingLevelIncomeTableToolbar/TradingLevelIncomeTableToolbar"
import TradingLevelIncomeTableHead from "./tradingLevelIncomeTableHead/TradingLevelIncomeTableHead"
import TradingLevelIncomeTableRow from "./tradingLevelIncomeTableRow/TradingLevelIncomeTableRow"


function TradingLevelIncomeTable() {

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        padding: { xs: "1rem", md: "2rem" }
                    }}
                >
                    <TradingLevelIncomeTableToolbar />
                    <TableContainer sx={{ overflow: 'auto' }}>
                        <Table sx={{ minWidth: 800 }}>
                            <TradingLevelIncomeTableHead />
                            <TableBody>
                                <TradingLevelIncomeTableRow />
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePaginationComponent />
                </Card>
            </Container>
        </Stack>
    );
}

export default TradingLevelIncomeTable;