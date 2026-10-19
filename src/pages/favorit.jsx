import { KartuBuku } from "../components.jsx";
const bukuFav = {
  judul: "Reverend Insanity",
  penulis: "Gu Zhen Ren",
  tahun: "2015",
  linkRef:
    "https://cdna.artstation.com/p/assets/images/images/085/188/238/large/ullaseu-imadfge.jpg?1740166168",
  kat: "fiksi",
  index:2,
};
export function Favorit() {
  return (
    <div>
      <KartuBuku
        judul={bukuFav.judul}
        penulis={bukuFav.penulis}
        tahun={bukuFav.tahun}
        linkRef={bukuFav.linkRef}
        index={bukuFav.index}
      />
    </div>
  );
}
