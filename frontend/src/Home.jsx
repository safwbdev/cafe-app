import React from 'react'
// components
import EntryList from './List/EntryList';
import Form from './Form'
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