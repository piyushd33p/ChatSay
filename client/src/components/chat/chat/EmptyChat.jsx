import { emptyChatImage } from "../../../constants/data";
import { Box, Typography, styled, Divider } from "@mui/material";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
  min-width
`;

const Container = styled(Box)`
  padding: 0 200px;
`;
const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const subTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const styledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.8;
`;
const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image
          src={emptyChatImage}
          alt="img"
        />
        <Title>ChatSay</Title>
        <subTitle>
          Chat seamlessly without keeping your phone connected.
        </subTitle>
        <br />
        <subTitle>Enjoy smooth chatting experience.</subTitle>
        <styledDivider />
      </Container>
    </Component>
  );
};

export default EmptyChat;
