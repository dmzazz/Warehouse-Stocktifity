// src/layouts/Sidebar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import logo from "../assets/img/logo.png";
import "./Sidebar.css";
import { RxDashboard } from "react-icons/rx";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdOutlineInventory2 } from "react-icons/md";
import { GiForklift } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/logout`);
      swal({
        title: "Are you sure?",
        text: "You want to Logout?",
        icon: "warning",
        dangerMode: true,
        buttons: true,
      }).then((willLogout) => {
        if (willLogout) {
          localStorage.removeItem("token");
          swal("Logout Success", {
            icon: "success",
            buttons: false,
            timer: 500,
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <RxDashboard size={22} />,
    },
    {
      path: "/inventory",
      name: "Inventory",
      icon: <HiCurrencyDollar size={22} />,
    },
    {
      path: "/order",
      name: "Order",
      icon: <MdOutlineInventory2 size={22} />,
    },
    {
      path: "/supplier",
      name: "Supplier",
      icon: <GiForklift />,
    },
  ];

  return (
    <div className={`${isOpen ? "w-[200px]" : "w-16"} fixed h-[100%] duration-500 bg-[#6B728E] border-r-2`}>
      <div className="w-full flex items-center p-5">
        <img src={logo} alt="stocktifity" className={`${!isOpen && "hidden"} w-9 h-9`} />
        <h1 className={`${!isOpen && "hidden"} logo text-white ml-2`}>Stocktifity</h1>
        <div className={`${isOpen && "ml-5"} bars block text-white`}>
          <FaBars onClick={toggle} size="25px" />
        </div>
      </div>

      {menuItem.map((item, index) => (
        <NavLink to={item.path} key={index} className={`flex items-center text-white pt-2.5 pb-2.5 pl-3.5 pr-3.5 gap-4 duration-500 hover:bg-[#EEEEEE] hover:text-[#000] active:bg-blue-500`}>
          <div className={`${!isOpen && "ml-2"} icon text-lg`}>{item.icon}</div>
          <div className={`${!isOpen && "hidden"} text-sm`}>{item.name}</div>
        </NavLink>
      ))}

      <div
        className="link flex items-center text-white pt-2.5 pb-2.5 pl-3.5 pr-3.5 gap-4 duration-500 hover:bg-[#EEEEEE] hover:text-[#000] active:bg-blue-500"
        style={{ position: "absolute", bottom: "20px", width: `${isOpen ? "200px" : "62px"}`, cursor: "pointer" }}
        onClick={Logout}
      >
        <div className="icon text-lg">
          <IoMdLogOut size={22} fill="#D61355" />
        </div>
        <div className={`${!isOpen && "hidden"} text-sm`}>{`Logout`}</div>
      </div>
    </div>
  );
};

export default Sidebar;
