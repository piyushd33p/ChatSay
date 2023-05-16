import { Drawer, Typography, Box, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const drawerStyle = {
  left: 32,
  top: 17,
  height: "96%",
  maxWidth: "400px",
  boxShadow: "none",
  borderRadius: 1,
};

const Header = styled(Box)`
  background: #e34a6f;
  height: 108px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    margin-bottom: auto;
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)} />
        <Typography>Profile</Typography>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
