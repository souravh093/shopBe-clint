import React from "react";

const Footer = () => {
  return (
    <div className="mt-[100px] mx-[200px] mb-[20px]">
      <div className="grid grid-cols-2">
        <div className="flex">
          <div className="flex-1 flex flex-col text-justify gap-[10px]">
            <h1 className="text-2xl font-semibold mb-5">Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="flex-1 flex flex-col text-justify gap-[10px]">
            <h1 className="text-2xl font-semibold mb-5">Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stories</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <h1 className="text-2xl font-semibold mb-5">About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quasi doloribus numquam et nostrum eveniet, labore
              error officia illo aliquam veniam nisi minima perferendis unde
              omnis aliquid porro atque nihil. Repellat sint voluptatem nisi
              nostrum?
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-5">Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              temporibus mollitia, suscipit nihil magnam eveniet ipsum vero modi
              repellendus enim, voluptates nesciunt facere deserunt possimus
              dignissimos in dolorum exercitationem tenetur voluptatem. Libero,
              culpa perspiciatis.
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10 items-center">
        <div className="flex gap-5 items-center">
          <span className="text-2xl text-blue-400">shopBe</span>
          <span>&copy; Copyright 2023. All Rights Reserved </span>
        </div>
        <div className="w-80">
          <img src="/img/payment-gateway.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
