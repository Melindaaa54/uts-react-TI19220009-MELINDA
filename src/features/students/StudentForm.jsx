import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./StudentSlice";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && score) {
      dispatch(addStudent({ name, score: parseInt(score) }));
      setName("");
      setScore("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-4">
      <input
        value={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama siswa"
      />
      <input
        value={score}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
        onChange={(e) => setScore(e.target.value)}
        type="number"
        placeholder="Nilai"
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Tambah
      </button>
    </form>
  );
}
