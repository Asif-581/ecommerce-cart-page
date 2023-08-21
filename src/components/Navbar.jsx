import React, { useRef, useState } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Menubar } from "primereact/menubar";
import logo from "../../../images/logo.svg";
import { Avatar } from "primereact/avatar";
import profile from "../../../images/image-avatar.png";
import { Tooltip } from "primereact/tooltip";
import { Badge } from 'primereact/badge';
import useGlobalContext from "../context/context";
const Navbar = () => {
  
  const op = useRef(null);
  const { amount, cart,product ,deleteProduct } = useGlobalContext();
  



  
  
  const navigation = [
    {
      label: "Collections",
    },

    {
      label: "Men",
    },
    {
      label: "Women",
    },
    {
      label: "About",
    },
    {
      label: "Contact",
    },
  ];

  const start = (
    <img alt="logo" src={logo} height="40" className="lg:w-8 h-2rem"></img>
  );
  const end = (
    <div className=" flex align-items-center justify-content-between mr-0">
      <i
        className="pi pi-cart-plus p-overlay-badge"
        style={{ fontSize: "1.7rem" }}
        onClick={(e) => op.current.toggle(e)}
      >
        <Badge value={cart.amount}></Badge>
      </i>
      <OverlayPanel ref={op} breakpoints className="w-3 ">
        <div className="w-12 border-bottom-1 pb-4">
          <h3>Cart</h3>
        </div>
        <div className="w-12 text-center mt-5">
          {cart.amount < 1 ? (
            "Your Cart is Empty"
          ) : (
            <>
              <div className="flex flex-row align-items-center justify-content-evenly">
                <img src={product} alt="product" className="w-2" />
                <p className="text-sm font-bold">{cart.name}</p>
                <p>
                  $125 x {cart.amount}
                  <span className="pl-2 text-black-alpha-90  font-bold">
                    ${125*cart.amount}
                  </span>{" "}
                  <button
                    onClick={deleteProduct}
                    className="ml-2 pi pi-trash border-none"
                  ></button>
                </p>
              </div>
              <div>
                <button className="w-12 p-2 mt-5 border-round-lg border-none bg-yellow-500 text-xl">
                  checkout
                </button>
              </div>
            </>
          )}
        </div>
      </OverlayPanel>

      <Avatar
        image={profile}
        className="mr-2 ml-6"
        size="large"
        shape="circle"
        tooltipoptions={{ position: "bottom" }}
      />
    </div>
  );
  return (
    <div className=" w-9 p-menuitem-text mt-0 mx-auto pb-3 border-bottom-1 border-gray-500 px-0 ">
      <Menubar
        model={navigation}
        start={start}
        end={end}
        className=" bg-white border-transparent pt-2 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
