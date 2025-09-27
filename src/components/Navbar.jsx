import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


function Navbar() {

    return (
        <>
            {/* Modern Dark Navbar */}
            <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg animate-navbar-slide">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <div className="navbar-brand flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-logo-float">
                                <i className="fas fa-cricket text-white text-lg"></i>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                                    IPL Dashboard
                                </h1>
                                <p className="text-xs text-gray-400">2024 Season</p>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/50 mx-4">
                            <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                    `nav-link relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group ${
                                        isActive 
                                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105 animate-nav-hover' 
                                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div className="flex items-center space-x-2">
                                            <i className={`fas fa-calendar-alt ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors duration-300`}></i>
                                            <span>Matches</span>
                                        </div>
                                        {isActive && (
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                                        )}
                                    </>
                                )}
                            </NavLink>

                            <NavLink
                                to={"/pointsTable"}
                                className={({ isActive }) =>
                                    `nav-link relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group ${
                                        isActive 
                                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105 animate-nav-hover' 
                                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div className="flex items-center space-x-2">
                                            <i className={`fas fa-trophy ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors duration-300`}></i>
                                            <span>Points Table</span>
                                        </div>
                                        {isActive && (
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </div>

                        {/* Additional Info */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <div className="text-right">
                                <p className="text-sm text-gray-300 font-medium">Live Updates</p>
                                <p className="text-xs text-gray-400">Real-time scores</p>
                            </div>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-live-indicator"></div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative">
                <Outlet />
            </div>
        </>
    )
}


export default Navbar