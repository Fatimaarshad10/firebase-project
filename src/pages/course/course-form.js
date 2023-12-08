import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const AddCourseForm = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const coursesCollection = collection(db, 'courses');

      await addDoc(coursesCollection, {
        name,
        code,
        description,
      });

      setSuccessMessage('Course added successfully!');
      setName('');
      setCode('');
      setDescription('');
    } catch (error) {
      console.error('Error adding course:', error);
      setErrorMessage('Error adding course. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className="mb-3">
        <label htmlFor="courseName" className="form-label">
          Course Name:
        </label>
        <input
          type="text"
          id="courseName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="courseCode" className="form-label">
          Course Code:
        </label>
        <input
          type="text"
          id="courseCode"
          className="form-control"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="courseDescription" className="form-label">
          Course Description:
        </label>
        <textarea
          id="courseDescription"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-light" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default AddCourseForm;
