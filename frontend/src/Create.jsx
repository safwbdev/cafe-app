import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [map, setMap] = useState('');
    const [menu, setMenu] = useState('');
    const [type, setType] = useState(0);
    const [vegetarian, setVegetarian] = useState(false);
    const [halal, setHalal] = useState(false);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAdd = () => {
        axios.post(`${import.meta.env.VITE_APP_URL}/add`, { name: name, map: map, menu: menu, type: type, vegetarian: vegetarian, halal: halal })
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
                    <TextField id="" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
                    <TextField id="" label="Location" variant="outlined" onChange={(e) => setLocation(e.target.value)} />
                    <TextField id="" label="Map" variant="outlined" onChange={(e) => setMap(e.target.value)} />
                    <TextField id="" label="Menu" variant="outlined" onChange={(e) => setMenu(e.target.value)} />

                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={vegetarian} />} label="Vegetarian Friendly" onClick={() => setVegetarian(!vegetarian)} />
                        <FormControlLabel control={<Checkbox checked={halal} />} label="Halal" onClick={() => setHalal(!halal)} />
                    </FormGroup>
                    <Button variant="contained" onClick={handleAdd}>Add</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Create