import React from 'react'
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

const CafeItem = ({ data }) => {

    const handleEdit = (id, value) => {
        axios.put(`${import.meta.env.VITE_APP_URL}/updatecheck/${id}`, { done: !value }).then(result => location.reload()
        ).catch(err => console.log(err));

    }

    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_APP_URL}/delete/${id}`).then(result => location.reload()
        ).catch(err => console.log(err));

    }
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(data._id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={data.done}
                        tabIndex={-1}
                        disableRipple
                        onClick={() => handleEdit(data._id, data.done)}
                    />
                </ListItemIcon>
                <ListItemText primary={data.name} />
            </ListItemButton>
        </ListItem>
    )
}

export default CafeItem