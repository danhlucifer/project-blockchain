import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";

import "./SideBar.css";

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__head">
          <div className="sidebar__head-logo">
            <img src={images.DynamicIcon} alt="dynamicicon" />
          </div>

          <div className="sidebar__head-text">
            <h3 className="sidebar__head-text_title">Dynamic</h3>
            <p className="sidebar__head-text_desc">Put your funds to work</p>
          </div>
        </div>

        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <img src={images.HomeIcon} alt="homeicon" />
            <Link to='/' className="sidebar__list-item-link">Home</Link>
          </li>
          <li className="sidebar__list-item">
            <img src={images.VaultsIcon} alt="VaultsIcon" />
            <Link to='/vaults' className="sidebar__list-item-link">Vaults</Link>
          </li>
          <li className="sidebar__list-item">
            <img src={images.TransferIcon} alt="TransferIcon" />
            <Link to='/swap' className="sidebar__list-item-link">Swap</Link>
          </li>
          <li className="sidebar__list-item">
            <img src={images.SwapIcon} alt="SwapIcon" />
            <Link to='/pay' className="sidebar__list-item-link">Pay</Link>
          </li>
          <li className="sidebar__list-item">
            <img src={images.MoreIcon} alt="MoreIcon" />
            <Link to='/pay' className="sidebar__list-item-link">More</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
