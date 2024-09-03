import React from 'react'
import { Item, Text } from '../components'

const Menu = ({ menuData }) => {
    return (
        <Item>
            <Text>Menu: {menuData}</Text>
        </Item>
    )
}

export default Menu