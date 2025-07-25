import { Card, CardContent, Stack, Typography, Container, Skeleton } from '@mui/material';
import Grid from "@mui/material/Grid2"
import { TLCTwoPointOICOWalletdata } from "./TLCTwoPointOICOWalletData"
import { useGetUserProfileQuery } from '../../../../../globalState/settings/profileSettingApi';
import EqualizerIcon from '@mui/icons-material/Equalizer';

function BBMICOWallet() {

  const { data, isLoading } = useGetUserProfileQuery()

  const TLCTwoPointOICOWalletdata = [
    {
      walletHeading: "Coin Balance",
      walletBalance: !isLoading && data?.data?.COINBalance,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Total burned token",
      walletBalance: !isLoading && data?.data?.totalBurnedToken,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Burned token reward",
      walletBalance: !isLoading && data?.data?.burnedTokenReward,
      icon: EqualizerIcon
    },
    {
      walletHeading: "Burned token referral",
      walletBalance: !isLoading && data?.data?.totalBurnedReferralToken,
      icon: EqualizerIcon
    }
  ]

  return (
    <Stack mt={"2rem"}>
      <Grid container size={12} spacing={4}>
        {
          TLCTwoPointOICOWalletdata.map((data, i) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <CardContent key={i} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Stack sx={{ flexDirection: "column", gap: ".5rem" }}>
                    <Typography>{data.walletHeading}</Typography>
                    <Typography>{isLoading ? <Skeleton /> : data.walletBalance}</Typography>
                  </Stack>
                  <Typography><data.icon sx={{ fontSize: "5rem", color: "primary.main" }} /></Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Stack>
  )
}

export default BBMICOWallet;