import { useState } from "react";
import "./kontak.css";
export function Kontak() {
  const [pesan, setPesan] = useState({
    nama: "",
    email: "",
    isi: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setPesan((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!pesan.nama || !pesan.email || !pesan.isi) {
      alert("Tolong semua kolom pesan diisi ya!");
      return;
    }
    alert(`Terima kasih ${pesan.nama}, pesan kamu berhasil dikirim!`);
    setPesan({ nama: "", email: "", isi: "" });
  }

  return (
    <div className="contact">
      <h2>Hubungi Kami</h2>
      <p>
        Punya pertanyaan atau saran buku baru? Kirimkan pesanmu di bawah ini!
      </p>

      {/* Form Pesan */}
      <form onSubmit={handleSubmit}>
        <label>Nama:</label>
        <input
          type="text"
          name="nama"
          value={pesan.nama}
          onChange={handleInput}
          placeholder="Asep..."
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={pesan.email}
          onChange={handleInput}
          placeholder="email@contoh.com"
        />

        <label>Pesan / Saran Buku:</label>
        <textarea
          name="isi"
          rows="4"
          value={pesan.isi}
          onChange={handleInput}
          placeholder="Tuliskan pesanmu..."
        />

        <button type="submit">Kirim Pesan</button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      {/*developers*/}
      <div className="devs">
        <div className="devs-item">
          <h3>Informasi Pengembang</h3>
          <p>
            <strong>Nama:</strong> Zakharia Adams Hataa
          </p>
          <p>
            <strong>NIM:</strong> 255314052
          </p>
          <p>
            <strong>Email:</strong> admin@katalogbuku.com
          </p>
        </div>
        <div className="devs-item">
          <h3>Informasi Pengembang</h3>
          <p>
            <strong>Nama:</strong> Satya Rey Immanuel Takahepis
          </p>
          <p>
            <strong>NIM:</strong> 255314078
          </p>
          <p>
            <strong>Email:</strong> admin@katalogbuku.com
          </p>
        </div>
      </div>
    </div>
  );
}
