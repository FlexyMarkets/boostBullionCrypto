import { TableRow, TableHead, TableCell } from '@mui/material';
import { TLCTwoPointOICOTableHeadData } from './TLCTwoPointOICOTableHeadData';

function BBMICOTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          TLCTwoPointOICOTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default BBMICOTableHead;