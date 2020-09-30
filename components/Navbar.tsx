import React, { ReactElement } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Toggle from "react-toggle";
import { useMediaQuery } from "react-responsive";

const DARK_CLASS: string = "dark";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  // const systemPrefersDark: boolean = useMediaQuery(
  //   {
  //     query: "(prefers-color-scheme: dark)",
  //   },
  //   undefined,
  //   (prefersDark: boolean) => {
  //     setIsDark(prefersDark);
  //   }
  // );

  function isNight() {
    const time: Date = new Date();
    if (time.getHours() > 18 || time.getHours() < 6 ) {
      return true;
    } else return false;
  }

  const [isDark, setIsDark] = useState<boolean>(isNight());

  useEffect(() => {
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
        <li>
          <Link href="/uji-hipotesis">Uji Hipotesis</Link>
        </li>
        <li>
          <Link href="/besar-sampel">Besar Sampel</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/konsultasi">Konsultasi</Link>
        </li>
        <li>
          <Link href="/tentang">Tentang</Link>
        </li>
        <li className="toggle__darkmode">
          <Toggle
            className="DarkToggle"
            defaultChecked={isDark}
            onChange={(event) => setIsDark(event.target.checked)}
            icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode"
          />
        </li>
      </ul>
    </div>
  );
}
