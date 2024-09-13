import React from 'react'
import axios from 'axios';
import { useMycontext } from '../context/MainProvider';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
    Avatar,
    Card,
    CardHeader,
    IconButton,
    ListItem,
} from '@mui/material';

const EntryItem = ({ data, isFavorite }) => {
    const { setFavorites, favorites } = useMycontext()

    const handleEdit = (id, value) => {
        axios.put(`${import.meta.env.VITE_APP_URL}/updatecheck/${id}`, { done: !value }).then(result => location.reload()
        ).catch(err => console.log(err));

    }

    const handleDelete = (id) => {
        if (isFavorite) {
            setFavorites(favorites.filter((a) => a !== id));
            // location.reload(); // use this when ready
        } else {
            axios.delete(`${import.meta.env.VITE_APP_URL}/delete/${id}`).then(result => location.reload()
            ).catch(err => console.log(err));
        }

    }
    return (
        <ListItem>
            <Card sx={{ width: '100%' }} >
                <CardHeader
                    avatar={
                        <Avatar
                            onClick={() => handleEdit(data._id, data.done)}
                            sx={{ bgcolor: data.done ? 'green' : '' }}
                            aria-label="entry">
                            {data.done ? (<CheckIcon />) : <div />}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={() => handleDelete(data._id)}>
                            {isFavorite ? (<CloseIcon />) : (<DeleteIcon />)}
                        </IconButton>
                    }
                    title={<Link to={`/entry/${data._id}`}>{data.name}</Link>}
                />
            </Card>
        </ListItem >
    )
}

export default EntryItem