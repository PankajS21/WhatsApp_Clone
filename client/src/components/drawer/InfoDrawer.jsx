import React from 'react'
import { Box, Drawer, Typography, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';


const Header = styled(Box)`
background:#008069;
height:101px;
display:flex;
color:#FFFFFF;

&>svg , &>p {
    margin-top:auto;
    padding:15px;
    font-weight:600;
}
`

const Component = styled(Box)`
background:#ededed;
height:89%;
`

const Text=styled(Typography)`
font-size:18px;
`

const drawerStyle = {
    left: "20px",
    top: "24px",
    height: "95%",
    width: "23.5%",
    boxShadow: "none"
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
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBackIcon onClick={() => setOpen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}
