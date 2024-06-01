import { Container, Box, Stack } from "@mui/material";
import HeroImage from "../components/HeroImage/HeroImage";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import FAQs from "../components/FAQs/FAQs";
import Families from "../components/Families/Families";
import Blogs from "../components/Blogs/Blogs";
import PatientCaring from "../components//PatientCaring/PatientCaring";
import Specialists from "../components/Specialist/Specialist";
import Specialization from "../components/Specialization/Specialization";
import Offers from "../components/Offers/Offers";
import NavBar from "../components/Navbar/Navbar";
import HeroServices from "../components/HeroServices/HeroServices";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroImage />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specialization />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <Families />

      <FAQs />
    </Box>
  );
}
