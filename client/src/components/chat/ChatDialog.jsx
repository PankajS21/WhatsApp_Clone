import { Box, Dialog, styled } from '@mui/material'
import React from 'react'
import Menu from './menu/Menu'
import EmptyChat from './chats/EmptyChat'


const dialogStyle = {
  height: '95%',
  margin: "20px",
  width: "100%",
  borderRadius: "0",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden"
}

const Component=styled(Box)`
display:flex;
`;

const LeftComponent=styled(Box)`
min-width:450px;
`

const RightComponent=styled(Box)`
width:70%;
min-width:300px;
height:100%;
border-left: 1px solid rgba(0,0,0,0.14);
`

export default function ChatDialog() {
  return (
    <>
      <Dialog
        open={true}
        hideBackdrop={true}
        PaperProps={{ sx: dialogStyle }}
        maxWidth={"md"}
      >

        <Component>
          <LeftComponent>
            <Menu />
          </LeftComponent>
          <RightComponent>
            <EmptyChat />
          </RightComponent>
        </Component>
      </Dialog>
    </>
  )
}
