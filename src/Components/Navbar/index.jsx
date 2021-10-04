import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router';

function NavBar() {
    let history=useHistory()
    const handleLogout = () => {
        localStorage.setItem("userName", "");
        localStorage.setItem("password", "");
        const userName = localStorage.getItem("userName");
        const password = localStorage.getItem("password");
        if (userName === "" && password === "") {
          history.push("");
        }
      };
    return (
        <div style={{backgroundColor:'black',display:'flex',justifyContent:'end'}}>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    )
}

export default NavBar
