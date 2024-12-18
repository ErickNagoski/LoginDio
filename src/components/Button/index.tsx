import { ButtonContainer } from "./styles";

const Button = ({
  title,
  variant = "primary",
  onClick,
}: {
  title: string;
  variant?: string;
  onClick: () => void;
}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
