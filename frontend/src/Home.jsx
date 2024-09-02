import React from 'react'
import Create from './Create'
import EntryList from './List/EntryList';
import { Mainheader } from './components/Typography';



const Home = () => {
    return (
        <div>
            <Mainheader>
                Cafes
            </Mainheader>
            <Create />
            <EntryList />
        </div>
    )
}

export default Home