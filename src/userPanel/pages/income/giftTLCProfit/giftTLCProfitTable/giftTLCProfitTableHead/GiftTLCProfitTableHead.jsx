import { TableRow, TableHead, TableCell } from '@mui/material';
import { giftTLCProfitTableHeadData } from './giftTLCProfitTableHeadData';

function GiftTLCProfitTableHead() {
    return (
        <TableHead>
            <TableRow>
                {
                    giftTLCProfitTableHeadData.map((data, i) => (
                        <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );
}

export default GiftTLCProfitTableHead;