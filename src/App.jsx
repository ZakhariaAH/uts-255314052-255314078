import { useState } from "react";
import { KartuBuku } from "./components.jsx";

function App() {
  {
    /*membuat useState untuk form yang berguna untuk memasukkan data/informasi tentang buku
    yang nantinya akan berguna jika ingin menambahkan buku baru di katalog */
  }
  const [buku, setBuku] = useState({
    judul: "",
    penulis: "",
    tahun: "",
    linkRef: "",
  });

  /*Membuat useState dengan nilai awalnya 5 buku */
  const [listBuku, setListBuku] = useState([
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
  ]);

  {
    /*State untuk mengatur apakah suatu form untuk menambahkan buku ditampilkan atau tidak */
  }
  const [tampil, setTampil] = useState(false);
  {
    /*fungsi untuk menghandle perubahan value di form */
  }
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setBuku((prevBuku) => ({ ...prevBuku, [name]: value })); //menyalin dulu state buku ke parameter prevBuku
    //kemudian mengubah tiap key(judul,penulis,...) sesuai dengan valuenya yang sebelumnya cuma ''
  }

  {
    /*fungsi untuk handle saat tombol submit ditekan */
  }
  function inputForm(event) {
    event.preventDefault();
    {
      /*mencegah browser refresh otomatis saat memasukkan data */
    }
    if (!buku.judul || !buku.penulis || !buku.tahun || !buku.linkRef) {
      //cek agar judul dan penulis dan lainnya diinput
      alert("Tolong inputnya harus diisi!");
      return;
    }

    setListBuku((prevListBuku) =>[...prevListBuku, buku]); //Masukkan buku ke listBuku

    setBuku({
      //set state form untuk yang membuat buku baru ke posisi awal agar siap menerima input lagi
      judul: "",
      penulis: "",
      tahun: "",
      linkRef: "",
    });
    setTampil(false);
  }
  return (
    <>
      <div className="grid-buku">
        <div className="grid-buku-header">
          <h1>Daftar Buku</h1>
        </div>

        <div className="contents">
          <div className="grid-buku-navigasi">
            <button onClick={() => setTampil(!tampil)}>{/*Ketika diklik, membuat tampil menjadi true */}
              {tampil ? "Menampilkan Form" : "Tidak Menampilkan Form"}{/*Jika tampil = true, maka tampilkan form
              jika tidak, maka tidak menampilkan form */}
            </button>

            {tampil && (<form className="form-tambah-buku" onSubmit={inputForm} noValidate>{/*(<form...) otomatis mempunyai nilai true
            dan jika tampilnya true, maka menampilkan form dan sebaliknya*/}
              <h3>Tambah Buku:</h3>
              <label>Judul:</label>
              <input //input untuk judul buku
                onChange={handleInput}//pakai fungsi handleInput untuk menambahkan nama buku
                placeholder="...Tuliskan nama/judul buku"
                type="text"
                name="judul"
                value={buku.judul}
                required
              ></input>

              <label>Nama Penulis:</label>
              <input //input untuk judul penuluis
                onChange={handleInput}
                placeholder="...Tuliskan nama penulis"
                type="text"
                name="penulis"
                value={buku.penulis}
                required
              ></input>

              <label>Tahun Release:</label>
              <input //input untuk tahun
                onChange={handleInput}
                placeholder="...Tuliskan tahun buku dikeluarkan"
                type="text"
                name="tahun"
                value={buku.tahun}
                required
              ></input>

              <label>Link Gambar Cover Buku:</label>
              <input //input untuk linRef
                onChange={handleInput}
                placeholder="...Input link referensi gambar"
                type="text"
                name="linkRef"
                value={buku.linkRef}
                required
              ></input>

              <button type="submit">Simpan Buku</button>
            </form>)}
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
        </div>
        <div className="grid-buku-footer">
          <p>Footer</p>
        </div>
      </div>
    </>
  );
}

export default App;
