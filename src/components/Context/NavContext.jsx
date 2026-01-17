/* eslint-disable react-refresh/only-export-components */
import React, { createContext,useState } from 'react'


export const NavbarContext = createContext()

const NavContext = ({ children }) => {

    const [navOpen, setNavOpen] = useState(false)


    return (
        <div>
            <div>
                <NavbarContext.Provider value={ [navOpen, setNavOpen] }>
                    {children}
                </NavbarContext.Provider>
            </div>
        </div>
    )
}

export default NavContext