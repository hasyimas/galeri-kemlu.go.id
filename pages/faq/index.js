import Meta from "../../components/Meta"

function Faq() {

  return (
    <>
      <Meta title='Kementerian Luar Negeri Republik Indonesia | Rumah Arsip Digital - USAGE & GUIDELINE' />
      <div className="min-h-screen px-4 bg-gray-50 py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
        <div className="prose prose-slate mx-auto lg:prose-lg lg:max-w-screen-lg">
          <h2 className="text-blue-600">FAQ (Frequently Asked Questions)</h2>
          <ul>
            <li>
              <h4>Bagaimana cara mengakses akun saya di website ini ?</h4>
              <p>
                Pegawai Kemlu dapat menggunakan email serta password Kemlu yang telah terdaftar pada halaman Login.
              </p>
            </li>
            <li>
              <h4>Bagaimana cara mengakses hasil dokumentasi dengan resolusi tinggi?</h4>
              <p>
                Rumah Arsip Digital memperbolehkan pengguna terdaftar, yaitu pegawai Kemlu yang ingin mempergunakan hasil dokumentasi untuk kebutuhan resmi,
                untuk mengunduh dengan resolusi tinggi tanpa watermark.
              </p>
              <p>
                Hasil dokumentasi berupa foto dapat langsung diunduh setelah melakukan Login.
                Untuk dokumentasi berupa video dan audio, dapat mengirimkan email permintaan ke <strong className="text-blue-600">avis@kemlu.go.id</strong> untuk dapat melakukan pengunduhan.
              </p>
            </li>
            <li>
              <h4>Bagaimana apabila saya lupa password untuk login?</h4>
              <p>
                Akun user login pada Rumah Arsip Digital merupakan akun yang sama yang dimiliki oleh Pegawai Kemlu pada website portal dan intranet Kemlu RI.
                Apabila pengguna lupa password, pemulihan dapat dilakukan melalui kontak Pusat Teknologi Informasi dan Komunikasi Kementerian dan Perwakilan pada alamat surel layanan.pengguna@kemlu.go.id.
              </p>
            </li>
            <li>
              <h4>Apakah saya dapat menggunakan hasil dokumentasi di luar dari kebutuhan resmi Kemlu?</h4>
              <p>Seluruh dokumentasi pada website ini merupakan properti kepemilikan oleh Kementerian Luar Negeri RI, untuk itu penggunaan untuk tujuan komersial <strong>TIDAK DIPERBOLEHKAN.</strong></p>
            </li>
            <li>
              <h4>Saya tidak memiliki akun, bagaimana cara mengunduh dokumentasi di website ini?</h4>
              <p>
                Selain pengguna terdaftar, bagi yang memerlukan hasil dokumentasi versi resolusi tinggi serta tanpa watermark temporer dapat mengirimkan email permintaan kepada <strong className="text-blue-600">avis@kemlu.go.id</strong>
                dengan mencantumkan informasi antara lain jenis dokumen, nama, tanggal file/dokumen dan link file/dokumen yang dibutuhkan, serta tujuan penggunaan secara spesifik. Di samping itu,
                juga cantumkan data dan latar belakang peminta.
              </p>
              <p>
                Setiap permintaan akan diproses dan dikaji oleh admin website terkait kesesuaian tujuan penggunaan file/dokumen.
                Apabila permintaan disetujui, hasil dokumentasi resolusi tinggi akan dikirimkan melalui email.
              </p>
            </li>
            <li>
              <h4>Apakah saya harus membeli hasil dokumentasi di website ini?</h4>
              <p>Baik bagi pegawai Kemlu maupun pengunjung umum, tidak perlu membeli dokumentasi yang tersedia pada website ini.</p>
              <p>Untuk ketentuan penggunaan dokumentasi dari website ini, dapat dilihat pada Usage Guidelines.</p>
            </li>
            <li>
              <h4>Bagaimana apabila ditemui kendala atau error pada website?</h4>
              <p>Pegawai Kemlu maupun pengguna eksternal yang menemui kendala atau error pada website dapat menghubungi pihak admin pada alamat surel <strong className="text-blue-600">avis@kemlu.go.id</strong>.</p>
            </li>
          </ul>

          <h2 className="text-blue-600">Usage Guidelines</h2>

          <ul>
            <li>
              Seluruh file dokumentasi pada website Rumah Arsip Digital merupakan properti kepemilikan Kementerian Luar Negeri RI dan dapat digunakan untuk keperluan non-komersial berkaitan dengan tujuan dan misi lingkup Kementerian Luar Negeri RI.
            </li>
            <li>
              Seluruh file dokumentasi pada website Rumah Arsip Digital memiliki watermark yang merupakan tanda keaslian dari dokumentasi, dan <strong>TIDAK DIPERBOLEHKAN</strong> untuk dihilangkan.
            </li>
            <li>
              Dokumentasi <strong>TIDAK DIPERBOLEHKAN</strong> digunakan untuk kepentingan iklan, pemasaran, atau kepentingan komersial lainnya yang tidak sesuai dengan misi Kementerian Luar Negeri RI.
            </li>
            <li>
              <strong>TIDAK DIPERKENANKAN</strong> untuk mengubah, mengedit, menjual, atau menyebarluaskan dokumentasi pada Rumah Arsip Digital untuk kepentingan yang tidak sesuai dengan misi Kementerian Luar Negeri RI.
            </li>
            <li>
              Penggunaan seluruh file dokumentasi pada website Rumah Arsip Digital baik dalam bentuk format cetak maupun elektronik, harus mencantumkan kredit “Dokumentasi milik Kementerian Luar Negeri RI”.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Faq