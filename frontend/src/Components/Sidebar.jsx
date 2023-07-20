import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/admin",
      name: "Dashboard",
      exactMatch: true
    },
    {
      path: "/admin/customers",
      name: " Customers",
    },
    {
      path: "/admin/orders",
      name: "Orders",
    },
    {
      path: "/admin/products",
      name: "Products",
    }, 
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        {menuItem.map((item, index) => (
          <NavLink {...(item?.exactMatch ? {end:true}:null)} to={item.path} key={index} 
          className={({ isActive }) =>
           isActive ? "active link" : "link"
        }
         >
            <div>
              <div className="name">{item.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="side-dashboard">{children}</div>
    </div>
  );
};

export default Sidebar;
