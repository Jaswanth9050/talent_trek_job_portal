import React from 'react';

const SidebarFilter = ({ setSearchTerm }) => {
  // Handle input change and pass value to parent JobList
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term in parent
  };

  return (
    <div className="bg-white p-3 shadow rounded sticky-top">
      <h5>Filter</h5>
      <hr />

      {/* Job Title Search Field */}
      <h6>Job Post</h6>
      <div className="input-group mb-3">
        {/* When user types, update searchTerm */}
        <input
          type="text"
          className="form-control"
          placeholder="Search job title..."
          onChange={handleSearch}
        />
        {/* Optional filter dropdown, not functional yet */}
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        ></button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Last Week</a></li>
          <li><a className="dropdown-item" href="#">This Week</a></li>
          <li><a className="dropdown-item" href="#">Past Month</a></li>
        </ul>
      </div>

      {/* Work Schedule Filter Options */}
      <h6>Work Schedule</h6>
      {['Full time', 'Part time', 'Freelance', 'Internship', 'Contract', 'Project Based'].map((type, idx) => (
        <p key={idx}>
          <input type="checkbox" className="form-check-input me-2" />
          {type}
        </p>
      ))}

      {/* Experience Filter Options */}
      <h6 className="mt-3">Experience</h6>
      {['Entry level', 'Mid level', 'Senior level'].map((exp, idx) => (
        <p key={idx}>
          <input type="checkbox" className="form-check-input me-2" />
          {exp}
        </p>
      ))}
    </div>
  );
};

export default SidebarFilter;
