import { useContext } from "react";

import { Box, Dialog } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

import Menu from "./menu/menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import styled from "@emotion/styled";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 400px;
`;

const RightComponent = styled(Box)`
  width: 75%;
  min-width: 400px;
  height:100%
  broder-left:2px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
  height: "96%",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
};

const ChatDialog = () => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponent>
          {/* for left partition */}
          <Menu />
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
