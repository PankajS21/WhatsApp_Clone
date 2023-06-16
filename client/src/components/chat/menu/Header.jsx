import { Box, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import ChatIcon from '@mui/icons-material/Chat';
import Headermenu from './Headermenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
height:44px;
background:#ededed;
padding:10px 16px;
display:flex;
align-items:center;
`;

const Wrapper = styled(Box)`
margin-left:auto; 
& > * {
    margin-left:2px;
    padding:8px;
}

& : first-child {
    font-size:22px;
    margin-right:8px;
    margin-top:3px;
}
`

const Image = styled('img')({
  width: "40px",
  height: "40px",
  borderRadius: "50%"
})

export default function Header() {

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggledrawer = () => {
    setOpenDrawer(true);
  }

  const { account } = useContext(AccountContext);

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={toggledrawer} />
        <Wrapper>
          <ChatIcon />
          <Headermenu />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}
