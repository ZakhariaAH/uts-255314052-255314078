import "./components.css";
export function KartuBuku({judul, penulis, tahun, linkRef}) {
  return (
    <div className="kartu-buku">
      <img src={linkRef} alt="Tidak Ada Gambar" className="gambar" />
      <div className="kartu-buku-info">
        <p>{judul}</p>
        <p>{penulis}</p>
        <p>{tahun}</p>
        {/*Deskripsi singkat*/}
        <button type="button">baca deskripsi singkat tentang buku ini.</button>
      </div>
    </div>
  );
}

