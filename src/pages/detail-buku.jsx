import { useParams, Link } from "react-router-dom";
import "./detail-buku.css";
const DATA_BUKU = [
  {
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    tahun: "1980",
    kat: "Fiksi",
    linkRef: "https://static.mizanstore.com/d/img/book/cover/bumi-manusia.jpg",
    deskripsi:
      "Mengisahkan perjalanan Minke, seorang pemuda pribumi di zaman kolonial Belanda yang bersekolah di HBS. Buku ini menggambarkan perjuangan hak, cinta, dan nasionalisme.",
  },
  {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    tahun: "2005",
    kat: "Non-Fiksi",
    linkRef:
      "https://ensiklopedia.kemendikdasmen.go.id/sastra/media/image/Karya-LASKAR_PELANGI.png",
    deskripsi:
      "Menceritakan tentang kehidupan 10 anak dari keluarga miskin di Pulau Belitung yang berjuang menempuh pendidikan di sekolah SD Muhammadiyah dengan segala keterbatasannya.",
  },
  {
    judul: "Reverend Insanity",
    penulis: "Gu Zhen Ren",
    tahun: "2015",
    kat: "Fiksi",
    linkRef:
      "https://cdna.artstation.com/p/assets/images/images/085/188/238/large/ullaseu-imadfge.jpg?1740166168",
    deskripsi:
      "Kisah Fang Yuan yang terlahir kembali ke masa lalu 500 tahun sebelumnya dengan membawa ingatan dan pengalaman lamanya di dunia kultivasi Gu.",
  },
  {
    judul: "The Great Gatsby",
    penulis: "F. Scott Fitzgerald",
    tahun: "1925",
    kat: "Non-Fiksi",
    linkRef:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatXfbE5JcI50jTgSP7AeP9Ll9l8UfoOy2BhbcPIP_JQ&s=10",
    deskripsi:
      "Sebuah novel klasik yang menceritakan kehidupan Jay Gatsby, seorang jutawan misterius, dan obsesinya untuk kembali bersatu dengan cinta lamanya, Daisy Buchanan.",
  },
  {
    judul: "To Kill a Mockingbird",
    penulis: "Harper Lee",
    tahun: "1960",
    kat: "Fiksi",
    linkRef:
      "https://upload.wikimedia.org/wikipedia/id/5/5c/Mockingbirdfirst.JPG?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original",
    deskripsi:
      "Novel legendaris yang menceritakan tentang isu ketidakadilan rasial dan prasangka sosial di Amerika Serikat melalui sudut pandang anak kecil bernama Scout Finch.",
  },
];

export function DetailBuku() {
  const { id } = useParams();

  // Ambil buku sesuai urutan ID (0, 1, 2, dst)
  const buku = DATA_BUKU[id] || DATA_BUKU[0];

  return (
    <div className="detail-buku-container">
      <Link to="/katalog" className="tombol-kembali">Kembali ke Katalog</Link>

      <div className="detail-buku-card">
        <img src={buku.linkRef} alt={buku.judul} className="detail-buku-gambar"/>
        <h2>{buku.judul}</h2>
        <p>
          <strong>Penulis:</strong> {buku.penulis}
        </p>
        <p>
          <strong>Tahun Terbit:</strong> {buku.tahun}
        </p>
        <p>
          <strong>Kategori:</strong> {buku.kat}
        </p>
        <hr />
        <p>
          <strong>Ringkasan:</strong> {buku.deskripsi}
        </p>
      </div>
    </div>
  );
}
