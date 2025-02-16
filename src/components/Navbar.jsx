import { Link, NavLink } from "react-router-dom";
import { navList } from "../util/const";
import { styles } from "../util/styles";
import { Logo } from "../assets";
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("homepage");

  const activeHandler = (id) => setActiveLink(id);
  return (
    <nav className="py-2">
      <div className={`${styles.container}`}>
        <Link className="mr-auto" to="/">
          <img src={Logo} alt="digits logo" width="81" height="28" />
        </Link>
        <ul className="flex">
          {navList.map((item, i) => (
            <li
              className={`${i == navList.length - 1 ? "mr-0" : "mr-5"}`}
              key={item.title}
              onClick={() => activeHandler(item.id)}
            >
              <NavLink
                className={`capitalize text-lg
                ${
                  activeLink === item.id
                    ? "text-purple-950 font-medium"
                    : "text-sky-950"
                }`}
                to={`/${item.id}`}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
