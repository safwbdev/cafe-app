import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Edit from './Edit';

const EntryPage = () => {
    const [entry, setEntry] = useState([]);
    const { id } = useParams()

    const update = (id, data) => {
        axios.put(`${import.meta.env.VITE_APP_URL}/updateentry/${id}`, data)
            .then(result => location.reload())
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/get/${id}`).then(result => setEntry(result.data)
        ).catch(err => console.log(err));
    }, []);

    return entry.length === 0 ? (<h2>loading</h2>) : (
        <div>
            <h2>{entry.name}</h2>
            <h2>{entry.done ? 'Tried' : 'Not tried yet'}</h2>
            <Edit data={entry} update={update} />
        </div>
    )
}

export default EntryPage