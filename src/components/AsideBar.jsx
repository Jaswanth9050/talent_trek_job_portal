// import React from "react";

// const AsideBar = () => {
//   return (
//     <div className="bg-dark text-white p-3 fixed-top mt-5" style={{ minHeight: "100vh", width: "250px" }}>
//       <h5 className="mb-4 border-bottom pb-2">Job Filters</h5>

//       {/* Job Type */}
//       <div className="mb-3">
//         <h6>Job Type</h6>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="fullTime" />
//           <label className="form-check-label" htmlFor="fullTime">Full-Time</label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="partTime" />
//           <label className="form-check-label" htmlFor="partTime">Part-Time</label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="internship" />
//           <label className="form-check-label" htmlFor="internship">Internship</label>
//         </div>
//       </div>

//       {/* Experience */}
//       <div className="mb-3">
//         <h6>Experience</h6>
//         <select className="form-select">
//           <option>Fresher</option>
//           <option>0-1 years</option>
//           <option>1-3 years</option>
//           <option>3-5 years</option>
//           <option>5+ years</option>
//         </select>
//       </div>

//       {/* Location */}
//       <div className="mb-3">
//         <h6>Location</h6>
//         <input type="text" className="form-control" placeholder="Enter city" />
//       </div>

//       {/* Skills */}
//       <div className="mb-3">
//         <h6>Skills</h6>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="react" />
//           <label className="form-check-label" htmlFor="react">React</label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="django" />
//           <label className="form-check-label" htmlFor="django">Django</label>
//         </div>
//         <div className="form-check">
//           <input className="form-check-input" type="checkbox" id="mysql" />
//           <label className="form-check-label" htmlFor="mysql">MySQL</label>
//         </div>
//       </div>

//       <button className="btn btn-success w-100 mt-3">Apply Filters</button>
//     </div>
//   );
// };

// export default AsideBar;









// import React from "react";

// const AsideBar = ({ filters, setFilters, applyFilters }) => {
//   const handleCheckboxChange = (type, value) => {
//     setFilters((prev) => {
//       const list = new Set(prev[type]);
//       list.has(value) ? list.delete(value) : list.add(value);
//       return { ...prev, [type]: Array.from(list) };
//     });
//   };

//   const handleInputChange = (e) => {
//     setFilters((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <div className="bg-dark text-white p-3 fixed-top mt-5" style={{ minHeight: "100vh", width: "250px" }}>
//       <h5 className="mb-4 border-bottom pb-2">Job Filters</h5>

//       <div className="mb-3">
//         <h6>Job Type</h6>
//         {["Full-Time", "Part-Time", "Internship"].map((type) => (
//           <div className="form-check" key={type}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={type}
//               checked={filters.jobTypes.includes(type)}
//               onChange={() => handleCheckboxChange("jobTypes", type)}
//             />
//             <label className="form-check-label" htmlFor={type}>{type}</label>
//           </div>
//         ))}
//       </div>

//       <div className="mb-3">
//         <h6>Experience</h6>
//         <select name="experience" className="form-select" value={filters.experience} onChange={handleInputChange}>
//           <option value="">Select</option>
//           <option>Fresher</option>
//           <option>0-1 years</option>
//           <option>1-3 years</option>
//           <option>3-5 years</option>
//           <option>5+ years</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <h6>Location</h6>
//         <input
//           type="text"
//           className="form-control"
//           name="location"
//           value={filters.location}
//           onChange={handleInputChange}
//           placeholder="Enter city"
//         />
//       </div>

//       <div className="mb-3">
//         <h6>Skills</h6>
//         {["React", "Django", "MySQL"].map((skill) => (
//           <div className="form-check" key={skill}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={skill}
//               checked={filters.skills.includes(skill)}
//               onChange={() => handleCheckboxChange("skills", skill)}
//             />
//             <label className="form-check-label" htmlFor={skill}>{skill}</label>
//           </div>
//         ))}
//       </div>

//       <button className="btn btn-success w-100 mt-3" onClick={applyFilters}>Apply Filters</button>
//     </div>
//   );
// };

// export default AsideBar;


// import React from "react";

// const AsideBar = ({ filters, setFilters, applyFilters }) => {
//   const handleCheckbox = (field, value) => {
//     setFilters((prev) => {
//       const set = new Set(prev[field]);
//       set.has(value) ? set.delete(value) : set.add(value);
//       return { ...prev, [field]: [...set] };
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="bg-dark text-white p-3 fixed-top mt-5" style={{ minHeight: "100vh", width: "250px" }}>
//       <h5 className="mb-4 border-bottom pb-2">Job Filters</h5>

//       <div className="mb-3">
//         <h6>Job Type</h6>
//         {["Full-Time", "Part-Time", "Internship"].map((type) => (
//           <div className="form-check" key={type}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={filters.jobTypes.includes(type)}
//               onChange={() => handleCheckbox("jobTypes", type)}
//             />
//             <label className="form-check-label">{type}</label>
//           </div>
//         ))}
//       </div>

//       <div className="mb-3">
//         <h6>Experience</h6>
//         <select name="experience" className="form-select" value={filters.experience} onChange={handleInputChange}>
//           <option value="">Select</option>
//           <option>Fresher</option>
//           <option>0-1 years</option>
//           <option>1-3 years</option>
//           <option>3-5 years</option>
//           <option>5+ years</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <h6>Location</h6>
//         <input
//           type="text"
//           className="form-control"
//           name="location"
//           value={filters.location}
//           onChange={handleInputChange}
//           placeholder="Enter city"
//         />
//       </div>

//       <div className="mb-3">
//         <h6>Skills</h6>
//         {["React", "Django", "MySQL"].map((skill) => (
//           <div className="form-check" key={skill}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={filters.skills.includes(skill)}
//               onChange={() => handleCheckbox("skills", skill)}
//             />
//             <label className="form-check-label">{skill}</label>
//           </div>
//         ))}
//       </div>

//       <button className="btn btn-success w-100 mt-3" onClick={applyFilters}>
//         Apply Filters
//       </button>
//     </div>
//   );
// };

// export default AsideBar;



// import React from "react";

// const AsideBar = ({ filters, setFilters, applyFilters }) => {
//   const handleCheckbox = (field, value) => {
//     setFilters((prev) => {
//       const set = new Set(prev[field]);
//       set.has(value) ? set.delete(value) : set.add(value);
//       return { ...prev, [field]: [...set] };
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="bg-dark text-white p-3 fixed-top mt-5" style={{ minHeight: "100vh", width: "250px" }}>
//       <h5 className="mb-4 border-bottom pb-2">Job Filters</h5>

//       <div className="mb-3">
//         <h6>Job Type</h6>
//         {["fulltime", "parttime", "internship"].map((type) => (
//           <div className="form-check" key={type}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={filters.jobTypes.includes(type)}
//               onChange={() => handleCheckbox("jobTypes", type)}
//             />
//             <label className="form-check-label text-capitalize">{type}</label>
//           </div>
//         ))}
//       </div>

//       <div className="mb-3">
//         <h6>Experience</h6>
//         <select
//           name="experience"
//           className="form-select"
//           value={filters.experience}
//           onChange={(e) => setFilters((prev) => ({ ...prev, experience: e.target.value.toLowerCase() }))}
//         >
//           <option value="">Select</option>
//           <option>Fresher</option>
//           <option>0-1 years</option>
//           <option>1-3 years</option>
//           <option>3-5 years</option>
//           <option>5+ years</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <h6>Location</h6>
//         <input
//           type="text"
//           className="form-control"
//           name="location"
//           value={filters.location}
//           onChange={handleInputChange}
//           placeholder="Enter city"
//         />
//       </div>

//       <div className="mb-3">
//         <h6>Skills</h6>
//         {["React", "Django", "MySQL", "JavaScript", "Html", "Css"].map((skill) => (
//           <div className="form-check" key={skill}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               checked={filters.skills.includes(skill.toLowerCase())}
//               onChange={() => handleCheckbox("skills", skill.toLowerCase())}
//             />
//             <label className="form-check-label">{skill}</label>
//           </div>
//         ))}
//       </div>

//       <button className="btn btn-success w-100 mt-3" onClick={applyFilters}>
//         Apply Filters
//       </button>
//     </div>
//   );
// };

// export default AsideBar;



// import React, { useState, useEffect } from "react";

// const AsideBar = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     jobTypes: [],
//     experience: "",
//     location: "",
//     skills: []
//   });

//   // Auto-trigger on filter change
//   useEffect(() => {
//     onFilterChange(filters);
//   }, [filters]);

//   // Helper: toggle item in array
//   function toggleValue(array, value) {
//     if (array.includes(value)) {
//       return array.filter((v) => v !== value);
//     } else {
//       return [...array, value];
//     }
//   }

//   function handleCheckboxChange(e, category) {
//     const value = e.target.id;
//     setFilters((prev) => ({
//       ...prev,
//       [category]: toggleValue(prev[category], value)
//     }));
//   }

//   function handleSelectChange(e) {
//     setFilters((prev) => ({
//       ...prev,
//       experience: e.target.value
//     }));
//   }

//   function handleLocationChange(e) {
//     setFilters((prev) => ({
//       ...prev,
//       location: e.target.value
//     }));
//   }

//   function handleReset() {
//     setFilters({
//       jobTypes: [],
//       experience: "",
//       location: "",
//       skills: []
//     });
//   }

//   return (
//     <div className="bg-dark text-white p-3 fixed-top mt-5" style={{ minHeight: "100vh", width: "250px" }}>
//       <h5 className="mb-4 border-bottom pb-2">Job Filters</h5>

//       {/* Job Type */}
//       <div className="mb-3">
//         <h6>Job Type</h6>
//         {["fullTime", "partTime", "internship"].map((type) => (
//           <div className="form-check" key={type}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={type}
//               checked={filters.jobTypes.includes(type)}
//               onChange={(e) => handleCheckboxChange(e, "jobTypes")}
//             />
//             <label className="form-check-label" htmlFor={type}>
//               {type.replace(/([a-z])([A-Z])/, "$1-$2")}
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* Experience */}
//       <div className="mb-3">
//         <h6>Experience</h6>
//         <select className="form-select" value={filters.experience} onChange={handleSelectChange}>
//           <option value="">All</option>
//           <option>Fresher</option>
//           <option>0-1 years</option>
//           <option>1-3 years</option>
//           <option>3-5 years</option>
//           <option>5+ years</option>
//         </select>
//       </div>

//       {/* Location */}
//       <div className="mb-3">
//         <h6>Location</h6>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter city"
//           value={filters.location}
//           onChange={handleLocationChange}
//         />
//       </div>

//       {/* Skills */}
//       <div className="mb-3">
//         <h6>Skills</h6>
//         {["react", "django", "mysql"].map((skill) => (
//           <div className="form-check" key={skill}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={skill}
//               checked={filters.skills.includes(skill)}
//               onChange={(e) => handleCheckboxChange(e, "skills")}
//             />
//             <label className="form-check-label" htmlFor={skill}>
//               {skill}
//             </label>
//           </div>
//         ))}
//       </div>

//       <button className="btn btn-danger w-100 mt-2" onClick={handleReset}>Reset Filters</button>
//     </div>
//   );
// };

// export default AsideBar;



// import React from 'react';

// const AsideBar = ({ filters, setFilters }) => {
//   // Handle dropdown change
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [name]: value
//     }));
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       type: '',
//       location: '',
//       experience: ''
//     });
//   };

//   return (
//     <div className="card shadow p-3">
//       <h5 className="mb-3">📊 Filter Jobs</h5>

//       {/* Job Type Filter */}
//       <div className="mb-3">
//         <label className="form-label">Job Type</label>
//         <select
//           className="form-select"
//           name="type"
//           value={filters.type}
//           onChange={handleFilterChange}
//         >
//           <option value="">All</option>
//           <option value="Full-time">Full-time</option>
//           <option value="Part-time">Part-time</option>
//           <option value="Internship">Internship</option>
//         </select>
//       </div>

//       {/* Location Filter */}
//       <div className="mb-3">
//         <label className="form-label">Location</label>
//         <select
//           className="form-select"
//           name="location"
//           value={filters.location}
//           onChange={handleFilterChange}
//         >
//           <option value="">All</option>
//           <option value="Hyderabad">Hyderabad</option>
//           <option value="Bangalore">Bangalore</option>
//           <option value="Remote">Remote</option>
//         </select>
//       </div>

//       {/* Experience Filter */}
//       <div className="mb-3">
//         <label className="form-label">Experience</label>
//         <select
//           className="form-select"
//           name="experience"
//           value={filters.experience}
//           onChange={handleFilterChange}
//         >
//           <option value="">All</option>
//           <option value="0-1">0-1 years</option>
//           <option value="2-4">2-4 years</option>
//           <option value="5+">5+ years</option>
//         </select>
//       </div>

//       {/* Clear Filters Button */}
//       <button className="btn btn-outline-danger w-100 mt-2" onClick={clearFilters}>
//         Clear Filters
//       </button>
//     </div>
//   );
// };

// export default AsideBar;


// import React from "react";

// const AsideBar = ({ filters, setFilters }) => {
//   // Handle checkbox change for job types and skills
//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;

//     if (name === "type") {
//       // For job type, only one can be selected, so use value directly or clear if unchecked
//       setFilters((prev) => ({
//         ...prev,
//         type: checked ? value : "",
//       }));
//     } else if (name === "skills") {
//       // For skills, keep an array of selected skills
//       let updatedSkills = filters.skills ? [...filters.skills] : [];
//       if (checked) {
//         updatedSkills.push(value);
//       } else {
//         updatedSkills = updatedSkills.filter((skill) => skill !== value);
//       }
//       setFilters((prev) => ({
//         ...prev,
//         skills: updatedSkills,
//       }));
//     }
//   };

//   // Handle dropdown or text input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       type: "",
//       location: "",
//       experience: "",
//       skills: [],
//     });
//   };

//   return (
//     <div
//       className="bg-dark text-white p-3"
//       style={{ minHeight: "100vh", width: "250px", position: "sticky", top: "80px" }}
//     >
//       <h5 className="mb-4 border-bottom pb-2">Job Filters</h5>

//       {/* Job Type - only one can be selected */}
//       <div className="mb-3">
//         <h6>Job Type</h6>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="fullTime"
//             name="type"
//             value="Full-time"
//             checked={filters.type === "Full-time"}
//             onChange={handleCheckboxChange}
//           />
//           <label className="form-check-label" htmlFor="fullTime">
//             Full-Time
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="partTime"
//             name="type"
//             value="Part-time"
//             checked={filters.type === "Part-time"}
//             onChange={handleCheckboxChange}
//           />
//           <label className="form-check-label" htmlFor="partTime">
//             Part-Time
//           </label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="internship"
//             name="type"
//             value="Internship"
//             checked={filters.type === "Internship"}
//             onChange={handleCheckboxChange}
//           />
//           <label className="form-check-label" htmlFor="internship">
//             Internship
//           </label>
//         </div>
//       </div>

//       {/* Experience Dropdown */}
//       <div className="mb-3">
//         <h6>Experience</h6>
//         <select
//           className="form-select"
//           name="experience"
//           value={filters.experience || ""}
//           onChange={handleInputChange}
//         >
//           <option value="">Select experience</option>
//           <option value="Fresher">Fresher</option>
//           <option value="0-1">0-1 years</option>
//           <option value="1-3">1-3 years</option>
//           <option value="3-5">3-5 years</option>
//           <option value="5+">5+ years</option>
//         </select>
//       </div>

//       {/* Location text input */}
//       <div className="mb-3">
//         <h6>Location</h6>
//         <input
//           type="text"
//           name="location"
//           className="form-control"
//           placeholder="Enter city"
//           value={filters.location || ""}
//           onChange={handleInputChange}
//         />
//       </div>

//       {/* Skills - multiple checkboxes */}
//       <div className="mb-3">
//         <h6>Skills</h6>
//         {["React", "Django", "MySQL"].map((skill) => (
//           <div className="form-check" key={skill}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={skill.toLowerCase()}
//               name="skills"
//               value={skill}
//               checked={filters.skills?.includes(skill) || false}
//               onChange={handleCheckboxChange}
//             />
//             <label className="form-check-label" htmlFor={skill.toLowerCase()}>
//               {skill}
//             </label>
//           </div>
//         ))}
//       </div>

//       <button className="btn btn-success w-100 mt-3" onClick={clearFilters}>
//         Clear Filters
//       </button>
//     </div>
//   );
// };

// export default AsideBar;

// import React, { useState, useEffect } from "react";

// const AsideBar = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     jobTypes: [],
//     experience: "",
//     location: "",
//     skills: []
//   });

//   // 🔄 Send updated filters to parent on any change
//   useEffect(() => {
//     onFilterChange(filters);
//   }, [filters]);

//   // ✅ Toggle value in array (for checkboxes)
//   function toggleValue(array, value) {
//     if (array.includes(value)) {
//       return array.filter((v) => v !== value);
//     } else {
//       return [...array, value];
//     }
//   }

//   // 🔘 Checkbox (Job Types or Skills)
//   function handleCheckboxChange(e, category) {
//     const value = e.target.id;
//     setFilters((prev) => ({
//       ...prev,
//       [category]: toggleValue(prev[category], value)
//     }));
//   }

//   // ⬇️ Experience dropdown
//   function handleSelectChange(e) {
//     setFilters((prev) => ({
//       ...prev,
//       experience: e.target.value
//     }));
//   }

//   // 📍 Location input
//   function handleLocationChange(e) {
//     setFilters((prev) => ({
//       ...prev,
//       location: e.target.value
//     }));
//   }

//   // 🔁 Reset all filters
//   function handleReset() {
//     setFilters({
//       jobTypes: [],
//       experience: "",
//       location: "",
//       skills: []
//     });
//   }

//   return (
//     <div className="bg-dark text-white p-3 fixed-top mt-5" style={{ minHeight: "100vh", width: "250px" }}>
//       <h5 className="mb-4 border-bottom pb-2">Job Filters</h5>

//       {/* ✅ Job Type */}
//       <div className="mb-3">
//         <h6>Job Type</h6>
//         {["Full-time", "Part-time", "Internship"].map((type) => (
//           <div className="form-check" key={type}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={type}
//               checked={filters.jobTypes.includes(type)}
//               onChange={(e) => handleCheckboxChange(e, "jobTypes")}
//             />
//             <label className="form-check-label" htmlFor={type}>
//               {type}
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Experience */}
//       <div className="mb-3">
//         <h6>Experience</h6>
//         <select className="form-select" value={filters.experience} onChange={handleSelectChange}>
//           <option value="">All</option>
//           <option>Fresher</option>
//           <option>0-1 years</option>
//           <option>1-3 years</option>
//           <option>3-5 years</option>
//           <option>5+ years</option>
//         </select>
//       </div>

//       {/* ✅ Location */}
//       <div className="mb-3">
//         <h6>Location</h6>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter city"
//           value={filters.location}
//           onChange={handleLocationChange}
//         />
//       </div>

//       {/* ✅ Skills */}
//       <div className="mb-3">
//         <h6>Skills</h6>
//         {["React", "Django", "MySQL"].map((skill) => (
//           <div className="form-check" key={skill}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={skill}
//               checked={filters.skills.includes(skill)}
//               onChange={(e) => handleCheckboxChange(e, "skills")}
//             />
//             <label className="form-check-label" htmlFor={skill}>
//               {skill}
//             </label>
//           </div>
//         ))}
//       </div>

//       <button className="btn btn-danger w-100 mt-2" onClick={handleReset}>
//         Reset Filters
//       </button>
//     </div>
//   );
// };

// export default AsideBar;


// import React, { useState, useEffect } from "react";

// const AsideBar = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     jobTypes: [],
//     experience: "",
//     location: "",
//     skills: []
//   });

//   useEffect(() => {
//     onFilterChange(filters);
//   }, [filters]);

//   // Toggle checkbox selection
//   function toggleValue(array, value) {
//     return array.includes(value)
//       ? array.filter((v) => v !== value)
//       : [...array, value];
//   }

//   function handleCheckboxChange(e, category) {
//     const value = e.target.id;
//     setFilters((prev) => ({
//       ...prev,
//       [category]: toggleValue(prev[category], value)
//     }));
//   }

//   function handleSelectChange(e) {
//     setFilters((prev) => ({
//       ...prev,
//       experience: e.target.value
//     }));
//   }

//   function handleLocationChange(e) {
//     setFilters((prev) => ({
//       ...prev,
//       location: e.target.value
//     }));
//   }

//   function handleReset() {
//     setFilters({
//       jobTypes: [],
//       experience: "",
//       location: "",
//       skills: []
//     });
//   }

//   return (
//     <div
//       className="bg-dark text-white p-4 position-fixed top-0 start-0 mt-5 border-end border-secondary"
//       style={{ height: "100vh", width: "260px", overflowY: "auto", zIndex: 1000 }}
//     >
//       <h5 className="mb-4 border-bottom pb-2">🎯 Job Filters</h5>

//       {/* Job Type */}
//       <div className="mb-4">
//         <h6 className="text-uppercase">Job Type</h6>
//         {["Full-time", "Part-time", "Internship"].map((type) => (
//           <div className="form-check" key={type}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={type}
//               checked={filters.jobTypes.includes(type)}
//               onChange={(e) => handleCheckboxChange(e, "jobTypes")}
//             />
//             <label className="form-check-label ms-2" htmlFor={type}>
//               {type}
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* Experience */}
//       <div className="mb-4">
//         <h6 className="text-uppercase">Experience</h6>
//         <select
//           className="form-select bg-secondary text-white border-0"
//           value={filters.experience}
//           onChange={handleSelectChange}
//         >
//           <option value="">All Levels</option>
//           <option>Fresher</option>
//           <option>0-1 years</option>
//           <option>1-3 years</option>
//           <option>3-5 years</option>
//           <option>5+ years</option>
//         </select>
//       </div>

//       {/* Location */}
//       <div className="mb-4">
//         <h6 className="text-uppercase">Location</h6>
//         <input
//           type="text"
//           className="form-control bg-secondary text-white border-0"
//           placeholder="Enter city"
//           value={filters.location}
//           onChange={handleLocationChange}
//         />
//       </div>

//       {/* Skills */}
//       <div className="mb-4">
//         <h6 className="text-uppercase">Skills</h6>
//         {["React", "Django", "MySQL", "JavaScript", "HTML", "CSS"].map((skill) => (
//           <div className="form-check" key={skill}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id={skill}
//               checked={filters.skills.includes(skill)}
//               onChange={(e) => handleCheckboxChange(e, "skills")}
//             />
//             <label className="form-check-label ms-2" htmlFor={skill}>
//               {skill}
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* Reset Button */}
//       <button className="btn btn-outline-light w-100 mt-2" onClick={handleReset}>
//         🔄 Reset Filters
//       </button>
//     </div>
//   );
// };

// export default AsideBar;


// import React, { useState, useEffect } from "react";

// const AsideBar = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     jobTypes: [],
//     experience: "",
//     location: "",
//     skills: []
//   });

//   useEffect(() => {
//     onFilterChange(filters);
//   }, [filters]);

//   function toggleValue(array, value) {
//     return array.includes(value)
//       ? array.filter((v) => v !== value)
//       : [...array, value];
//   }

//   function handleCheckboxChange(e, category) {
//     const value = e.target.id;
//     setFilters((prev) => ({
//       ...prev,
//       [category]: toggleValue(prev[category], value)
//     }));
//   }

//   function handleSelectChange(e) {
//     setFilters((prev) => ({
//       ...prev,
//       experience: e.target.value
//     }));
//   }

//   function handleLocationChange(e) {
//     setFilters((prev) => ({
//       ...prev,
//       location: e.target.value
//     }));
//   }

//   function handleReset() {
//     setFilters({
//       jobTypes: [],
//       experience: "",
//       location: "",
//       skills: []
//     });
//   }

//   return (
//     <div className="bg-white p-3 shadow rounded sticky-top" style={{ top: '80px' }}>
//       <h5>🎯 Job Filters</h5>
//       <hr />

//       {/* Job Type */}
//       <h6>Job Type</h6>
//       {["Full-time", "Part-time", "Internship"].map((type) => (
//         <p key={type}>
//           <input
//             className="form-check-input me-2"
//             type="checkbox"
//             id={type}
//             checked={filters.jobTypes.includes(type)}
//             onChange={(e) => handleCheckboxChange(e, "jobTypes")}
//           />
//           {type}
//         </p>
//       ))}

//       {/* Experience */}
//       <h6 className="mt-3">Experience</h6>
//       <select
//         className="form-select mb-3"
//         value={filters.experience}
//         onChange={handleSelectChange}
//       >
//         <option value="">All Levels</option>
//         <option>Fresher</option>
//         <option>0-1 years</option>
//         <option>1-3 years</option>
//         <option>3-5 years</option>
//         <option>5+ years</option>
//       </select>

//       {/* Location */}
//       <h6>Location</h6>
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Enter city"
//         value={filters.location}
//         onChange={handleLocationChange}
//       />

//       {/* Skills */}
//       <h6>Skills</h6>
//       {["React", "Django","MongoDB", "MySQL", "JavaScript", "HTML", "CSS"].map((skill) => (
//         <p key={skill}>
//           <input
//             className="form-check-input me-2"
//             type="checkbox"
//             id={skill}
//             checked={filters.skills.includes(skill)}
//             onChange={(e) => handleCheckboxChange(e, "skills")}
//           />
//           {skill}
//         </p>
//       ))}

//       {/* Reset Button */}
//       <button className="btn btn-outline-secondary w-100 mt-3" onClick={handleReset}>
//         🔄 Reset Filters
//       </button>
//     </div>
//   );
// };

// export default AsideBar;



import React, { useState, useEffect } from "react";

const AsideBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    jobTypes: [],
    experience: "",
    location: "",
    skills: []
  });

  // Notify parent component on any filter change
  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  // Helper to toggle value in array
  function toggleValue(array, value) {
    return array.includes(value)
      ? array.filter((v) => v !== value)
      : [...array, value];
  }

  // Handle checkbox changes for jobTypes and skills
  function handleCheckboxChange(e, category) {
    const value = e.target.id;
    setFilters((prev) => ({
      ...prev,
      [category]: toggleValue(prev[category], value)
    }));
  }

  // Handle experience select change
  function handleSelectChange(e) {
    setFilters((prev) => ({
      ...prev,
      experience: e.target.value
    }));
  }

  // Handle location text input change
  function handleLocationChange(e) {
    setFilters((prev) => ({
      ...prev,
      location: e.target.value
    }));
  }

  // Reset all filters
  function handleReset() {
    setFilters({
      jobTypes: [],
      experience: "",
      location: "",
      skills: []
    });
  }

  return (
    <div className="bg-white p-3 shadow rounded sticky-top" style={{ top: '80px' }}>
      <h5>🎯 Job Filters</h5>
      <hr />

      {/* Job Type */}
      <h6>Job Type</h6>
      {["Full-time", "Part-time", "Internship","Contract"].map((type) => (
        <p key={type}>
          <input
            className="form-check-input me-2"
            type="checkbox"
            id={type}
            checked={filters.jobTypes.includes(type)}
            onChange={(e) => handleCheckboxChange(e, "jobTypes")}
          />
          {type}
        </p>
      ))}

      {/* Experience */}
      <h6 className="mt-3">Experience</h6>
      {/* <select
        className="form-select mb-3"
        value={filters.experience}
        onChange={handleSelectChange}
      >
        <option value="">All Levels</option>
        <option>Fresher</option>
        <option>0-1 years</option>
        <option>1-3 years</option>
        <option>3-5 years</option>
        <option>5+ years</option>
      </select> */}

      <select
  className="form-select mb-3"
  value={filters.experience}
  onChange={handleSelectChange}
>
  <option value="">All Levels</option>
  <option value="fresher">Fresher</option>
  <option value="0-1">0-1 years</option>
  <option value="1-3">1-3 years</option>
  <option value="3-5">3-5 years</option>
  <option value="5+">5+ years</option>
</select>

      {/* Location */}
      <h6>Location</h6>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter city"
        value={filters.location}
        onChange={handleLocationChange}
      />

      {/* Skills */}
      <h6>Skills</h6>
      {["React", "Django", "MongoDB", "MySQL", "JavaScript", "HTML", "CSS"].map((skill) => (
        <p key={skill}>
          <input
            className="form-check-input me-2"
            type="checkbox"
            id={skill}
            checked={filters.skills.includes(skill)}
            onChange={(e) => handleCheckboxChange(e, "skills")}
          />
          {skill}
        </p>
      ))}

      {/* Reset Button */}
      <button className="btn btn-outline-secondary w-100 mt-3" onClick={handleReset}>
        🔄 Reset Filters
      </button>
    </div>
  );
};

export default AsideBar;
