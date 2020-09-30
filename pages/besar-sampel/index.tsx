import Head from "next/head";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";

export default function BesarSampel() {
  return (
    <>
      <div className="uji-hipotesis__container">
        <div className="text-center">
          <h2 className="emoji-title">🧮</h2>
          <h1 className="page-title">Hitung Besar Sampel</h1>
          <p className="description-title">
            Tentukan rumus besar sampel yang cocok untuk penelitian Anda dan
            hitung jumlahnya dengan menjawab beberapa pertanyaan berikut!
          </p>

          <div className="button-small__container">
            <a className="button-small" href="">
              Mulai Hitung Besar Sampel
            </a>
          </div>
        </div>
      </div>
      <div className="uji-hipotesis__container">
        <h1>Apa itu besar sampel? 🎢</h1>
        <p>
          Dalam memulai suatu penelitian, peneliti tentu perlu menentukan sampel
          penelitiannya. Salah satu hal yang paling penting untuk ditentukan
          adalah besar sampel minimal dalam penelitian agar suatu penelitian
          dikatakan memiliki hasil yang valid.
        </p>
        <p>
          Besar sampel minimal ini dapat ditentukan dengan berbagai rumus.
          Masing-masing penelitian memiliki rumus besar sampel. Peneliti perlu
          mengetahui rumus besar sampel yang sesuai untuk mencapai penelitian
          yang optimal.
        </p>
        <ul className="inside__paragraph">
          <li>
            <Link href="/faq">FAQ (frequently asked questions)</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
