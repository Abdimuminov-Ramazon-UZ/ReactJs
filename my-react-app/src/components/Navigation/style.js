import { NavLink } from "react-router-dom";
import styled from "styled-components";
export let Container = styled.div`
  height: 45px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export let Link = styled(NavLink)`
  color: white;
  font-weight: 600;
  font-size: 24px;
  text-decoration:none;
`;
