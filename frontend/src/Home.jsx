import React from 'react'
import Create from './Create'
import Typography from '@mui/material/Typography';
import EntryList from './List/EntryList';



const Home = () => {
    return (
        <div>
            <Typography id="modal-modal-title" variant="h5" component="h2">
                Cafes
            </Typography>
            <Create />
            <EntryList />
        </div>
    )
}

export default Home