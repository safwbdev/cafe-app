import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Edit from './Edit';
import { Text, Header } from './components/Typography';

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
            <Header>{entry.name}</Header>
            <Text>{entry.done ? 'Tried' : 'Not tried yet'}</Text>
            <Text>{entry.halal ? 'Halal' : 'Not halal'}</Text>
            <Text>{entry.halal ? 'V' : 'No V'}egetarian options available</Text>
            <Text>Type: {entry.type}</Text>
            <Text>Location: {entry.location}</Text>
            <Text>Map: {entry.map}</Text>
            <Text>Menu: {entry.menu}</Text>
            <Edit data={entry} update={update} />
        </div>
    )
}

export default EntryPage