import React from 'react'
import { Item } from '../components/Item'
import { Text } from '../components/Typography'
import CheckIcon from '@mui/icons-material/Check';

const TriedStatus = ({ status }) => {
    return (
        <Item><CheckIcon />
            <Text>{status ? 'Already tried' : 'Not tried yet'}</Text>
        </Item>
    )
}

export default TriedStatus