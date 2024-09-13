import React, { useEffect } from 'react'
import List from '@mui/material/List';
import EntryItem from './EntryItem';
import { useMycontext } from '../context/MainProvider';
import { Subheader, Text } from '../components';



const FavoriteList = () => {
    const { favorites, entries, favoriteEntries, setFavoriteEntries } = useMycontext();

    useEffect(() => {
        setFavoriteEntries(entries.filter(item => favorites.includes(item._id)))
    }, [entries]);


    return (
        <div>
            <List>
                {favoriteEntries.length === 0 ? <div style={{
                    height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Subheader>
                        You have not added any favorites
                    </Subheader>
                </div> : favoriteEntries.map((entry) => (

                    <EntryItem data={entry} key={entry._id} isFavorite />
                ))
                }
            </List >

        </div >
    )
}

export default FavoriteList