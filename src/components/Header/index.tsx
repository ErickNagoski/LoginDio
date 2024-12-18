import { Button } from "../Button";
import {
  BuscarInputContainer,
  //   Column,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
  Container,
} from "./styles";

import logoImage from "../../assets/logo.svg";

const Header = ({ authenticated }: { authenticated: boolean }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logoImage} alt="Logo da dio" />
          {authenticated ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {authenticated ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/44934387?v=4" />
          ) : (
            <>
              <MenuRight href="">Home</MenuRight>
              <Button title="Entrar" onClick={() => {}} />
              <Button title="Cadastrar" onClick={() => {}} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
