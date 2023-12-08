import React from 'react';

function CourseModal({  Name,
  Code,
  Description ,
  setName,
  setCode,
  setDescription,
  handleUpdate}) {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Student</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div className="row mb-3">
            <label htmlFor="studentName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                style={{ color: 'black' }}
                type="text"
                id="studentName"
                className="form-control"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="contactInfo" className="col-sm-2 col-form-label">
              Code
            </label>
            <div className="col-sm-10">
              <input
                style={{ color: 'black' }}
                type="text"
                id="contactInfo"
                className="form-control"
                value={Code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                style={{ color: 'black' }}
                type="text"
                id="description"
                className="form-control"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" onClick={handleUpdate}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CourseModal;
