import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const BackToTop = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918539008051", "_blank");
    setOpen(false);
  };

  const handleHome = () => {
    navigate("/");
    setOpen(false);
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
      <motion.div
        whileHover={{ scale: 1.12, rotate: 10 }}
        whileTap={{ scale: 0.95, rotate: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Fab
          onClick={handleClick}
          sx={{
            backgroundColor: "#1ab79c",
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#169d87",
            },
          }}
          aria-label={open ? "close actions" : "open actions"}
        >
          <AddIcon fontSize="inherit" />
        </Fab>
      </motion.div>

      {/* Options */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            style={{ display: "flex", flexDirection: "column", marginBottom: 8 }}
          >
            {/* Home (first option) */}
           

            <Tooltip title="Scroll to Top" placement="left">
              <motion.div whileHover={{ scale: 1.13, rotate: 8 }} whileTap={{ scale: 0.95, rotate: -8 }}>
                <Fab
                  onClick={handleScrollTop}
                  size="medium"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#e34e65",
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#f7eaea",
                    },
                  }}
                  aria-label="scroll to top"
                >
                  <KeyboardArrowUpIcon fontSize="large" />
                </Fab>
              </motion.div>
            </Tooltip>
             <Tooltip title="Home" placement="left">
              <motion.div whileHover={{ scale: 1.13, rotate: 8 }} whileTap={{ scale: 0.95, rotate: -8 }}>
                <Fab
                  onClick={handleHome}
                  size="medium"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#e34e65",
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#f7eaea",
                    },
                  }}
                  aria-label="go to home"
                >
                  <HomeIcon fontSize="large" />
                </Fab>
              </motion.div>
            </Tooltip>

            <Tooltip title="WhatsApp" placement="left">
              <motion.div whileHover={{ scale: 1.13, rotate: -8 }} whileTap={{ scale: 0.95, rotate: 8 }}>
                <Fab
                  onClick={handleWhatsApp}
                  size="medium"
                  sx={{
                    backgroundColor: "#25d366",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1ebc59",
                    },
                  }}
                  aria-label="open whatsapp"
                >
                  <WhatsAppIcon fontSize="large" />
                </Fab>
              </motion.div>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default BackToTop;
