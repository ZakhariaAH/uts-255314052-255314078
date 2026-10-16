import { useState } from "react";
import { KartuBuku } from "./components.jsx";

function App() {
  const listBuku = [
    {
      judul: "Bumi Manusia",
      penulis: "Pramoedya Ananta Toer",
      tahun: "1980",
      linkRef:
        "https://static.mizanstore.com/d/img/book/cover/bumi-manusia.jpg",
    },
    {
      judul: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      tahun: "2005",
      linkRef:
        "https://ensiklopedia.kemendikdasmen.go.id/sastra/media/image/Karya-LASKAR_PELANGI.png",
    },
    {
      judul: "Reverend Insanity",
      penulis: "Gu Zhen Ren",
      tahun: "2015",
      linkRef:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1npxQjKEN-D9puxCZ_gX4e7SdWWr94001Y-UIauk&usqp=CAE&s",
    },
    {
      judul: "The Great Gatsby",
      penulis: "F. Scott Fitzgerald",
      tahun: "1925",
      linkRef:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatXfbE5JcI50jTgSP7AeP9Ll9l8UfoOy2BhbcPIP_JQ&s=10",
    },
    {
      judul: "To Kill a Mockingbird",
      penulis: "Harper Lee",
      tahun: "1960",
      linkRef:
        "https://upload.wikimedia.org/wikipedia/id/5/5c/Mockingbirdfirst.JPG?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original",
    },
  ];
  return (
    <>
      <div className="grid-buku">
        <div className="grid-buku-header">
          <h1>Daftar Buku</h1>
        </div>

        <div className="grid-buku-navigasi">
          2
        </div>
        <div className="grid-buku-item">
          {listBuku.length > 0 ? (
            listBuku.map((item, index) => (
              <div key={index}>
                <KartuBuku
                  judul={item.judul}
                  penulis={item.penulis}
                  tahun={item.tahun}
                  linkRef={item.linkRef}
                />
              </div>
            ))
          ) : (
            <p>Tidak ada buku yang tersedia.</p>
          )}
        </div>
        <div className="grid-buku-footer">
          <p>Footer</p>
        </div>
      </div>
    </>
  );
}

export default App;
