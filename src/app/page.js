import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const blogs = [
    {id: 1, title: "Dilantik Jadi Anggota DPD RI 2024-2029, Fahira Idris: Terima Kasih Warga Jakarta"},
    {id: 2, title: "Video Asusila Diduga Pelajar, Fahira Idris: Paparan Pornografi Pada Anak Sudah Sangat Memprihatinkan"},
    {id: 3, title: "HUT Ke-64 Karang Taruna, Fahira Idris: Kuatkan Kapasitas Agar Bisa Terus Tebarkan Manfaat"},
    {id: 4, title: "Fahira Idris Apresiasi Kapolri Bentuk Direktorat PPA dan PPO"},
    {id: 5, title: "Ajukan Surat Penutupan Pabrik Miras, Fahira Idris: Terima Kasih Pemkab Serang"},
  ];

  return (
    <div className="w-2/3 m-auto">
      <div className="flex gap-12 mt-8 mb-8">
        <div className="w-1/3">
          <Image src="/profil.jpeg" width={900} height={900} className="rounded-lg" />    
        </div>
        <div className="w-2/3">
          <h3 className="mb-8 text-5xl text-slate-800">Halo! My Name is Ananda Puja</h3>
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <Link href="/about">
            <button className="bg-green-900 px-4 py-2 rounded-lg mt-6 hover:bg-green-700 text-white">See More</button>
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-left text-6xl underline mb-8">Blog</h3>
      </div>

        <ul>
          {blogs.map((blog) => (
            <Link href="/">
              <li className="pb-2 underline hover:text-green-800" key={blog.id}>{blog.title}</li>
            </Link>
          ))}
        </ul>
      </div>
  );
}
