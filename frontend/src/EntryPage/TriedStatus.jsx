import React from 'react'
import { Item, Text } from '../components'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';

const TriedStatus = ({ status }) => {
    return (
        <Item>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '.5em' }}>
                <Avatar sx={{ bgcolor: status ? 'green' : '' }}>
                    {status ? (<CheckIcon />) : (<CloseIcon />)}
                </Avatar>
            </div>
            <Text>{status ? 'Already tried' : 'Not tried yet'}</Text>
        </Item >
    )
}

export default TriedStatus