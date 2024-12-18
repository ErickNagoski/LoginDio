import { Button } from "../../components/Button";
import Header from "../../components/Header";
import {
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import Input from "../../components/Input";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header authenticated={false} />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change...</SubtitleLogin>
            <form>
              <Input
                name="email"
                placeholder="Email:"
                type="email"
                leftIcon={<EmailIcon />}
              />
              <Input
                name="password"
                placeholder="Senha:"
                type="password"
                leftIcon={<LockIcon />}
              />
              <Button
                title="Entrar"
                variant="secondary"
                onClick={() => {
                  navigate("/feed");
                }}
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
