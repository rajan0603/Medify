import React from "react";
import {Box, Container, Typography, Button, Stack, Grid} from "@mui/material"
import SmsForm from "./SmsForm";
import mobile from "../../assets/mobile.jpg";
import arrow from "../../assets/down-arr.png";
import playstore from "../../assets/playstore.png";
import apple from "../../assets/apple-logo.png";

export default function DownloadApp() {
    return (
        <Box sx = {{background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5}}>
            <Container >
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs = {12} md = {5.5}>
                        <Box src = {mobile} component = "img" width = {1} height = "auto" />
                    </Grid>

                    <Grid item xs = {12} md = {6.5}>
                        <Box position = "relative" mb = {{xs: 4, md : 0}} pl = {{xs : "36px" , md: "50px"}}>
                            <Typography variant = "h2" mb = {2}>
                                Download The
                                <Box component = "span" color = "primary.main">
                                    Medify{" "}
                                </Box>
                                App
                            </Typography>
                            <Box component = "img"
                                src = {arrow}
                                position = "absolute"
                                width = {{xs: "24px", md : "40px"}}
                                top = {50}
                                left = {0} />

                            <SmsForm />

                            <Stack direction = {{xs: "column", md: "row"}} spacing = {{xs: 1, md: 2 }}>
                                <Button sx={{ bgcolor: "#333", color: "#fff", py: 1.5, borderRadius: 1.5}}
                                    size={"large"}
                                    startIcon={<img src={playstore} alt = "playstore" height={24} />}
                                    variant="contained"
                                    disableElevation 
                                >
                                    Google Play
                                </Button>
                                <Button sx={{ bgcolor: "#333", color: "#fff", py: 1.5, borderRadius: 1.5}}
                                    size={"large"}
                                    startIcon={<img src={apple} alt = "apple" height={24} />}
                                    variant="contained"
                                    disableElevation 
                                >
                                    App Store
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};
