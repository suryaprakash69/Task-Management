import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import TaskIcon from "../assets/TaskIcon.png";
import Row from "./ReusableComponents/Row";
import Column from "./ReusableComponents/Column";

const Login: React.FC = () => {
  return (
    <Row
      sx={{
        height: "100vh", 
        width: "100vw",
        overflow:"scroll", 
        backgroundColor: "#f9f3f8",
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          display: 'none', // Hide the scrollbar
        }
      }}
    >
      {/* Left Section */}
      <Column
        sx={{
          flex: 1,
          justifyContent: "start",
          alignItems: "start",
          padding: 3,
        }}
      >
        <Row sx={{ alignItems: "center", mb: 2 }}>
          <img src={TaskIcon} alt="TaskBuddy Icon" style={{ marginRight: 8 }} />
          <Typography variant="h4" fontWeight="bold" color="secondary">
            TaskBuddy
          </Typography>
        </Row>
        <Typography variant="body1" sx={{ mb: 4, color: "#666" }}>
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </Typography>
        <Button
          variant="contained"
          startIcon={<Google />}
          sx={{
            backgroundColor: "#292929",
            color: "#FFFFFF",
            padding: "10px 20px",
            textTransform: "none",
            borderRadius: "30px",
          }}
        >
          Continue with Google
        </Button>
      </Column>


    </Row>
  );
};

export default Login;
