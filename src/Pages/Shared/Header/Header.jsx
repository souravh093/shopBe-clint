import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[80px]">
      <div className="px-[30px] py-[10px] flex items-center justify-between">
        <div className="flex gap-[20px] items-center">
          <div className="item flex items-center">
            <img className="w-10" src="img/pngegg.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item text-[18px]">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item text-[18px]">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item text-[18px]">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item text-[18px]">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center text-[30px] font-semibold">
          <Link to="/">shopBe</Link>
        </div>
        <div className="flex gap-[20px] items-center">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">About</Link>
          </div>
          <div>
            <Link to="/">Contact</Link>
          </div>
          <div>
            <Link to="/">Stores</Link>
          </div>
          <div className="icon gap-[15px] cursor-pointer flex items-center">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="relative">
              <ShoppingCartIcon />
              <span className="text-[12px] absolute flex items-center justify-center right-[-10px] top-[-10px] w-[20px] h-[20px] rounded-full text-white bg-[#2879fe]">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
