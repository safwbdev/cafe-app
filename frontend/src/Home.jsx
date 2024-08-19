import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';
import List from '@mui/material/List';
import CafeItem from './CafeItem';
import Typography from '@mui/material/Typography';



const Home = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/get`).then(result => setEntries(result.data)
        ).catch(err => console.log(err));
    }, [])

    return (
        <div>
            <Typography id="modal-modal-title" variant="h5" component="h2">
                Cafes
            </Typography>
            <Create />
            <List>
                {entries.length === 0 ? <div><h2>No Entries</h2></div> : entries.map((entry, index) => (
                    <CafeItem data={entry} key={entry._id} />
                ))}
            </List>

        </div>
    )
}

export default Home