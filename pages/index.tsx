import Head from "next/head";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";
import Tentang from "./tentang";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | Klinflow</title>
      </Head>
      <div className="home__container">
        <div className="hero__container">
          <h1>Temukan shift klinik atau rumah sakit terbaik untuk Anda</h1>
          <h2>
            Klinflow membantu anda menemukan klinik atau rumah sakit yang cocok
            baik dari segi lokasi, shift, budaya, gaji, dan lain-lain.
          </h2>
          <div className="home__buttons">
            <a className="button">Daftar Gratis</a>
          </div>
        </div>
        <div className="image__container">
          <img src="/klinik.webp" alt="klinik" />
        </div>
      </div>
    </>
  );
}
