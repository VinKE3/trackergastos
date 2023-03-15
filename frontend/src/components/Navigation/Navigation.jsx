import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png ";
import { menuItems } from "../../utils/menuItems";

const Navigation = () => {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>VinKE</h2>
          <p>Tu Dinero</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li></li>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav``;

export default Navigation;
