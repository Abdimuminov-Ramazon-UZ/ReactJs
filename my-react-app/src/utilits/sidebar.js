import styled from "styled-components";
import Home from "../assets/icon/home.svg?react";
export const Icons = styled.div``;
Icons.Home = Home;
export const Sidebar = [
  {
    id: 1,
    title: "home",
    data: [
      { id: 1, title: "Home", icon: Home },
      { id: 2, title: "Home", icon: Icons.Home },
      { id: 3, title: "Home", icon: Icons.Home },
    ],
  },
  {
    id: 2,

    title: "Subscriptons",
    data: [
      { id: 1, title: "list", icon: Icons.Home },
      { id: 2, title: "podcast", icon: Icons.Home },
      { id: 3, title: "channel", icon: Icons.Home },
      { id: 4, title: "Library", icon: Icons.Home },
      { id: 5, title: "watched", icon: Icons.Home },
      { id: 6, title: "Advertisement", icon: Icons.Home },
    ],
  },
  {
    id: 3,

    title: "more from yutube",
    data: [
      { id: 1, title: "video", icon: Icons.Home },
      { id: 2, title: "music", icon: Icons.Home },
      { id: 3, title: "gif", icon: Icons.Home },
      { id: 4, title: "intro", icon: Icons.Home },
      { id: 5, title: "trailer", icon: Icons.Home },
      { id: 6, title: "news", icon: Icons.Home },
      { id: 7, title: "online channels", icon: Icons.Home },
      { id: 8, title: "blogers", icon: Icons.Home },
    ],
  },
  {
    id: 4,

    title: "About",
    data: [
      { id: 1, title: "www.youtube.com", icon: Icons.Home },
      { id: 2, title: "FAQ", icon: Icons.Home },
    ],
  },
];
