import {  useLoaderData, Link } from "react-router-dom";

export const UserDetails = () => {
//   const { userid, role } = useParams();
const user =  useLoaderData();
  return (
  <div className="user-details">
<i className="fa-solid fa-caret-right"> </i>{ ` ${user.name}`}
  <ul>
    <li>{user.username}</li>
    <li>{user.email}</li>
    <li>{user.phone}</li>
    <li>{user.company.name} / {user.address.city}</li>
  </ul>
      <Link to="/users">Back To</Link>

  </div>

    
  );
};

export const userDetailsLoader = async ({params}) => 
{
const {userid} = params;
const res = await fetch("https://jsonplaceholder.typicode.com/users/"+userid);
// if(res.status === "404")
// {
//   throw new Response("Not Found",{status: 404})
// }
if(!res.ok)
{
  throw Error(res.status)
}
return res.json();
}
