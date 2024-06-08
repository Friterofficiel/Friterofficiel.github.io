import { useEffect, useState } from "react";
import axios from 'axios';

interface Student {
  id: string;
  name: string;
  house: string;
  alternate_names: string[];
}

const StudentsComp: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [randomStudent, setRandomStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/real/students').then(response => {
        setStudents(response.data);
      })
      
  }, []);

  const getRandomStudent = () => {
    axios.get('http://localhost:3000/real/randomstudent').then(response => {
        setRandomStudent(response.data);
      })
      
  };

  return (
    <section id="students" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8">Liste des élèves</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white">
            <thead className="bg-yellow-600 text-white">
              <tr>
                <th className="w-1/4 py-2">Nom</th>
                <th className="w-1/4 py-2">Maison</th>
                <th className="w-1/2 py-2">Surnoms</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? students.map(student => (
                <tr key={student.id} className="text-center">
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.house}</td>
                  <td className="border px-4 py-2">
                    {student.alternate_names.length > 0 ? (
                      <ul>
                        {student.alternate_names.map((nickname, index) => (
                          <li key={index}>{nickname}</li>
                        ))}
                      </ul>
                    ) : (
                      'N/A'
                    )}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={3} className="border px-4 py-2">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button
          onClick={getRandomStudent}
          className="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Tirer au sort un élève
        </button>
        {randomStudent && (
          <div className="mt-8 p-4 border rounded bg-gray-100">
            <h3 className="text-2xl font-bold mb-2">Élève au hasard :</h3>
            <p><strong>Nom :</strong> {randomStudent.name}</p>
            <p><strong>Maison :</strong> {randomStudent.house}</p>
            <p><strong>Surnoms :</strong> {randomStudent.alternate_names.length > 0 ? randomStudent.alternate_names.join(', ') : 'N/A'}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentsComp;
