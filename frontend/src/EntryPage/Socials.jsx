import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material';
import { Item, Text } from '../components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextureIcon from '@mui/icons-material/Texture';

const Socials = ({ data }) => {

    const checkSocial = (url) => {
        switch (true) {
            case url.includes('instagram'):
                return (
                    <Link to={url} target='_blank' >
                        <Avatar sx={{ bgcolor: '#C13584' }}>
                            <InstagramIcon />
                        </Avatar>
                    </Link>
                )
            case url.includes('facebook'):
                return (
                    <Link to={url} target='_blank'>
                        <Avatar sx={{ bgcolor: '#4267B2' }}>
                            <FacebookIcon />
                        </Avatar>
                    </Link>
                )
            default:
                return;
        }

    }
    return (
        <Item style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            {data.length === 0 ? (
                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} target='_blank'>
                    <Avatar sx={{ marginRight: 2 }}>
                        <TextureIcon />
                    </Avatar>
                    <Text>
                        Socials Not Available
                    </Text>
                </span>



            ) : data.map((d, index) => (
                <span key={index}>{checkSocial(d)}</span>

            ))}
        </Item>
    )
}

export default Socials