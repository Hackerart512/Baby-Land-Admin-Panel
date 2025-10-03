import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const Dashboard = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Paper sx={{ p: 3 }}>
                <Typography>Welcome to the Admin Dashboard </Typography>
            </Paper>
        </Box>
    );
};

export default Dashboard;
