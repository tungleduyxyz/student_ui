import Link from "next/link";
import styles from './Students.module.css';
import CreateStudent from './CreateStudent';
import SearchStudent from './SearchStudent';

async function getStudents() {
  const res = await fetch('http://127.0.0.1:3001/students', { cache: 'no-store' });

  const data = await res.json();
  
  return data as any[];
}

export default async function StudentsPage() {
  const students = await getStudents();
  return(
    <div>
      <h1>Students</h1>
      <SearchStudent />
      <div>
        {students?.map((student) => {
          return <Student key={student.id} student={student} />;
        })}
      </div>
      <CreateStudent />
    </div>
  );
}

function Student({ student }: any) {
  const {id, name, grade} = student || {};

  return (
    <Link href={`/students/${id}`}>
      <div className={styles.student}>
        <h2>{name}</h2>
        <p>Grade: {grade}</p>
      </div>
    </Link>
  );
}
