'use client';
import styles from '../Students.module.css';
import { redirect } from 'next/navigation';
import Router from 'next/router';

async function getStudent(studentId: string) {
  const res = await fetch(
    `http://127.0.0.1:3001/students/${studentId}`
  );
  const data = await res.json();
  return data;
}

async function deleteStudent(studentId: string) {
  await fetch(`http://127.0.0.1:3001/students/${studentId}`, {
    method: 'DELETE'
  });
}

export default async function StudentPage({ params }: any) {
  const student = await getStudent(params.id);

  return (
    <div>
      <h1>Student</h1>
      <div className={styles.student}>
        <h3>{student.name}</h3>
        <p>Grade: {student.grade}</p>
        <p>Class: {student.class_name}</p>
      </div>

      <button disabled={true} className={styles.studentInput} onClick={(e) => deleteStudent(params.id)}>
        Delete
      </button>
    </div>
  );
}
