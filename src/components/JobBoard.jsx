// import React, { useEffect, useState } from "react";
// import AsideBar from "./AsideBar";
// import JobCard from "./JobCard"; // you’ll display job info here

// const JobBoard = () => {
//   const [allJobs, setAllJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [filters, setFilters] = useState({
//     jobTypes: [],
//     experience: "",
//     location: "",
//     skills: [],
//   });

//   // Fetch jobs once
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/activejobs");
//         const data = await response.json();
//         setAllJobs(data);
//         setFilteredJobs(data); // show all by default
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };
//     fetchJobs();
//   }, []);

//   // Apply filters
//   const applyFilters = () => {
//     const results = allJobs.filter((job) => {
//       const matchType = filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);
//       const matchExp = filters.experience === "" || filters.experience === job.experience;
//       const matchLoc = filters.location === "" || job.location.toLowerCase().includes(filters.location.toLowerCase());
//       const matchSkill =
//         filters.skills.length === 0 || filters.skills.every((skill) => job.skills.includes(skill));
//       return matchType && matchExp && matchLoc && matchSkill;
//     });
//     setFilteredJobs(results);
//   };

//   return (
//     <div className="d-flex">
//       <AsideBar filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
//       <div className="ms-5 mt-5 p-3" style={{ flex: 1 }}>
//         {filteredJobs.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobBoard;


// import React, { useState, useEffect } from "react";
// import AsideBar from "./AsideBar";

// const JobBoard = () => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [filters, setFilters] = useState({
//     jobTypes: [],
//     experience: "",
//     location: "",
//     skills: []
//   });

//   useEffect(() => {
//     fetch("http://localhost:3000/activejobs")
//       .then((res) => res.json())
//       .then((data) => {
//         setJobs(data);
//         setFilteredJobs(data);
//       });
//   }, []);

//   const applyFilters = () => {
//     const result = jobs.filter((job) => {
//       const matchJobType =
//         filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);

//       const matchExperience =
//         filters.experience === "" || filters.experience === job.experience;

//       const matchLocation =
//         filters.location === "" ||
//         job.location.toLowerCase().includes(filters.location.toLowerCase());

//       const matchSkills =
//         filters.skills.length === 0 ||
//         filters.skills.every((skill) => job.skills.includes(skill));

//       return matchJobType && matchExperience && matchLocation && matchSkills;
//     });

//     setFilteredJobs(result);
//   };

//   return (
//     <div className="d-flex">
//       <AsideBar filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
//       <div className="ms-5 p-4" style={{ marginLeft: "270px", width: "100%" }}>
//         <h3>Filtered Jobs</h3>
//         {filteredJobs.map((job) => (
//           <div key={job.id} className="card mb-3 p-3">
//             <h5>{job.title}</h5>
//             <p>{job.company}</p>
//             <p>{job.type} | {job.experience} | {job.location}</p>
//             <p>Skills: {job.skills.join(", ")}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobBoard;


import React, { useState, useEffect } from "react";
import AsideBar from "./AsideBar";

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    jobTypes: [],
    experience: "",
    location: "",
    skills: []
  });

  useEffect(() => {
    fetch("http://localhost:3000/activejobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  const applyFilters = () => {
    const result = jobs.filter((job) => {
      const jobType = job.type?.toLowerCase() || "";
      const experience = job.experience?.toLowerCase() || "";
      const location = job.location?.toLowerCase() || "";
      const jobSkills = job.skills?.map((s) => s.toLowerCase()) || [];

      const matchJobType =
        filters.jobTypes.length === 0 ||
        filters.jobTypes.includes(jobType);

      const matchExperience =
        filters.experience === "" ||
        filters.experience === experience;

      const matchLocation =
        filters.location === "" ||
        location.includes(filters.location.toLowerCase());

      const matchSkills =
        filters.skills.length === 0 ||
        filters.skills.every((skill) => jobSkills.includes(skill.toLowerCase()));

      return matchJobType && matchExperience && matchLocation && matchSkills;
    });

    setFilteredJobs(result);
  };

  return (
    <div className="d-flex">
      <AsideBar filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
      <div className="ms-5 p-4" style={{ marginLeft: "270px", width: "100%" }}>
        <h3>Filtered Jobs</h3>
        {filteredJobs.length === 0 ? (
          <p>No jobs found for selected filters.</p>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="card mb-3 p-3">
              <h5>{job.title}</h5>
              <p>{job.company}</p>
              <p>{job.type} | {job.experience} | {job.location}</p>
              <p>Skills: {job.skills.join(", ")}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobBoard;
