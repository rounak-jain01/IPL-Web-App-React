import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


function Navbar() {

    return (
        <>
            <div className='p-4'>
                <div className='flex'>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            `bg-gray-200 px-10 py-2 transition-opacity ${isActive ? 'underline underline-offset-8 decoration-blue-500 ' : 'opacity-60'}`
                        }
                    >
                        <h1>Matches</h1>
                    </NavLink>

                    <NavLink
                        to={"/pointsTable"}
                        className={({ isActive }) =>
                            `bg-gray-200 px-10 py-2 transition-opacity ${isActive ? 'underline underline-offset-8 decoration-blue-500' : 'opacity-60'}`
                        }
                    >
                        <h1>Tables</h1>
                    </NavLink>
                </div>
                <Outlet />
            </div>
        </>
    )
}


export default Navbar