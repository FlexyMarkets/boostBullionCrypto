import { Stack, Container, Typography } from '@mui/material';
import TLCTwoPointOLevelIncomeTable from "./TLCTwoPointOLevelIncomeTable/TLCTwoPointOICOLevelIncomeTable"
import TLCTwoPointOLevelIncomeTotal from './TLCTwoPointOLevelIncomeTotal/TLCTwoPointOICOLevelIncomeTotal';


function TLCTwoPointOLevelIncome() {
  return (
    <Stack  mt={"100px"}>
      <Typography variant="h4" fontWeight="bold" mb={"2rem"}>BBM Level Income</Typography>
      <TLCTwoPointOLevelIncomeTotal />
      <TLCTwoPointOLevelIncomeTable />
    </Stack>
  )
}

export default TLCTwoPointOLevelIncome;