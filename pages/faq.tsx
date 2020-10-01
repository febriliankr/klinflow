import Head from "next/head";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";
import { ToggleLayer, Transition } from "react-laag";
import WikiPopup from "../components/WikiPopup";

export default function FaQ() {
  return (
    <>
      <div className="uji-hipotesis__container">
        <div className="text-center">
          <h2 className="emoji-title">🙋‍♀️</h2>
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="description-title">Cari jawaban atas pertanyaan Anda</p>
        </div>
      </div>
      <div className="uji-hipotesis__container">
        <h2 className="question-heading">Daftar Pertanyaan 📃</h2>
        <ul className="inside__paragraph">
          <li>
            <Link href="/faq/#q1">
              <a>Apa itu Variabel Bebas dan Variabel Terikat?</a>
            </Link>
          </li>
          <li>
            <Link href="/faq/#q2">
              <a>Apa perbedaan Variabel Kategorik dan Variabel Numerik?</a>
            </Link>
          </li>
          <li>
            <Link href="/faq/#q3">
              <a>Apa perbedaan Variabel Kategorik Dikotom vs Polikotom?</a>
            </Link>
          </li>
          <li>
            <Link href="/faq/#q4">
              <a>
                Apa perbedaan Variabel Berpasangan dengan Tidak Berpasangan?
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faq/#q5">
              <a>Apa perbedaan Data Berdistribusi Normal dan Tidak Normal?</a>
            </Link>
          </li>
        </ul>
        <a name="q1"></a>
        <br />
        <br />
        <br />
        <h2 className="question-heading">
          Apa itu Variabel Bebas dan Variabel Terikat? 🔗
        </h2>
        <p>
          Variabel bebas (independent variable) merupakan variabel yang dapat
          kamu sesuaikan untuk mendapatkan hasil tertentu. Variabel ini
          merupakan input dalam penelitian yang akan memengaruhi hasil
          penelitian.
        </p>
        <p>
          Variabel terikat (dependent variable) merupakan variabel target
          penelitianmu. Variabel ini merupakan output yang diukur sebagai hasil
          penelitian.
        </p>
        <p>
          Ingat! Bedakan variabel dengan kelompok.{" "}
          <a>Lihat juga: Dikotom vs Polikotom.</a>
        </p>
        <img src="diagramvbvt.jpg" alt="bvt" />
        <a name="q2"></a>
        <br />
        <br />
        <br />
        <br />
        <h2 className="question-heading">
          Apa perbedaan Variabel Kategorik dan Variabel Numerik? 🔢
        </h2>
        <p>
          Berdasarkan jenis datanya, variabel terdiri atas variabel kategorik
          dan numerik. Variabel kategorik merupakan variabel yang berisi
          kategori, bisa berupa ranking (ordinal) maupun setara (nominal).
          Variabel numerik merupakan variabel yang berisikan bilangan hitung.
        </p>
        <p>
          Hati-hati dalam membedakan variabel kategorik ordinal dengan variabel
          numerik! Beberapa orang keliru dalam membedakannya.
        </p>
        <a name="q3"></a>
        <br />
        <br />
        <br />
        <br />
        <h2 className="question-heading">
          Apa perbedaan Variabel Kategorik Dikotom vs Polikotom? 🤼
        </h2>
        <p>
          Kelompok merupakan kategori dalam suatu variabel. Sebuah variabel
          dapat memiliki dua atau lebih kelompok. Variabel yang terdiri atas dua
          kelompok disebut sebagai variabel dikotom. Sedangkan variabel yang
          terdiri atas lebih dari dua kelompok disebut sebagai variabel
          polikotom.
        </p>
        <a name="q4"></a>
        <br />
        <br />
        <br />
        <br />
        <h2 className="question-heading">
          Apa perbedaan Variabel Berpasangan dengan Tidak Berpasangan? 👫
        </h2>
        <p>
          Suatu variabel dikatakan berpasangan apabila seluruh set data variabel
          tersebut didapatkan dari objek penelitian yang sama. Sementara itu,
          suatu variabel dikatakan tidak berpasangan apabila seluruh set data
          variabel tersebut didapatkan dari objek penelitian yang berbeda.
        </p>
        <a name="q5"></a>
        <br />
        <br />
        <br />
        <br />
        <h2 className="question-heading">
          Apa perbedaan Data Berdistribusi Normal dan Tidak Normal? 📅
        </h2>
        <p>
          Data numerik memiliki karakteristik tertentu bila didistribusikan
          (disebarkan). Bila bentuk distribusi (persebaran) menyerupai grafik
          berbentuk lonceng, data tersebut dikatakan berdistribusi normal.
          Begitu juga sebaliknya, bila bentuk distribusi (persebaran) tidak
          menyerupai grafik berbentuk lonceng, data tersebut dikatakan tidak
          berdistribusi normal. Penting bagi peneliti untuk mengetahui apakah
          data numeriknya terdistribusi normal atau tidak karena hal ini akan
          memengaruhi uji hipotesis yang akan digunakan.
        </p>
        <img src="distribusi-normal.jpg" alt="distribusi normal" />
        <p>
          Data numerik memiliki karakteristik tertentu bila didistribusikan
          (disebarkan). Bila bentuk distribusi (persebaran) menyerupai grafik
          berbentuk lonceng, data tersebut dikatakan berdistribusi normal.
          Begitu juga sebaliknya, bila bentuk distribusi (persebaran) tidak
          menyerupai grafik berbentuk lonceng, data tersebut dikatakan tidak
          berdistribusi normal. Penting bagi peneliti untuk mengetahui apakah
          data numeriknya terdistribusi normal atau tidak karena hal ini akan
          memengaruhi uji hipotesis yang akan digunakan.
        </p>
        <br />
        <WikiPopup
            shortAnswer="Bila hasil uji statsitik normalitas >0,05, maka data dikatakan normal.  Uji statsitik yang umum digunakan, yakni  **Uji Kolmogorov Smirnov** (data lebih dari 50) atau **Uji Shapiro Wilk** (data kurang dari 50)."
            qNumber="5"
          >
            Apa ini?
          </WikiPopup>
        <br />
        <br />
        <br />
        <br />
        <a name="referensi"></a>
        <h2 className="question-heading">Referensi 📜</h2>
        <ul className="inside__paragraph">
          <li>
            Indrayan A, Malhotra RK. Medical biostatistics fourth edition. New
            York: CRC Press; 2018.
          </li>
          <li>
            Tumbelaka AR, Riono PR, Sastroasmoro S, Wirjodiarjo M, Pudjiastuti
            P, Firman K. Pemilihan uji hipotesis. Di dalam: Sastroasmoro S,
            Ismael S, Editor. Dasar-dasar metodologi penelitian klinis edisi
            ke-5. Jakarta: Sagung Seto; 2014.
          </li>
          <li>
            Dahlan MS. Statistik untuk kedokteran dan kesehatan seri 1 edisi 6.
            Jakarta: Epidemiologi Indonesia; 2015.
          </li>

          <li>
            Chou SC, Shao J, Wang H, Lokhnygina Y. Sample size calculation in
            clinical research third edition. New York: CRC Press; 2017.{" "}
          </li>
          <li>
            Madiyono B, Moeslichan S, Sastroasmoro S, Budiman I, Purwanto SH.
            Perkiraan Besar Sampel. Di dalam: Sastroasmoro S, Ismael S, Editor.
            Dasar-dasar metodologi penelitian klinis edisi ke-5. Jakarta: Sagung
            Seto; 2014.
          </li>
          <li>
            Dahlan MS. Statistik untuk kedokteran dan kesehatan seri 1 edisi 6.
            Jakarta: Epidemiologi Indonesia; 2015.{" "}
          </li>
        </ul>

        <div>
        </div>
      </div>
    </>
  );
}
