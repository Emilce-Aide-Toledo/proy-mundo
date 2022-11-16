import React from 'react';
//Material UI
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography'

const CopyRight = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
        {'Copyright (C)'}
        <Link color= 'inherit' href='https://imagina.com'>
            Pagina web
        </Link>
        { ' ' }
        { new Date().getFullYear() }
            
        </Typography>
    );
}

export default CopyRight;
