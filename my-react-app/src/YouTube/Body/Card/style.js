import styled from "styled-components";
export const Container = styled.div`
  width: 280px;
  height: 280px;
  margin-right: 20px;
  margin-bottom: 40px;
  border: white 1px dashed;
`;
export const Video = styled.div`
  width: 100%;
  height: 240px;
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const User = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5%;
  margin-right: 15px;
`;
export const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: ${(props) => (props.$desc ? "rgba(255,255,255,0.6)" : "#ffffff")};
`;
