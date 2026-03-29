import { Elements } from "../components/Elements/index";
import { Home } from "../components/Home/index";
import { SignIn } from "../components/SignIn/index";
import { Single } from "../components/Single/index";
import { Template } from "../components/Templates/index";
// we must create / path otherwise comes error: no routes match / path way
export const navbar = [
  {
    id: 0,
    title: "Logo",
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
    isPrivate: false,
  },
  {
    id: 2,
    title: "Elements",
    path: "/elements",
    element: <Elements />,
    isPrivate: false,
  },
  {
    id: 3,
    title: "SignIn",
    path: "/SignIn",
    element: <SignIn />,
    isPrivate: false,
  },
  {
    id: 4,
    title: "Templates",
    path: "/templates",
    element: <Template />,
    isPrivate: true,
  },
  {
    id: 5,
    title: "Single",
    path: "/single",
    element: <Single />,
    isPrivate: false,
  },
  {
    id: 6,
    title: "logo",
    path: "*",
    element: <Home />,
    isPrivate: false,
  },
];
