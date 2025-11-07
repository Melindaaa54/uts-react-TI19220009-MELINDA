import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white p-4 text-gray-500 flex justify-between items-center shadow-md ">
      <h2 className="text-gray-600 font-bold text-xl">Student Tracker</h2>
      <ul className="flex gap-4">
        <li className="hover:text-blue-600">
          <Link to="/">Beranda</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link to="/manage">Kelola Siswa</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link to="/about">Tentang</Link>
        </li>
      </ul>
    </nav>
  );
}
