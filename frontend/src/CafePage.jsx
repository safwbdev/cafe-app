import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CafePage = () => {
    const [entry, setEntry] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/get/${id}`).then(result => setEntry(result.data)
        ).catch(err => console.log(err));
    }, [])

    return !entry ? (<h2>loading</h2>) : (
        <div>
            <h2>{entry.name}</h2>
        </div>
    )
}

export default CafePage