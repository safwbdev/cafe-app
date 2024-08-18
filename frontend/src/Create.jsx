import React, { useState } from 'react'
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
            <input type="text" name="" id="" placeholder='Enter Name' onChange={(e) => setEntry(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </>
    )
}

export default Create