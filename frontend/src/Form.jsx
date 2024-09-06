import React, { useState } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Subheader, Text } from './components';
import {
    Button,
    Box,
    Checkbox,
    Fab,
    FormControlLabel,
    FormGroup,
    Modal,
    Stack,
    TextField
} from '@mui/material';

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
const Form = ({ data, update }) => {

    const isEdit = data !== undefined;

    const [name, setName] = useState(isEdit ? data.name : '');
    const [location, setLocation] = useState(isEdit ? data.location : '');
    const [map, setMap] = useState(isEdit ? data.map : '');
    const [menu, setMenu] = useState(isEdit ? data.menu : '');
    const [socials, setSocials] = useState(isEdit ? data.socials : ['']);
    const [type, setType] = useState(isEdit ? data.type : '');
    const [vegetarian, setVegetarian] = useState(data ? data.vegetarian : false);
    const [halal, setHalal] = useState(isEdit ? data.halal : false);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = (id) => {
        update(id, { name: name, location: location, map: map, menu: menu, type: type, vegetarian: vegetarian, halal: halal, socials: socials })
    }

    const handleCreate = () => {
        axios.post(`${import.meta.env.VITE_APP_URL}/add`, { name: name, map: map, menu: menu, type: type, vegetarian: vegetarian, halal: halal })
            .then(result => location.reload())
            .catch(err => console.log(err))
    }

    const handleSocial = (index, event) => {
        let data = [...socials];
        data[index] = event.target.value;
        setSocials(data);
    }

    const addSocial = () => {
        setSocials([...socials, ''])
    }
    const deleteSocial = (id) => {
        setSocials(socials.filter((a, index) => index !== id))
    }

    return (
        <>
            <Fab color="primary" aria-label="add" onClick={handleOpen} style={{ position: 'absolute', bottom: '5em', right: '5em' }}>
                {isEdit ? (<EditIcon />) : (<AddIcon />)}
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Subheader>
                        {isEdit ? 'Edit Entry' : 'New Enttry'}
                    </Subheader>
                    <Stack
                        component="form"
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField id="location" label="Location" variant="outlined" value={location} onChange={(e) => setLocation(e.target.value)} />
                        <TextField id="map" label="Map" variant="outlined" value={map} onChange={(e) => setMap(e.target.value)} />
                        <TextField id="menu" label="Menu" variant="outlined" value={menu} onChange={(e) => setMenu(e.target.value)} />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={vegetarian} />} label="Vegetarian Friendly" onClick={() => setVegetarian(!vegetarian)} />
                            <FormControlLabel control={<Checkbox checked={halal} />} label="Halal" onClick={() => setHalal(!halal)} />
                        </FormGroup>
                        <Text>Socials</Text>
                        {socials && socials.map((social, sIndex) => (
                            <div style={{ display: 'flex' }} key={sIndex}>
                                <TextField id={`socialInput${sIndex + 1}`} label={`Link ${sIndex + 1}`} variant="outlined" value={social}
                                    style={{ width: '100%' }}
                                    onChange={e => handleSocial(sIndex, e)}
                                />
                                <Button
                                    sx={{ bgcolor: 'red' }}
                                    variant="contained"
                                    onClick={() => deleteSocial(sIndex)}
                                ><CloseIcon /></Button>
                            </div>

                        ))}
                        <Button variant="contained" onClick={addSocial}>Add</Button>
                        <Button variant="contained" onClick={() => {
                            isEdit ?
                                handleSave(data._id)
                                : handleCreate()
                        }}>Save</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default Form