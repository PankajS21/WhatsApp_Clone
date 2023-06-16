import React, { useContext } from 'react';
import LoginDialog from './account/LoginDialog';
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
height:100vh;
background:#eae6df;
`


const LoginHeader = styled(AppBar)`
background-color:#00a884;
height:222px;
box-shadow:none;
`
const Header = styled(AppBar)`
background-color:#00a884;
height:125px;
box-shadow:none;
`

export default function Messenger() {

  const { account } = useContext(AccountContext);
  // console.log(account)
  return (
    <Component>
      {
        account ?
          <>
            <Header>
              <Toolbar>

              </Toolbar>
            </Header>
            <ChatDialog />
          </>
          :
          <>
            <LoginHeader>
              <Toolbar>

              </Toolbar>
            </LoginHeader>
            <LoginDialog />
          </>
      }

    </Component>
  )
}
