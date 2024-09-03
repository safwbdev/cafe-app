import React from 'react'
import { Item } from '../components';

const Map = ({ mapdata }) => {
    const resizeFrame = (data) => data.replace(`width="600"`, `width="100%"`)
    return (
        <Item>
            <div dangerouslySetInnerHTML={{ __html: resizeFrame(mapdata) }} />
        </Item>
    )
}

export default Map