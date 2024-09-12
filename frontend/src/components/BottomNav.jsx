import React from 'react'
// routing
import { Link } from 'react-router-dom';
// components
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material/Box';
// logos
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BottomNav = () => {
    return (
        <Box sx={{ width: '100%', bottom: 0, position: 'absolute' }}>
            <BottomNavigation
                showLabels
                style={{
                    background: 'lightGrey'
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to='/' />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} component={Link} to='/favorites' />
            </BottomNavigation>
        </Box >
    )
}

export default BottomNav