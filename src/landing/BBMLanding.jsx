import Header from './layout/Header';
import Footer from './layout/Footer';
import { Stack } from '@mui/material';
import HeroBanner from './Components/heroBanner/HeroBanner';
import WhatIsBBMCoin from './Components/whatIsBBMCoin/WhatIsBBMCoin';
import BBMCoinKeyFeatures from './Components/BBMCoinKeyFeatures/BBMCoinKeyFeatures';

function BBMLanding() {
    return (
        <>
            <Header />
            <HeroBanner />
            <BBMCoinKeyFeatures />
            <WhatIsBBMCoin />
            <Stack sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>BBMLanding</Stack>
            <Footer />
        </>
    )
}

export default BBMLanding;