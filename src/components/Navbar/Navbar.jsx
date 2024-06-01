import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import {Box, Typography, Stack, Container, Button, IconButton, useMediaQuery,} from "@mui/material";
import logo from "../../assets/logo.png";
import {Link }from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar(){
    const isMobile = useMediaQuery("(max-width : 900px)");
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <Box bgcolor = "primary.main" p = {1}>
                <Typography fontSize = {14} color = "#fff" textAlign = "center">
                    The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
                </Typography>
            </Box>

            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} py={2}>
                    <Link to = '/'>
                        <img src = {logo} alt = "logo" height = {27} />
                    </Link>

                    <Stack direction= {{xs : "column", md : "row"}} alignItems={{xs: "flex-start", md : "center"}} spacing={4}
                        className={[styles.navlinks, menuOpen && styles.active]}
                        pt={{ xs: 12, md: 1 }}
                        pb={{ xs: 4, md: 1 }}
                        px={{ xs: 4, md: 0 }} 
                    >
                        <Link to = "/search">Find Doctors</Link>
                        <Link > Hospitals </Link>
                        <Link> Medicines </Link>
                        <Link>Surgeries</Link>
                        <Link>Softwer for provider</Link>
                        <Link>Facilities</Link>
                        <Link to = "/booking"> 
                            <Button variant="contained" disableElevation>My Booking</Button>
                        </Link>

                        {isMobile && (
                            <IconButton 
                            onClick={() => setMenuOpen(false)}
                            sx={{
                              position: "absolute",
                              top: 0,
                              right: 32,
                              color: "#fff" }}
                            >
                                <CloseIcon />
                            </IconButton>
                        )}
                    </Stack>
                        {isMobile && (
                            <IconButton onClick={() => setMenuOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        )}
                </Stack>
            </Container>
        </header>
    )
};