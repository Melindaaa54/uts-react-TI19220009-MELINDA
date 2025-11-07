import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, toggleStatus } from "./StudentSlice";

export default function StudentList() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-4 gap-4">
      {students.map((s) => (
        <div
          className={`bg-white p-4 shadow-md rounded-md border-t-4 ${
            s.passed ? "border-green-500" : "border-red-500"
          }`}
          key={s.id}
        >
          <p>Nama : {s.name}</p>
          <p>Nilai: {s.score}</p>
          <p>Status: {s.passed ? "Lulus" : "Belum Lulus"}</p>
          <button
            className="text-sm px-4 py-1 bg-blue-400 text-white rounded-md mt-2 mb-2 hover:bg-blue-600 cursor-pointer"
            onClick={() => dispatch(toggleStatus(s.id))}
          >
            Ubah Status
          </button>
          <button
            className="text-sm px-4 py-1 bg-red-400 ml-2 text-white rounded-md mt-2 mb-2 hover:bg-red-600 cursor-pointer"
            onClick={() => dispatch(deleteStudent(s.id))}
          >
            Hapus
          </button>
        </div>
      ))}
    </div>
  );
}
