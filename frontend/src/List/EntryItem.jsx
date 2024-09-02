import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material/Checkbox';

const EntryItem = ({ data }) => {

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
                <Link to={`/entry/${data._id}`}>
                    <ListItemText primary={data.name} />
                </Link>
            </ListItemButton>
        </ListItem >
    )
}

export default EntryItem