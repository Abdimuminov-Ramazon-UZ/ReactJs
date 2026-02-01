import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  /* border: 1px solid white; */
  width: 280px;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  height: 100%;
  scrollbar-width: none;
`;
export const Wrapper = styled.div`
  border-bottom: 1px solid rgb(255, 2545, 255, 0.2);
  margin: 15px 0px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: ${({ title }) => (title ? "rgba(255,255,255,0.6)" : "#ffffff")};
  height: 40px;
  margin-left: 24px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Icons = styled.div`
  width: 16px;
  height: 16px;
`;
