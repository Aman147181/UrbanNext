"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Roboto_Condensed } from "next/font/google";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Avatar,
} from "@nextui-org/react";
const roboto = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});
const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);
  console.log(providers);
  const [showmobilemenu, setshowmobilemenu] = useState(false);
  return (
    <div
      className={`fixed top-0 h-[72px] bg-white z-50 w-full px-5 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between text-base ${roboto.className} `}
    >
      <Link href="/">
        <div className="flex space-x-1 justify-center items-center">
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Urban Dwellings logo"
          />
          <h1
            className={`  text-black  font-semibold text-lg lg:text-xl  uppercase `}
          >
            Urban Dwellings
          </h1>
        </div>
      </Link>

      <div className="md:flex items-center justify-center hidden xl:space-x-12 lg:space-x-8 md:space-x-5 ml-2 font-roboto uppercase text-base text-[#254D4D]">
        <Link href="/">
          <h1 className="hover:text-[#C14E07]">home</h1>
        </Link>
        <Link href="/product">
          {" "}
          <h1 className="hover:text-[#C14E07]">product</h1>
        </Link>
        <Link href="/contact">
          <h1 className="hover:text-[#C14E07]">contact</h1>
        </Link>
      </div>
      {!session &&
        providers &&
        Object.values(providers).map((provider, index) => (
          <button
            key={index}
            onClick={() => signIn(provider.id)}
            className="  border border-black hover:border-2 rounded-full p-[6px] space-x-2 px-6  text-black   hidden  sm:flex items-center justify-start"
          >
            <FcGoogle size={20} />
            <h1 className="text-sm">Sign in with Google</h1>
          </button>
        ))}
    
      {console.log(session)}
      <div className="flex justify-center space-x-2 items-center">
        {session && (
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <div>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: session.user.image,
                    size: "sm",
                  }}
                  className="transition-transform hidden sm:flex"
                  description={session.user.email}
                  name={session.user.name}
                />
                <Avatar
                  src={session.user.image}
                  size="sm"
                  className="flex sm:hidden"
                />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">{session.user.name}</p>
              </DropdownItem>
              <DropdownItem key="profile">My Profile</DropdownItem>
              <DropdownItem key="dashboard">Admin Dashboard</DropdownItem>

              <DropdownItem
                key="logout"
                onClick={() => {
                  signOut();
                }}
                color="danger"
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}

        <button
          onClick={() => {
            setshowmobilemenu((el) => !el);
          }}
          className="block sm:hidden text-3xl"
        >
          {!showmobilemenu ? <IoMenuOutline /> : <RxCross1 />}
        </button>
      </div>
    </div>
  );
};

export default Header;
