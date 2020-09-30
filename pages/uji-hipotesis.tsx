import Head from "next/head";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";

export default function UjiHipotesis() {
  return (
    <>
      <div className="uji-hipotesis__container">
        <div className="text-center">
          <h2 className="emoji-title">🧰</h2>
          <h1 className="page-title">Uji Hipotesis </h1>
          <p className="description-title">
            Uji hipotesis* adalah metode pengambilan keputusan dari suatu
            hipotesis penelitian untuk menentukan
            apakah hipotesis kita diterima atau tidak.
          </p>

          <div className="button-small__container">
            <a className="button-small" href="">
              Mulai Uji Hipotesis
            </a>
          </div>

          <p className="description-subtitle">
            *Juga disebut uji signifikansi, uji p-value, konfirmasi
            analisis data, dll.
          </p>

        </div>
      </div>
      <div className="uji-hipotesis__container">
        <h1>Apa itu uji hipotesis? 🐳</h1>
        <p>
          Uji hipotesis adalah metode pengambilan keputusan dari suatu hipotesis
          penelitian. Uji hipotesis juga terkadang disebut uji signifikansi, uji
          p-value, konfirmasi analisis data, dan lain-lain. Dengan menggunakan
          uji hipotesis yang tepat, kita mampu untuk menentukan apakah hipotesis
          kita diterima atau tidak.
        </p>
        <p>
          Masing-masing jenis penelitian memiliki uji hipotesisnya tersendiri,
          tergantung dari beberapa variabel. Klik pada Mulai Uji Hipotesis untuk memulai menentukan uji hipotesis yang cocok untuk penelitian anda!
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
