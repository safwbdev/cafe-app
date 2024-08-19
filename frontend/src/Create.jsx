import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Create = () => {
    const [entry, setEntry] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAdd = () => {
        axios.post(`${import.meta.env.VITE_APP_URL}/add`, { name: entry })
            .then(result => location.reload())
            .catch(err => console.log(err))
    }
    return (
        <>
            <Fab color="primary" aria-label="add" onClick={handleOpen} style={{ position: 'absolute', bottom: '5em', right: '5em' }}>
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        New Entry
                    </Typography>
                    <TextField id="" label="Enter name" variant="outlined" onChange={(e) => setEntry(e.target.value)} />
                    <Button variant="contained" onClick={handleAdd}>Add</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Create