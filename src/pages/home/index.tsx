import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

import bannerImage from "../../assets/banner.svg";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header authenticated={false} />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={() => {
              navigate("/login");
            }}
          />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
