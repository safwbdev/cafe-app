import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const Create = () => {
    const [entry, setEntry] = useState('')
    const handleAdd = () => {
        axios.post(`${import.meta.env.VITE_APP_URL}/add`, { name: entry })
            .then(result => location.reload())
            .catch(err => console.log(err))
    }
    return (
        <>
            <TextField id="" label="Enter name" variant="outlined" onChange={(e) => setEntry(e.target.value)} />
            <Button variant="contained" onClick={handleAdd}>Add</Button>
        </>
    )
}

export default Create