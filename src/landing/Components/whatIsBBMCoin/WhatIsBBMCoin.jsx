import { Button, Container, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
// import { aboutData } from "./aboutData"
// import { Icon } from '@iconify/react';
import { Fade } from "react-awesome-reveal";
import { verticalMove } from "../customStyle";


function WhatIsBBMCoin() {
    return (
        <Stack sx={{ my: "5rem", mt: "8rem" }}>
            <Container>
                <Grid container size={12} spacing={{ xs: 5, md: 8, lg: 20 }}>
                    <Grid
                        size={{ xs: 12, md: 6 }}
                        height={{ xs: "20rem", md: "auto" }}
                        sx={{
                            borderRadius: { md: "1rem 5rem 1rem 5rem" },
                            overflow: "hidden",
                            animation: `${verticalMove} 1s infinite alternate`
                        }}
                    >
                        <img
                            // src={data.img}
                            alt="error"
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} display={"flex"} flexDirection={"column"} gap={".8rem"} justifyContent={"center"} py={"2rem"}>
                        <Fade triggerOnce>
                            {/* <Typography fontWeight={"700"} fontSize={"1.2rem"} color="#f1b811">{data.kind}</Typography> */}
                            <Typography variant="h1" fontWeight={"700"} fontSize={"1.5rem"}>
                                What is BBM Coin?
                            </Typography>
                            <Typography fontSize={"1.1rem"} color="#707070">
                                <Typography component={"span"} sx={{ fontWeight: "bold", color: "#f1b811" }}>BBM Coin (Boost Bullion Market Coin)</Typography> is a <Typography component={"span"} sx={{ fontWeight: "bold", color: "#f1b811" }}>BEP-20</Typography> token developed to streamline cross-border transactions, enhance transparency in the bullion market, and support decentralized financial growth.
                                With a <Typography component={"span"} sx={{ fontWeight: "bold", color: "#f1b811" }}>limited total supply of just 50 million tokens</Typography>, BBM Coin combines scarcity, utility, and innovation in one powerful digital asset.
                            </Typography>
                            {/* {
                                data.points.map((item, i) => (
                                    <Stack key={i} flexDirection={"row"} gap={"1rem"}>
                                        <Icon icon="material-symbols:check" fontSize={"2rem"} color="#f1b811" />
                                        <Typography color="#707070">{item}</Typography>
                                    </Stack>
                                ))
                            } */}
                            {/* <Button variant="contained" sx={{ bgcolor: "#f1b811", textTransform: "capitalize", width: "8rem" }}>{data.buttonName}</Button> */}
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    )
}

export default WhatIsBBMCoin;