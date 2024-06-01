import React, {useState, useEffect} from "react";
import {MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SearchHospital(){
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [data, setdata] = useState({
        state: "",
        city: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchState = async () => {
            try{
                const res = await axios.get("https://meddata-backend.onrender.com/states");
                setStates(res.data);
            }
            catch(err){
                console.log("error while fetching states", err);
            }
        }
        
        fetchState();
        
    }, []);

    useEffect(() => {
        const fetchCities = async () => {
            try{
                setCities([]);
                setdata((prevData) => ({...prevData, city : ""}));
                const res = await axios.get(`https://meddata-backend.onrender.com/cities/${data.state}`);
                setCities(res.data);
            }
            catch(err){
                console.log("error while fetching cities", err);
            }
        }
        if(data.state !== ""){
            fetchCities();
        }
        fetchCities();

    }, [data.state])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(data.state && data.city){
            navigate(`/search?state=${data.state}&city=${data.city}`);
        };

    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setdata((prevData) => ({...prevData, [name]:value}));
        if (data.state && data.city) {
            navigate(`/search?state=${data.state}&city=${data.city}`);
          }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx = {{display:"flex", justifyContent:"space-between", flexDirection: {xs:"column", md: "row"}}}>
            <Select displayEmpty name="state" value = {data.state} id="state" onChange= {handleChange} 
                startAdornment={
                    <InputAdornment position="start" >
                        <SearchIcon />
                    </InputAdornment>
                }
                required
                sx={{ minWidth: 200, width: "100%" }}
            >
                <MenuItem value= "" selected>
                    state
                </MenuItem>
                {states && (states.map((state) => (
                    <MenuItem key={state} value = {state}>
                        {state}
                    </MenuItem>
                )))}
            </Select>
            <Select displayEmpty name="city" value = {data.city} id="city" onChange= {handleChange} 
                startAdornment={
                    <InputAdornment position="start" >
                        <SearchIcon />
                    </InputAdornment>
                }
                required
                sx={{ minWidth: 200, width: "100%" }}
            >
                <MenuItem value= "" selected>
                    city
                </MenuItem>
                {cities && (cities.map((city) => (
                    <MenuItem key={city} value = {city}>
                        {city}
                    </MenuItem>
                )))}
            </Select>

            <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{ py: "15px", px: 8, flexShrink: 0 }}
                disableElevation
            >
                Search
            </Button>
        </Box>
    )
};