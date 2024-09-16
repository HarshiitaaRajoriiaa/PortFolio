
import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image,  source, title } = props;

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            {/* Image container with cropping */}
            <Box component={'img'} 
                 src={image} 
               //   alt={'mockup'}
                 sx={{
                     width: '50%',    // Adjust this according to the container
                     height: '300px',   // Set height for the image box
                     objectFit: 'cover', // This will crop the image to fit within the box while maintaining aspect ratio
                     borderRadius: '10px', // Optional: Add some rounding to image corners
                 }}
            />
            <h2 style={ {fontSize: '2rem' , margin:'20px' }}>{title}</h2>
            <Box className={'portfolio'}
                 alignItems={'center'} fontSize={'1.5rem'} >
                <Box p={1}  borderRadius={'25px'}>
                    <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} fontSize={'0.1rem'} />
                </Box>
            </Box>
        </Box>
    );
}

export default PortfolioBlock;