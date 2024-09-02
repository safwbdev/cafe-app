import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Subheader } from './components/Typography';
import {
    Button,
    Box,
    Checkbox,
    Fab,
    FormControlLabel,
    FormGroup,
    Modal,
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
const Edit = ({ data, update }) => {
    const [name, setName] = useState(data.name);
    const [location, setLocation] = useState(data.location);
    const [map, setMap] = useState(data.map);
    const [menu, setMenu] = useState(data.menu);
    const [type, setType] = useState(data.type);
    const [vegetarian, setVegetarian] = useState(data.vegetarian);
    const [halal, setHalal] = useState(data.halal);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = (id) => {
        update(id, { name: name, location: location, map: map, menu: menu, type: type, vegetarian: vegetarian, halal: halal })
    }
    return (
        <>
            <Fab color="primary" aria-label="add" onClick={handleOpen} style={{ position: 'absolute', bottom: '5em', right: '5em' }}>
                <EditIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Subheader>
                        Edit Entry
                    </Subheader>
                    <TextField id="" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField id="" label="Location" variant="outlined" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <TextField id="" label="Map" variant="outlined" value={map} onChange={(e) => setMap(e.target.value)} />
                    <TextField id="" label="Menu" variant="outlined" value={menu} onChange={(e) => setMenu(e.target.value)} />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={vegetarian} />} label="Vegetarian Friendly" onClick={() => setVegetarian(!vegetarian)} />
                        <FormControlLabel control={<Checkbox checked={halal} />} label="Halal" onClick={() => setHalal(!halal)} />
                    </FormGroup>
                    <Button variant="contained" onClick={() => handleSave(data._id)}>Save</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit