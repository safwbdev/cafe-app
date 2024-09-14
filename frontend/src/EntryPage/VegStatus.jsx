import React from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import { Text, Item } from '../components';
import { Avatar } from '@mui/material';

const VegStatus = ({ status }) => {
    return (
        <Item>
            <div className='detailBox'>
                <Avatar sx={{ bgcolor: status ? 'green' : '' }}>
                    <SpaIcon />
                </Avatar>
            </div>
            <Text>Vegetarian {status ? 'Available' : 'Unavailable'}</Text>
        </Item>

    )
}

export default VegStatus