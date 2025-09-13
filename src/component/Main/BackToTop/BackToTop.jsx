import React, { useState } from "react";
import { Box, Fab, Zoom, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";

const BackToTop = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918539008051", "_blank"); // Replace with your WhatsApp number
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-end",
        zIndex: 9999,
      }}
    >
      {/* Main Floating Button */}
      <Fab
        onClick={handleClick}
        sx={{
          backgroundColor: "#1ab79c",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
          '&:hover': {
            backgroundColor: "#169d87",
          },
        }}
      >
        <AddIcon fontSize="inherit" />
      </Fab>

      {/* Options */}
      <Zoom in={open}>
        <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
          <Tooltip title="Scroll to Top" placement="left">
            <Fab
              onClick={handleScrollTop}
              size="medium"
              sx={{
                backgroundColor: "#fff",
                color: "#e34e65",
                mb: 1,
                fontSize: "1.5rem",
                '&:hover': {
                  backgroundColor: "#fce4ec",
                },
              }}
            >
              <KeyboardArrowUpIcon fontSize="large" />
            </Fab>
          </Tooltip>

          <Tooltip title="Chat on WhatsApp" placement="left">
            <Fab
              onClick={handleWhatsApp}
              size="medium"
              sx={{
                backgroundColor: "#fff",
                color: "#e34e65",
                fontSize: "1.5rem",
                '&:hover': {
                  backgroundColor: "#fce4ec",
                },
              }}
            >
              <WhatsAppIcon fontSize="large" />
            </Fab>
          </Tooltip>
        </Box>
      </Zoom>
    </Box>
  );
};

export default BackToTop;
