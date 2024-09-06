import React from 'react'
import { Item, Text } from '../components'
import { Link } from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Avatar } from '@mui/material';
import TextureIcon from '@mui/icons-material/Texture';

const Menu = ({ menuData }) => {
    return (
        <Item >
            {menuData ? (
                <Link to={menuData} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} target='_blank'>
                    <Avatar sx={{ marginRight: 2 }}>
                        <MenuBookIcon />
                    </Avatar>
                    <Text>
                        View Menu
                    </Text>
                </Link>)
                : (
                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} target='_blank'>
                        <Avatar sx={{ marginRight: 2 }}>
                            <TextureIcon />
                        </Avatar>
                        <Text>
                            Menu Not Available
                        </Text>
                    </span>
                )}
        </Item>
    )

}

export default Menu