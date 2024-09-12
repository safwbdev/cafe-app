import { createContext, useContext, useMemo, useState } from "react";

const MainContext = createContext(undefined)

const MainProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])


    const values = useMemo(() => ({ favorites, setFavorites }), [favorites, setFavorites])

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