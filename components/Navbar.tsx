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

  const [isDark, setIsDark] = useState<boolean>(isNight());

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
        <div className="navbar__logo">RISETKU</div>
      </Link>

      <ul className="navigation__menu">
        <li className={currentLocation === "/uji-hipotesis" ? "active" : null}>
          <Link href="/uji-hipotesis">Uji Hipotesis</Link>
        </li>
        <li className={currentLocation === "/besar-sampel" ? "active" : null}>
          <Link href="/besar-sampel">Besar Sampel</Link>
        </li>
        <li className={currentLocation === "/faq" ? "active" : null}>
          <Link href="/faq">FAQ</Link>
        </li>
        <li className={currentLocation === "/konsultasi" ? "active" : null}>
          <Link href="/konsultasi">Konsultasi</Link>
        </li>
        <li className={currentLocation === "/tentang" ? "active" : null}>
          <Link href="/tentang">Tentang</Link>
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
