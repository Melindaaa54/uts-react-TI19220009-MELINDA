import StudentForm from "../features/students/StudentForm";
import StudentList from "../features/students/StudentList";

export default function ManageStudents() {
  return (
    <div className="w-full p-4">
      <div className="bg-white p-4 mb-4 shadow-md rounded-md flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Kelola Data Siswa</h2>
        <StudentForm />
      </div>

      <StudentList />
    </div>
  );
}
