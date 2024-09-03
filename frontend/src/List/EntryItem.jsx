import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    CardHeader,

} from '@mui/material';
import Card from '@mui/material/Card';

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
        // secondaryAction={
        //     <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(data._id)}>
        //         <DeleteIcon />
        //     </IconButton>
        // }
        >
            <Card sx={{ width: '100%' }} >
                <CardHeader
                    avatar={
                        <Avatar
                            onClick={() => handleEdit(data._id, data.done)}
                            sx={{ bgcolor: data.done ? 'green' : '' }}
                            aria-label="recipe">
                            {data.done ? (<CheckIcon />) : <div />}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={() => handleDelete(data._id)}>
                            <DeleteIcon />
                        </IconButton>
                    }
                    title={
                        <Link to={`/entry/${data._id}`}
                        // style={{ border: '1px solid red' }}
                        >
                            {data.name}
                        </Link>}
                />
            </Card>
            {/* <ListItemButton role={undefined} dense>
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
            </ListItemButton> */}
        </ListItem >
    )
}

export default EntryItem