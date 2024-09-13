import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const MainContext = createContext(undefined)

const MainProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const [entries, setEntries] = useState([]);
    const [favoriteEntries, setFavoriteEntries] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_URL}/get`).then(result => setEntries(result.data)
        ).catch(err => console.log(err));
    }, []);

    const values = useMemo(() => ({
        favorites,
        setFavorites,
        entries,
        setEntries,
        favoriteEntries,
        setFavoriteEntries
    }), [
        favorites,
        setFavorites,
        entries,
        setEntries,
        favoriteEntries,
        setFavoriteEntries])

    return (
        <MainContext.Provider value={values} >
            {children}
        </MainContext.Provider>
    )


}
const useMycontext = () => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error('error')
    }
    return context
}
export { MainProvider, useMycontext }