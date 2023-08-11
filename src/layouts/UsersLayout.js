import { Outlet } from "react-router-dom";


export const UsersLayout = () => {
  return (
    <div className="users-layout">
      <h2>Users</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        repellendus numquam soluta rem dolor ullam facilis minima. Iure
        consequatur repellat modi praesentium, repudiandae maxime esse itaque
        error, recusandae cupiditate laborum?
      </p>
    
      <Outlet/>
    </div>
  );
};
