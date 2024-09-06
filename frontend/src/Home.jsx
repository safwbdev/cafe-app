import React from 'react'
import Form from './Form'
import EntryList from './List/EntryList';
import { Mainheader } from './components';



const Home = () => {
    return (
        <div>
            <Mainheader>
                Cafes
            </Mainheader>
            <Form />
            <EntryList />
        </div>
    )
}

export default Home