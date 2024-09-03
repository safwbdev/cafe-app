import React from 'react'
import { Item } from '../components/Item'
import { Text } from '../components/Typography'

const Menu = ({ menuData }) => {
    return (
        <Item>
            <Text>Menu: {menuData}</Text>
        </Item>
    )
}

export default Menu