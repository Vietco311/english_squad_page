import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box, Typography } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" component="h2" gutterBottom>
        English Squad
      </Typography>
      <App />
    </Box>
  </React.StrictMode>
);

reportWebVitals();
