import styled from "styled-components";
import bell from "/src/assets/icon/bell.svg?react";
import Burger from "/src/assets/icon/burger.svg?react";
import grid from "/src/assets/icon/grid.svg?react";
import search from "/src/assets/icon/search.svg?react";
import user from "/src/assets/icon/user.svg?react";
import video from "/src/assets/icon/video.svg?react";
export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => !props.$flexed && "column"};
  background: black;
  /* height: 100vh; */
  color: white;
  padding: ${(props) => !props.$flexed && "0 30px"};
`;
// export const Containers = styled.div`
//   display: flex;
//   flex-direction: row;
//   background: black;
//   height: 100vh;
//   color: white;
//   padding: 0;
// `;
export const Wrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: black;
`;
export const Category = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${(props) => props.$end && "flex-end"};
`;

export const Icons = styled.div``;
Icons.Burger = styled(Burger)`
  width: 24px;
  height: 24px;
  /* background-color: white; */
  /* color: white !important; */
  /* fill: white !important; */
`;
Icons.Logo = styled.img`
  width: 120px;
  height: 48px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 500px;
  height: 40px;
  font-size: 18px;
  background: black;
  border: 1px solid black;
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 2px 0px 0px 2px;
  :focus {
    outline: none;
  }
`;
Icons.Searchicon = styled(search)`
  width: 65px;
  height: 40px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 2px 0px;
  cursor: pointer;
`;

Icons.Bell = styled(bell)`
  margin-left: 16px;
  width: 24px;
  height: 24px;
`;
Icons.Video = styled(video)`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  margin-top: 4px;
`;
Icons.Grid = styled(grid)`
  width: 24px;
  height: 24px;
  margin-left: 12px;
`;
Icons.User = styled(user)`
  width: 24px;
  height: 24px;
  margin-left: 16px;
  cursor: pointer;
`;
