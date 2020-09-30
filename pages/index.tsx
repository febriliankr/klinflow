import Head from "next/head";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";
import Tentang from "./tentang";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | Risetku.com</title>
      </Head>
      <div className="home__container">
        <h1>Aplikasi untuk memudahkan analisis penelitian Anda</h1>
        <h2>
          Hitung besar sampel, tentukan jenis uji hipotesis, dan konsultasi
          mengenai penelitian anda.
        </h2>
        <div className="home__buttons">
          <Link href="uji-hipotesis">
            <a className="button">Uji Hipotesis</a>
          </Link>
          <Link href="/hitung-besar-sampel">
            <a className="button">Besar Sampel</a>
          </Link>
        </div>
        <Link href="/konsultasi">
          <a className="home__ask">Saya belum tahu apa yang harus dilakukan</a>
        </Link>
      </div>

      <Tentang/>
    </>
  );
}
