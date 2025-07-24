import { Stack, Typography } from '@mui/material';
import BBMProfitTotal from './BBMProfitTotal/BBMProfitTotal';
import BBMProfitTable from './BBMProfitTable/BBMProfitTable';


function BBMProfit() {
  return (
    <Stack mt={"100px"}>
      <Typography variant="h4" fontWeight="bold" mb={"2rem"}>BBM burned token reward</Typography>
      <BBMProfitTotal />
      <BBMProfitTable />
    </Stack>
  )
}

export default BBMProfit;