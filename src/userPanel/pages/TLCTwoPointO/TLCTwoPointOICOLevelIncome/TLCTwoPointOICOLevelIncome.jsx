import { Stack, Container, Typography } from '@mui/material';
import TLCTwoPointOICOLevelIncomeTable from './TLCTwoPointOICOLevelIncomeTable/TLCTwoPointOICOLevelIncomeTable';
import TLCTwoPointOICOLevelIncomeTotal from './TLCTwoPointOICOLevelIncomeTotal/TLCTwoPointOICOLevelIncomeTotal';

function TLCTwoPointOICOLevelIncome() {
  return (
    <Stack mt={"100px"}>
      <Typography variant="h4" fontWeight="bold" mb={"2rem"}>BBM ICO Level Income</Typography>
      <TLCTwoPointOICOLevelIncomeTotal />
      <TLCTwoPointOICOLevelIncomeTable />
    </Stack>
  )
}

export default TLCTwoPointOICOLevelIncome;