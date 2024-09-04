import React from 'react'
import { Item } from '../components'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Avatar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
const Socials = ({ data }) => {


    const checkSocial = (url) => {
        switch (true) {
            case url.includes('instagram'):
                return (
                    <Link to={url} target='_blank' >
                        <Avatar>
                            <InstagramIcon />
                        </Avatar>
                    </Link>
                )
                break;
            case url.includes('facebook'):
                return (
                    <Link to={url}>
                        <Avatar>
                            <FacebookIcon />
                        </Avatar>
                    </Link>
                )
                break;
            default:
                return;
        }

    }
    return (
        <Item>
            {data.map((d, index) => (
                <span key={index}>{checkSocial(d)}</span>

            ))}
        </Item>
    )
}

export default Socials