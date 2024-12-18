import { Container, NameText, Progress, UserPicture } from "./styles";

const UserInfo = ({
  image,
  nome,
  perentual,
}: {
  nome: string;
  image: string;
  perentual: number;
}) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={perentual} />
      </div>
    </Container>
  );
};

export default UserInfo;
