import { Outlet,NavLink } from "react-router-dom";
import Contact from "../pages/help/Contact";
import Faq from "../pages/help/Faq";

export const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        repellendus numquam soluta rem dolor ullam facilis minima. Iure
        consequatur repellat modi praesentium, repudiandae maxime esse itaque
        error, recusandae cupiditate laborum?
      </p>
    

      <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">Faq</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};
