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
    width: '90%',
    height: '100vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};
const Form = ({ data, update }) => {

    const isEdit = data !== undefined;

    const [name, setName] = useState(isEdit ? data.name : '');
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
        update(id, { name: name, map: map, menu: menu, type: type, vegetarian: vegetarian, halal: halal, socials: socials })
    }

    const handleCancel = () => {
        setName(isEdit ? data.name : '');
        setMap(isEdit ? data.map : '');
        setMenu(isEdit ? data.menu : '');
        setSocials(isEdit ? data.socials : ['']);
        setType(isEdit ? data.type : '');
        setVegetarian(isEdit ? data.vegetarian : false);
        setHalal(isEdit ? data.halal : false);
        setOpen(false);
    }

    const handleCreate = () => {
        axios.post(`${import.meta.env.VITE_APP_URL}/api/entries`, { name: name, map: map, menu: menu, type: type, vegetarian: vegetarian, halal: halal })
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
            <Fab
                aria-label="add"
                className='openFormButton'
                color="primary"
                onClick={handleOpen}
            >
                {isEdit ? (<EditIcon />) : (<AddIcon />)}
            </Fab>
            <Modal
                aria-describedby="modal-modal-description"
                aria-labelledby="modal-modal-title"
                onClose={handleClose}
                open={open}
            >
                <Box sx={style}>
                    <Subheader>
                        {isEdit ? 'Edit Entry' : 'New Entry'}
                    </Subheader>
                    <Stack
                        component="form"
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)}
                        />
                        <TextField
                            id="map"
                            label="Map"
                            variant="outlined"
                            value={map}
                            onChange={(e) =>
                                setMap(e.target.value)}
                        />
                        <TextField
                            id="menu"
                            label="Menu"
                            variant="outlined"
                            value={menu}
                            onChange={(e) =>
                                setMenu(e.target.value)}
                        />
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={vegetarian} />}
                                label="Vegetarian Friendly"
                                onClick={() => setVegetarian(!vegetarian)}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={halal} />}
                                label="Halal"
                                onClick={() => setHalal(!halal)}
                            />
                        </FormGroup>
                        <Text>Socials</Text>
                        {socials && socials.map((social, sIndex) => (
                            <div className='socialInput' key={sIndex}>
                                <TextField
                                    id={`socialInput${sIndex + 1}`}
                                    label={`Link ${sIndex + 1}`}
                                    onChange={e => handleSocial(sIndex, e)}
                                    value={social}
                                    variant="outlined"
                                />
                                <Button
                                    onClick={() => deleteSocial(sIndex)}
                                    sx={{ bgcolor: 'red' }}
                                    variant="contained"
                                >
                                    <CloseIcon />
                                </Button>
                            </div>

                        ))}
                        <Button
                            variant="contained"
                            onClick={addSocial}>
                            Add Social
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => {
                                isEdit ?
                                    handleSave(data._id)
                                    : handleCreate()
                            }}>
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default Form