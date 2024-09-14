import React from 'react'
import List from '@mui/material/List';
import EntryItem from './EntryItem';
import { useMycontext } from '../context/MainProvider';
import { Subheader } from '../components';



const EntryList = () => {
    const { entries } = useMycontext()

    return (
        <div>
            <List>
                {entries.length === 0 ? (<div className='listMessage'>
                    <Subheader>No Entries</Subheader>
                </div>) : entries.map((entry, index) => (
                    <EntryItem data={entry} key={entry._id} />
                ))}
            </List>

        </div>
    )
}

export default EntryList