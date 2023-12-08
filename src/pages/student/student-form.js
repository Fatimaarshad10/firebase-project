import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const AddStudentForm = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const studentsCollection = collection(db, 'students');

      await addDoc(studentsCollection, {
        name,
        contactInfo,
      });

      setSuccessMessage('Student added successfully!');
      setName('');
      setContactInfo('');
    } catch (error) {
      console.error('Error adding student:', error);
      setErrorMessage('Error adding student. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <div className="mb-3">
        <label htmlFor="studentName" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="studentName"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contactInfo" className="form-label">
          Contact Info:
        </label>
        <input
          type="text"
          id="contactInfo"
          className="form-control"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-light" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default AddStudentForm;
