import React, { ReactElement } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Toggle from "react-toggle";
// import { useMediaQuery } from "react-responsive";

import { useRouter } from "next/router";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const DARK_CLASS: string = "dark";
  const currentLocation = useRouter().pathname;

  const [renderToggle, setRenderToggle] = useState<boolean>(false);

  function isNight() {
    const time: Date = new Date();
    if (time.getHours() > 18 || time.getHours() < 6) {
      return true;
    } else return false;
  }

  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setRenderToggle(true);
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  return (
    <div className="navbar__container">
      <Link href="/">
        <div className="navbar__logo">Klinflow</div>
      </Link>

      <ul className="navigation__menu">
        <li>
          <Link href="/login">
            <a className="button-light">Login</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a className="button-light">Daftar Gratis</a>
          </Link>
        </li>
        <li className="toggle__darkmode">
          {renderToggle ? (
            <Toggle
              className="DarkToggle"
              defaultChecked={isDark}
              onChange={(event) => setIsDark(event.target.checked)}
              icons={{ checked: "🌙", unchecked: "🔆" }}
              aria-label="Dark mode"
            />
          ) : null}
        </li>
      </ul>
    </div>
  );
}
