"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // ✅ جلوگیری از Hydration Error

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#a91f64",
        opacity: "0.85",
        color: "white",
        py: 3,
        px: 2,
        mt: "auto",
        position: "relative",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      {/* 🔹 لینک‌ها و عنوان */}
      <Box display="flex" justifyContent="space-between" flexWrap="wrap" mb={2}>
        <Typography
          variant="h6"
          fontWeight="bold"
          fontFamily="cursive"
          sx={{ textAlign: "center", flexGrow: 1 }}
        >
          Developed by Mohammadreza Afroozi
        </Typography>

        <Box display="flex" gap={3} sx={{ justifyContent: "center" }}>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="/products" color="inherit" underline="hover">
            Products
          </Link>
          <Link href="/cart" color="inherit" underline="hover">
            Shopping Basket
          </Link>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 2 }} />

      {/* 🔹 شبکه‌های اجتماعی */}
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Typography variant="body2">
          © 2025 AfrooziDev Furniture Shop. All rights reserved.
        </Typography>

        <Box>
          <IconButton href="https://www.linkedin.com/in/afroozidev/" target="_blank" color="inherit">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/afroozi_dev" target="_blank" color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://github.com/mohammadrezaafroozi" target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
