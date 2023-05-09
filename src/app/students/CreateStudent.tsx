'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Students.module.css';

export default function CreateStudent() {
  const [grade, setGrade] = useState('');
  const [name, setName] = useState('');

  const router = useRouter();

  const create = async() => {

    await fetch('http://127.0.0.1:3001/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {"student": {
          grade,
          name,
        }}
        ),
    });

    setName('');
    setGrade('');

    router.refresh();
  }

  return (
    <form onSubmit={create} className={styles.studentInput}>
      <h3>Create a new Student</h3>
      <input required className={styles.studentInput}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p/>
      <select required className={styles.studentInput} id="grade" onChange={(e) => setGrade(e.target.value)}>
        <option value="">Choose a grade</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>

      <p/>
      <button className={styles.studentInput} type="submit">
        Create student
      </button>
    </form>
  );
}