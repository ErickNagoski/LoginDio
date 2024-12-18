import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 24px;
  color: #ffffff;
`;

export const TitleHighlight = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 24px;
  color: #ffffff70;
`;

export const Column = styled.div<{ flex: number }>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`;
