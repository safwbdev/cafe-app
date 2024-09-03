import React from 'react'
import { Item, Text } from '../components/Item'
import CheckIcon from '@mui/icons-material/Check';

const TriedStatus = ({ status }) => {
    return (
        <Item><CheckIcon />
            <Text>{status ? 'Already tried' : 'Not tried yet'}</Text>
        </Item>
    )
}

export default TriedStatus