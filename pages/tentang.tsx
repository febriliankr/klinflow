import Head from "next/head";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";

export default function tentang() {
  return (
    <div className="about__container">
      <h1>Tentang 👋</h1>
      <p>
        Risetku.com didirikan oleh Elvan Wiyarta (FKUI 2017) dan Febrilian
        Kristiawan (FKUI 2017) dengan tujuan membuat proses analisis penelitian
        lebih mudah. Risetku dibuat dengan latar belakang untuk membantu
        teman-teman kami yang sedang sibuk mengurus skripsi, dimana diantara
        dari mereka kesulitan menentukan Uji Hipotesis, Rumus Besar Sampel, dan
        secara umum kesulitan mengerti penelitian yang dilakukannya sendiri.
      </p>

      <h1>
        Episode Podcast on Spotify <FaSpotify />
      </h1>
      <a href="https://open.spotify.com/episode/2PmuSbuaBkXWuYi8tvW73R?si=QkzCYeD1Qg-vH2RR_ZZO4A">
        <CgMediaPodcast /> Gimana cara kita bikin Risetku.com, and Lessons
        Learned
      </a>

      <h1>Pengembangan 👩‍🌾</h1>
      <p>
        Untuk dapat menyelesaikan permasalahan penelitian semua orang dengan
        lebih baik, kami berniat untuk terus mengembangkan{" "}
        <Link href="/">Risetku</Link> menjadi lebih baik lagi. Kami terus
        melakukan pengembangan-pengembangan seperti:
      </p>
      <ul className="inside__paragraph">
        <li>
          panduan lengkap tentang apa yang harus dilakukan setelah mengetahui
          uji hipotesis atau rumus besar sampel,
        </li>
        <li>
          memperkaya konten{" "}
          <Link href="/faq">FAQ (frequently asked questions)</Link>,
        </li>
        <li>
          mendesain ulang website untuk meningkatkan pengalaman pengguna, dan
        </li>
        <li>mengurus klaim hak kekayaan intelektual (HAKI).</li>
      </ul>

      <h1>Donasi 💸</h1>
      <p>
        Jika Anda merasa terbantu dengan aplikasi ini atau ingin mendukung pengembangan dari Risetku.com, kami membuka diri untuk berbagai bentuk donasi Anda. Donasi dapat disumbangkan melalui:
      </p>
      <p className="tabbed__donation">
      <a href="https://www.patreon.com/risetku">patreon.com/risetku </a> 
      </p>
      <p>Donasi akan digunakan untuk:</p>
      <ul>
      <li>
          biaya server dan domain risetku
        </li>
        <li>pengembangan fitur-fitur terbaru.</li>
      </ul>
    </div>
  );
}
