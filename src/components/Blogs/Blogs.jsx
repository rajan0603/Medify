import { Box, Container, Typography, Grid} from "@mui/material"
import BlogCard from "./BlogCard";



export default function Blog() {
    return(
        <Box py={6}>
            <Container>
                <Typography color="primary.main" fontWeight={600} textAlign='center'>
                    Blogs and News
                </Typography>
                <Typography variant="h2" textAlign='center'>
                    Read Our Latest News
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs = {12} md = {4}>
                        <BlogCard />
                    </Grid>
                    <Grid item xs = {12} md = {4}>
                        <BlogCard />
                    </Grid>
                    <Grid item xs = {12} md = {4}>
                        <BlogCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>  

        )
};