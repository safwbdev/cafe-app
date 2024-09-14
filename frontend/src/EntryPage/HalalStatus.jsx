import React from 'react'
import MosqueIcon from '@mui/icons-material/Mosque';
import SavingsIcon from '@mui/icons-material/Savings';
import { Text, Item } from '../components';
import { Avatar } from '@mui/material';

const HalalStatus = ({ status }) => {
    return (
        <Item>
            <div className='detailBox'>
                <Avatar sx={{ bgcolor: status ? 'green' : '' }}>
                    {status ? (<MosqueIcon />) : (<SavingsIcon />)}
                </Avatar>
            </div>
            <Text>{status ? '' : 'Not'} Halal</Text>
        </Item>
    )
}

export default HalalStatus