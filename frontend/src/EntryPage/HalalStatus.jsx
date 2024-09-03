import React from 'react'
import MosqueIcon from '@mui/icons-material/Mosque';
import SavingsIcon from '@mui/icons-material/Savings';
import { Text } from '../components/Typography';
import { Item } from '../components/Item';

const HalalStatus = ({ status }) => {
    return (
        <Item> {status ? (<><MosqueIcon /><Text> Halal</Text></>) : (<><SavingsIcon /><Text>Not Halal</Text></>)}</Item>
    )
}

export default HalalStatus