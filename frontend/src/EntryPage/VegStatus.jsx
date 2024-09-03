import React from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import { Text } from '../components/Typography';
import { Item } from '../components/Item';

const VegStatus = ({ status }) => {
    return (
        <Item>
            <SpaIcon />
            <Text>Vegetarian {status ? 'Available' : 'Unavailable'}</Text>
        </Item>

    )
}

export default VegStatus