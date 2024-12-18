import Header from "../../components/Header";
import { Container, Column, Title } from "./styles";

import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header authenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <Title># RANKING 5 TOP DA SEMANA</Title>
          <UserInfo
            perentual={90}
            nome="Erick"
            image="https://avatars.githubusercontent.com/u/44934387?v=4"
          />
          <UserInfo
            perentual={80}
            nome="Erick"
            image="https://avatars.githubusercontent.com/u/44934387?v=4"
          />
          <UserInfo
            perentual={70}
            nome="Erick"
            image="https://avatars.githubusercontent.com/u/44934387?v=4"
          />
          <UserInfo
            perentual={75}
            nome="Erick"
            image="https://avatars.githubusercontent.com/u/44934387?v=4"
          />
          <UserInfo
            perentual={60}
            nome="Erick"
            image="https://avatars.githubusercontent.com/u/44934387?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
