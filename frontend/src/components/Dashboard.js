import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Sidebar/>
            <br/>
            <div className="container">
            Dashboard
            </div>
        </div>
    )
}

export default Dashboard