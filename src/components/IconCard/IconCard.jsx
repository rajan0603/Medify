import React from "react";
import {Box, Stack, Typography} from "@mui/material";

export default function IconCard({img, title, active, bgColor}){
    return ( 
        <Stack p={3} spacing={2} borderRadius={2} border={active ? "1px solid #2AA7FF" : "0"} alignItems="center" bgcolor={active ? "rgba(42,167,255,0.08)": {bgColor}} >
            <Box component="img" src = {img} alt="img" height={60} width={60}  />
            <Typography color={active ? "primary.main" :"#ABB6C7"} fontSize={18} fontWeight={active ? 600 : 400 } >{title}</Typography>
        </Stack>
    )
};