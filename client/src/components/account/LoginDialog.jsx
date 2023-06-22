import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import React, { useContext } from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { qrCodeImage } from "../../constants/data";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { adduser } from '../../service/api';

const dialogStyle = {
    height: '96%',
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}

const Component = styled(Box)`
display:flex;
margin-left:4rem;
`

const Container = styled(Box)`
padding:56px 0px 56px 56px;
`
const QRImg = styled("img")({
    width: "264px",
    height: "264px",
    margin: "50px 0 0 50px"
});

const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`

const StyledList = styled(List)`
&>li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height: ;
    color:#4a4a4a;
}
`

export default function LoginDialog() {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const response = jwt_decode(res.credential);
        console.log(response);
        setAccount(response);
        await adduser(response);
    }

    const onLoginError = (res) => {
        console.log(res);
    }

    return (
        <div>
            <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
                <Component>
                    <Container>
                        <Title>Use WhatsApp on your computer</Title>
                        <StyledList>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                            <ListItem>3. Tap on Link a device</ListItem>
                            <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                        </StyledList>
                    </Container>
                    <Box style={{ position: "relative", marginLeft: "5rem" }}>
                        <QRImg src={qrCodeImage} alt="" />
                        <Box style={{ position: "absolute", top: "46%", left: "24%" }}>
                            <GoogleLogin
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            />
                        </Box>
                    </Box>
                </Component>
            </Dialog>
        </div>
    )
}
