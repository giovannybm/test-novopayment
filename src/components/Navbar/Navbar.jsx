import { useContext, useState, useRef } from "react";
import { appContext } from "../../hooks/context";
import { useTranslation } from 'react-i18next';
import "./Navbar.scss";


const Navbar = (props) => {
  const navMenu = useContext(appContext);

  const menuNormalize = (obj) => {
    const result = [];

    obj.forEach((item) => { 
      for (let el in item) {
        const title = el;

        var e1 = { title };
        if (item[el].length > 0) {
          e1["children"] = menuNormalize(item[el]);
        }
        result.push(e1);
      }
    });
    return result;
  };

  return (
    <nav className="navbar">
      <ul className="menu">
        {navMenu.list !== null &&
          menuNormalize(navMenu.list.data.list).map((e, index) => {
            const depthLevel = 0;
            return <MenuItems key={index} item={e} depthLevel={depthLevel} />;
          })}
      </ul>
    </nav>
  );
};

const MenuItems = ({ item, depthLevel }) => {
  const { t, i18n } = useTranslation();
  let ref = useRef();
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };


  if (!item.hasOwnProperty("children")) {
    return (
      <li key={item.title} className="menu-items" ref={ref}>
        {t(item.title)}
      </li>
    );
  }
  return (
    <li className="menu-items"  onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
      {t(item.title)}
      <ItemDropdown
        submenu={item.children}
        depthLevel={depthLevel}
        dropdown={dropdown}
      />
    </li>
  );
};

const ItemDropdown = ({ submenu, depthLevel, dropdown }) => {
  
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-subMenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}  `}>
      {submenu.map((e, index) => {
        return (
          <MenuItems item={e} key={index} depthLevel={depthLevel}></MenuItems>
        );
      })}
    </ul>
  );
};

export default Navbar;
