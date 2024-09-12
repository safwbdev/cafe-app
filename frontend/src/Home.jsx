import React from 'react'
// context
import { useMycontext } from './context/MainProvider';
// components
import EntryList from './List/EntryList';
import Form from './Form'
import { Mainheader } from './components';



const Home = () => {
    const { favorites } = useMycontext();

    console.log(favorites);

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