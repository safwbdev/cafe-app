import React, { useEffect, useState } from 'react'
import axios from 'axios';
import List from '@mui/material/List';
import EntryItem from './EntryItem';



const EntryList = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/get`).then(result => setEntries(result.data)
        ).catch(err => console.log(err));
    }, [])

    return (
        <div>
            <List>
                {entries.length === 0 ? <div><h2>No Entries</h2></div> : entries.map((entry, index) => (
                    <EntryItem data={entry} key={entry._id} />
                ))}
            </List>

        </div>
    )
}

export default EntryList