import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';

const Home = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/get`).then(result => setEntries(result.data)
        ).catch(err => console.log(err));
    }, [])

    const handleEdit = (id) => {
        axios.put(`${import.meta.env.VITE_APP_URL}/update/${id}`).then(result => location.reload()
        ).catch(err => console.log(err));

    }

    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_APP_URL}/delete/${id}`).then(result => location.reload()
        ).catch(err => console.log(err));

    }

    return (
        <div>
            <h2>Todo List</h2>
            <Create />
            <div className="list">
                {entries.length === 0 ? <div><h2>No Entries</h2></div> : entries.map((entry, index) => (
                    <div className='entry' key={index}>
                        <input type="checkbox" name="" id="" checked={entry.done} onChange={() => handleEdit(entry._id)} />
                        <p>{entry.name}</p>
                        <div className="delete" onClick={() => handleDelete(entry._id)}>x</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home