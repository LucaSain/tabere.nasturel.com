"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
export default function Navbar() {
  const links = ["Tabara toamna", "Tabara iarna", "Tabara vara"];
  const subLinks = [
    "Tabără urbana Biblioteca Astra Sibiu",
    "Ateliere creative - Turnișor",
    "Cursuri de engleză începători - Turnișor",
  ];
  const path = usePathname();

  return (
    <div className="navbar z-[999] bg-base-100 shadow-xl fixed rounded-b-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <details>
                <summary>Tabara urbana Sibiu</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  {subLinks.map((link, i) => (
                    <li key={"nav-mobile" + i}>
                      <a
                        onClick={() => {
                          if (path === "/contact") window.location.href = "/";
                          // @ts-ignore
                          document
                            .getElementById(i + "bento")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            {links.map((link, i) => (
              <li key={"nav-mobile" + i + 3}>
                <a
                  onClick={() => {
                    if (path === "/contact") window.location.href = "/";
                    // @ts-ignore
                    document
                      .getElementById(i + 3 + "bento")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-lg sm:text-xl">
          Taberele Nasturel
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div className="dropdown dropdown-bottom dropdown-end relative">
              <div tabIndex={0} role="button" className="relative z-0">
                Tabara urbana Sibiu
              </div>
              <ul
                tabIndex={0}
                className="bg-base-100 rounded-xl rounded-t-none p-2 dropdown-content z-[1]"
              >
                {subLinks.map((link, i) => (
                  <li key={"nav-desktop" + i}>
                    <a
                      onClick={async () => {
                        console.log(path);
                        if (path !== "/") window.location.href = "/";
                        // @ts-ignore
                        const el = document.getElementById(i + "bento");
                        // @ts-ignore
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                        // @ts-ignore
                        const style = el.style;
                        el?.style.setProperty(
                          "box-shadow",
                          "0 0 30px 10px #ff0"
                        );
                        // delete the border after 2 seconds
                        setTimeout(() => {
                          // @ts-ignore
                          el.style = style;
                        }, 1000);
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {links.map((link, i) => (
            <li key={"nav-desktop" + i + 3}>
              <a
                onClick={async () => {
                  if (path !== "/") window.location.href = "/";
                  // @ts-ignore
                  const el = document.getElementById(i + 3 + "bento");
                  // @ts-ignore
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                  // @ts-ignore
                  const style = el.style;
                  el?.style.setProperty("box-shadow", "0 0 30px 10px #ff0");
                  // delete the border after 2 seconds
                  setTimeout(() => {
                    // @ts-ignore
                    el.style = style;
                  }, 1000);
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a
          className=" hidden sm:flex bg-gradient-to-l btn btn-primary from-primary to-secondary text-accent-content border-none hover:bg-none"
          href="https://nasturel.com"
        >
          Festival
        </a>
        <Link href="/contact" className="btn btn-primary">
          Contact
        </Link>
      </div>
    </div>
  );
}
