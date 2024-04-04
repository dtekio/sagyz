import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">SAGYZ</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="https://eth-converter.com/">
          <a className="item">Конвертер (wei-ether)</a>
        </Link>
        
        <Link route="/">
          <a className="item">Поставки</a>
        </Link>

        <Link route="/supplies/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
