import React, { useEffect, useState } from 'react'
import { Item, Text } from '../components'
import { Avatar } from '@mui/material';
import { useMycontext } from '../context/MainProvider';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteStatus = ({ id }) => {
    const { favorites, setFavorites } = useMycontext();
    const [favoriteStatus, setfavoriteStatus] = useState(favorites.includes(id))

    const toggleFavorites = () => {
        if (favoriteStatus) {
            setFavorites(favorites.filter((a) => a !== id))
        } else {
            setFavorites([...favorites, id])
        }
    }

    useEffect(() => {
        setfavoriteStatus(favorites.includes(id))
    }, [favorites])


    return (
        <Item>
            <div className='detailBox'>
                <Avatar sx={{ bgcolor: favoriteStatus ? 'red' : '' }} onClick={() => toggleFavorites()}>
                    <FavoriteIcon />
                </Avatar>
            </div>
            <Text>&nbsp;</Text>
        </Item >
    )
}

export default FavoriteStatus