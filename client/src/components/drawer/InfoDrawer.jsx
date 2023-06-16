import React from 'react'
import { Drawer } from '@mui/material'

const drawerStyle = {
left:"20px",
top:"24px",
height:"95%",
width:"23.5%",
boxShadow:"none"
}

export default function InfoDrawer({ open, setOpen }) {

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{zIndex:1500}}
        >hello</Drawer>
    )
}
