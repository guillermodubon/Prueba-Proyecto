import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Instagram, Facebook, GitHub } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer-container">
      {/* Texto y íconos */}
      <Box className="footer-text-icons">
        <Typography className="footer-text">Follow us on</Typography>
        <Box className="footer-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </Box>
      </Box>

      {/* Línea divisoria */}
      <Divider className="footer-divider" />

      {/* Sección inferior */}
      <Box className="footer-bottom">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/contact">Contact</a>
        <Typography>© 2024 QuickForms. All right reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;

