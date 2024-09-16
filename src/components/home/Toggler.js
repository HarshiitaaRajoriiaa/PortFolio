import React from 'react';
import { Box } from "@mui/material";

export default function Toggler({ darkMode, handleClick }) {
   const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{ cursor: 'pointer', ":hover": { transform: 'translateY(-3px)', transition: transition } }}>
         {
            darkMode ?
            <span onClick={handleClick} role="img">🌙</span>
               :
            <span onClick={handleClick} role="img">🌚</span>
         }
      </Box>
   )
}