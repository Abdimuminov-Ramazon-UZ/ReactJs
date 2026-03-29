import { Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Link } from "./style";

// we add outlet for add content every page
const active = (url) => {
  return window.location.pathname.includes(url);
};
export const Nav = () => {
  // console.log(navbar);
  // alert(navbar);
  return (
    <div>
      <Container>
        {navbar.map((item) => {
          return (
            <Link key={item.id} to={item.path} active={active(item.path)}>
              {item.title}
            </Link>
          );
        })}
      </Container>
      <Outlet></Outlet>
    </div>
  );
};
