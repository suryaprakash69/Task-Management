import React from "react";
import { Box, Button, Typography } from "@mui/material";
import TaskIcon from "../assets/TaskIcon.png";
import Row from "./ReusableComponents/Row";
import Column from "./ReusableComponents/Column";
import GoogleIcon from "../assets/GoogleIcon.png";
import circles_bg from "../assets/circles_bg.svg";
import TaskListView from "../assets/TaskListView.svg";

const Login: React.FC = () => {
  return (
    <Row
      gap={5}
      sx={{
        height: "100vh",
        backgroundColor: "#f9f3f8",
        justifyContent: "space-between",
      }}
    >
      {/* Left Section */}
      <Column
        sx={{
          alignItems: "start",
          width: "365.9px",
          height: "167.31px",
          marginLeft: "80.75px",
        }}
      >
        <Row gap={0} sx={{ alignItems: "center" }}>
          <img src={TaskIcon} alt="TaskBuddy Icon" />
          <Typography variant="h4" fontWeight="bold" color="secondary">
            TaskBuddy
          </Typography>
        </Row>
        <Typography
          sx={{ mb: 2, color: "#000000", fontSize: "11px", width: "294.61px" }}
        >
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </Typography>
        <Button
          variant="contained"
          startIcon={<img src={GoogleIcon} />}
          sx={{
            backgroundColor: "#292929",
            color: "#FFFFFF",
            padding: "10px 20px",
            textTransform: "none",
            borderRadius: "20px",
            width: "363.72px",
            height: "56.65px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Continue with Google
        </Button>
      </Column>
      <Box>
        <img
          src={circles_bg}
          style={{
            position: "absolute",
            width: "834.37px",
            height: "834.37px",
          }}
        />
        <img src={TaskListView} style={{ position: "relative", marginLeft:"15vh",
           width: "946px",
           height: "662px",
         }} />
      </Box>
    </Row>
  );
};

export default Login;
