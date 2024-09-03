import React from 'react'
import MosqueIcon from '@mui/icons-material/Mosque';
import SavingsIcon from '@mui/icons-material/Savings';
import { Text, Item } from '../components';

const HalalStatus = ({ status }) => {
    return (
        <Item> {status ? (<><MosqueIcon /><Text> Halal</Text></>) : (<><SavingsIcon /><Text>Not Halal</Text></>)}</Item>
    )
}

export default HalalStatus