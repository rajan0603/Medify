import React from "react";
import { Container, Box, Typography, Grid, Stack} from "@mui/material";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";


export default function Footer () {
    return (
        <Box bgcolor= "primary.secondary" mt = {5}  mb ={1}>
            <Container maxWidth = "xl">
                <Grid container spacing={4}>
                    <Grid item xs = {12} md = {4.5}>
                        <Stack alignItems = "flex-start" justifyContent = "space-between" height = {1}>

                            <Box src = {logo} component = "img" alt = "logo" height = {36} />

                            <Stack direction = "row" spacing = {1.5}>
                                <Box src = {fb} alt = "fb"  component = "img" height = {36} />
                                <Box src = {twitter} alt = "twitter"  component = "img" height = {36}/>
                                <Box src = {yt} alt = "yt"  component = "img" height = {36}/>
                                <Box src = {pinterest} alt = "pinterest"  component = "img" height = {36}/>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item  xs = {12} md = {2.5}>
                        <Stack>
                            <FooterLink> About Us</FooterLink>
                            <FooterLink> Our Prising </FooterLink>
                            <FooterLink> Our Gallery </FooterLink>
                            <FooterLink> Appointment </FooterLink>
                            <FooterLink> Private Policy</FooterLink>
                        </Stack>
                    </Grid>

                    <Grid item  xs = {12} md = {2.5}>
                        <Stack>
                            <FooterLink>Orthology</FooterLink>
                            <FooterLink>Neurology</FooterLink>
                            <FooterLink>Dental Care</FooterLink>
                            <FooterLink>Opthalmology</FooterLink>
                            <FooterLink>cardiology</FooterLink>
                        </Stack>
                    </Grid>

                    <Grid item xs = {12} md = {2.5}>
                        <Stack>
                            <FooterLink> About Us</FooterLink>
                            <FooterLink> Our Prising </FooterLink>
                            <FooterLink> Our Gallery </FooterLink>
                            <FooterLink> Appointment </FooterLink>
                            <FooterLink> Private Policy</FooterLink>
                        </Stack>
                    </Grid>
                </Grid>
                <Typography fontWeight = {400} color = "#FFFFFF" borderTop = "1px solid rgba(255,255,255,0.1)" fontSize = {14}  mt = {5} pt = {3}>
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                </Typography>
            </Container>
        </Box>
    )
};