import React from 'react'
// routing
import { Link } from 'react-router-dom';
// components
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
// logos
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BottomNav = () => {
    return (
        <Box sx={{ width: '100%', bottom: 0, position: 'absolute' }}>
            <BottomNavigation
                className='bottomNav'
                showLabels
            >
                <BottomNavigationAction
                    component={Link}
                    icon={<HomeIcon />}
                    label="Home"
                    to='/' />
                <BottomNavigationAction
                    component={Link}
                    icon={<FavoriteIcon />}
                    label="Favorites"
                    to='/favorites' />
            </BottomNavigation>
        </Box >
    )
}

export default BottomNav