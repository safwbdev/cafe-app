import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Form from '../Form';
import { Text, Header, Item } from '../components';
import { Box, Grid } from '@mui/material';
import Map from './Map';
import HalalStatus from './HalalStatus';
import VegStatus from './VegStatus';
import TriedStatus from './TriedStatus';
import Socials from './Socials';
import Menu from './Menu';
import FavoriteStatus from './FavoriteStatus';

const EntryPage = () => {
    const [entry, setEntry] = useState([]);
    const { id } = useParams()

    const update = (id, data) => {
        axios.put(`${import.meta.env.VITE_APP_URL}/updateentry/${id}`, data)
            .then(result => location.reload())
            .catch(err => console.log(err))
    }

    // console.log(entry);



    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/get/${id}`).then(result => setEntry(result.data)
        ).catch(err => console.log(err));
    }, []);

    return entry.length === 0 ? (<h2>loading</h2>) : (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <Header>{entry.name}</Header>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <TriedStatus status={entry.done} />
                </Grid>
                <Grid item xs={6}>
                    <FavoriteStatus id={entry._id} />
                </Grid>
                <Grid item xs={6}>
                    <HalalStatus status={entry.halal} />
                </Grid>
                <Grid item xs={6}>
                    <VegStatus status={entry.vegetarian} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Socials data={entry.socials} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Menu menuData={entry.menu} />
                </Grid>
                <Grid item xs={12}>
                    {entry.map ? (<Map mapdata={entry.map} />) : (<Text>Location Not available</Text>)}
                </Grid>
            </Grid>
            <Form data={entry} update={update} />
        </Box>
    )
}

export default EntryPage