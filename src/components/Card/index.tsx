import {
  CardContainer,
  Content,
  ImageBackground,
  UserInfo,
  UserPicture,
  HasInfo,
  PostInfo,
} from "./styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import bannerImage from "../../assets/banner.png";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={bannerImage} />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/44934387?v=4" />
          <div>
            <h4>Erick Nagoski</h4>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito para o curso de html e css no bootcamp dio do global
            avanade... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <ThumbUpIcon /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;
