import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../assets/Doctor.png";
import pharmacyIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import capsuleIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function HeroServises () {
    const icons = useMemo(() => [
        {icon: doctorIcon, title: "Doctors"},
        {icon: pharmacyIcon, title: "Labs"},
        {icon: hospitalIcon, title: "Hospitals", active: true},
        {icon: capsuleIcon, title: "Medical Store"},
        {icon: ambulanceIcon, title: "Ambulance"},
    ], []);

    return (
        <Box>
            <Typography component="h4" textAlign="center" color = "#102851" fontSize={20} fontWeight={500} mb = {2}>You may be looking for</Typography>
            <Grid
                container
                columnSpacing={{ xs: 1, md: 2 }}
                justifyContent={"center"}
            >
                {icons.map((icon) => (
                <Grid item key={icon.title} xs={4} md={2.4}>
                    <IconCard
                        img={icon.icon}
                        title={icon.title}
                        active={icon.active || false}
                        bgColor="#FAFBFE"
                    />
                </Grid>
                ))}
            </Grid>
        </Box>
    )
};