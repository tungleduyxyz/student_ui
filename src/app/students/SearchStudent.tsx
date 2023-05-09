'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Students.module.css';

export default function SearchStudent() {
  const [grade, setGrade] = useState('');

  const router = useRouter();

  const create = async() => {

    await fetch(`http://127.0.0.1:3001/students?grade=${grade}`, {
      method: 'GET'
    });

    // setGrade('');
    // router.refresh();
  }

  return (
    <form onSubmit={create} className={styles.studentInput}>
      <h3>Create a new Student</h3>
      <input required className={styles.studentInput}
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button className={styles.studentInput} type="submit">
        Search student
      </button>
    </form>
  );
}