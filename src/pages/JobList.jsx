// import React, { useState, useEffect } from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import SidebarFilter from '../components/SidebarFilter';
// import JobCardList from '../components/JobCardList';
// import Pagination from '../components/Pages';
// import JobImagePanel from '../components/JobImage';
// import JobSearchBar from '../components/SearchBar';

// const JobList = () => {
//   const [jobs, setJobs] = useState([]); // All jobs from API
//   const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
//   const [searchTerm, setSearchTerm] = useState(''); // Stores user's search input

  

//   // Fetch jobs from API (only once when component loads)
//   const fetchJobs = async () => {
//     try {
//       let response = await fetch("http://localhost:3000/activejobs");
//       let data = await response.json();
//       setJobs(data); // Save jobs to state
//     } catch (err) {
//       console.log("Error fetching jobs:", err.name);
//     }
//   };

//   // Fetch jobs once on initial render
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // Show newest jobs first by reversing
//   const reversedJobs = jobs.slice().reverse();


//   // Filter jobs based on search term entered by user
//   const filteredJobs = reversedJobs.filter((job) => {
//     // Convert job title and location to lowercase for case-insensitive matching
//     const jobTitle = job.title.toLowerCase();
//     const jobLocation = job.location.toLowerCase();
//     const companyname=job.company.toLowerCase();
//     const job_skills=job.skills.join('').toLowerCase(); // we are converting array to string using join()
//     const search = searchTerm.toLowerCase();

//     // Check if search term is included in either the title or location
//     return jobTitle.includes(search) || jobLocation.includes(search) || companyname.includes(search) || job_skills.includes(search);
//   });


//     // Pagination logic

//   const jobsPerPage = 3; // Number of jobs per page
//   // Calculate the index of the last job to display on the current page
//   const indexOfLastJob = currentPage * jobsPerPage; 
//   // Example: if currentPage = 2 and jobsPerPage = 3, indexOfLastJob = 6

//   // Calculate the index of the first job to display on the current page
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage; 
//   // Example: 6 - 3 = 3 → jobs from index 3 to 5 will be shown

//   // Get the jobs for the current page by slicing the filtered job list
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob); 
//   // Only the jobs for the current page are shown in the UI

//   // Calculate the total number of pages needed to show all filtered jobs
//     // const filteredJobslenth=filteredJobs.length
//     // console.log(filteredJobslenth)--> debuge

//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage); 
//   // Math.ceil() rounds up to ensure even the last few jobs have a page

//   // Function to handle page change when user clicks a page number
//   const paginate = (pageNumber) => {
//     // Check if the requested page is within valid range
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber); // Update the current page number
//     }
//   };


//   return (
//     <>
//       <NavBar />

//       <div className="container-fluid pt-5" style={{ backgroundColor: "#f8f9fa" }}>
//         <div className="container my-5">
//           <h2 className="text-center mb-4">Available Jobs</h2>

//           {/* 🔍 Search Bar */}
//           <div className="row justify-content-center mb-4">
//             <div className="col-12 col-md-8">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="🔍 Search by Job Title,Location,Skills & Company_Name..."
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value); // Update search term
//                   setCurrentPage(1); // Reset to first page on new search
//                 }}
//               />
//             </div>
//           </div>


//           <div className="row">
//             {/* Sidebar filter */}
//             <div className="col-12 col-md-3 mb-4  d-none d-md-block">
//               <SidebarFilter />
//             </div>

//             {/* Job cards and pagination */}
//             <div className="col-12 col-md-6">
//               <JobCardList jobs={currentJobs} />


//               {filteredJobs.length>jobsPerPage &&(
//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   paginate={paginate}
//                 />
//               )}
//             </div>

//             <div className="col-12 col-md-3">
//                <img
//                 src="https://cdn.pixabay.com/photo/2017/12/05/15/43/jobs-2999575_1280.jpg"
//                 alt="Jobs"
//                 className="img-fluid shadow rounded sticky-top"
//                 style={{ height: '100vh', objectFit: 'cover' }}
//               />
//             </div>

//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default JobList;



// import React, { useState, useEffect } from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// // import SidebarFilter from '../components/SidebarFilter';
// import AsideBar from '../components/AsideBar';
// import JobCardList from '../components/JobCardList';
// import Pagination from '../components/Pages';

// const JobList = () => {
//   const [jobs, setJobs] = useState([]); // All jobs from API
//   const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
//   const [searchTerm, setSearchTerm] = useState(''); // Stores user's search input

//   // Filters for sidebar
//   const [filters, setFilters] = useState({
//     type: '',        // e.g., Full-time, Part-time
//     location: '',    // e.g., Remote, Hyderabad
//     experience: ''   // e.g., 0-1 years, 2-4 years
//   });

//   // Fetch jobs from API once component loads
//   const fetchJobs = async () => {
//     try {
//       let response = await fetch("http://localhost:3000/activejobs");
//       let data = await response.json();
//       setJobs(data);
//     } catch (err) {
//       console.log("Error fetching jobs:", err.name);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // Show newest jobs first
//   const reversedJobs = jobs.slice().reverse();

//   // Filter jobs by search term and filters
//   const filteredJobs = reversedJobs.filter((job) => {
//     const jobTitle = job.title.toLowerCase();
//     const jobLocation = job.location.toLowerCase();
//     const companyname = job.company.toLowerCase();
//     const job_skills = job.skills.join('').toLowerCase();
//     const search = searchTerm.toLowerCase();

//     // Search match
//     const matchesSearch = 
//       jobTitle.includes(search) || 
//       jobLocation.includes(search) || 
//       companyname.includes(search) || 
//       job_skills.includes(search);

//   //   // Sidebar filters match (if filter is empty, match all)
//   //   const matchesType = filters.type ? job.type === filters.type : true;
//   //   const matchesLocation = filters.location ? job.location === filters.location : true;
//   //   const matchesExperience = filters.experience ? job.experience === filters.experience : true;

//   //   return matchesSearch && matchesType && matchesLocation && matchesExperience;
//   // });

//    function handleFilterChange(newFilters) {
//     setFilters(newFilters);
//     console.log("Updated filters:", newFilters); // ✅ Optional debug
//   }

//   // Pagination logic
//   const jobsPerPage = 3;
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

//   // Handle page change
//   const paginate = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <>
//       <NavBar />

//       <div className="container-fluid pt-5" style={{ backgroundColor: "#f8f9fa" }}>
//         <div className="container my-5">
//           <h2 className="text-center mb-4">Available Jobs</h2>

//           {/* Search Bar */}
//           <div className="row justify-content-center mb-4">
//             <div className="col-12 col-md-8">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="🔍 Search by Job Title, Location, Skills & Company Name..."
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setCurrentPage(1);
//                 }}
//               />
//             </div>
//           </div>

//           <div className="row">
//             {/* Sidebar filter */}
//             <div className="col-12 col-md-3 mb-4 d-none d-md-block">
//               <AsideBar onFilterChange={handleFilterChange} />
//             </div>

//             {/* Job cards and pagination */}
//             <div className="col-12 col-md-6">
//               <JobCardList jobs={currentJobs} />

//               {filteredJobs.length > jobsPerPage && (
//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   paginate={paginate}
//                 />
//               )}
//             </div>

//             {/* Image panel */}
//             <div className="col-12 col-md-3">
//               <img
//                 src="https://cdn.pixabay.com/photo/2017/12/05/15/43/jobs-2999575_1280.jpg"
//                 alt="Jobs"
//                 className="img-fluid shadow rounded sticky-top"
//                 style={{ height: '100vh', objectFit: 'cover' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default JobList;


// import React, { useState, useEffect } from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import AsideBar from '../components/AsideBar';
// import JobCardList from '../components/JobCardList';
// import Pagination from '../components/Pages';

// const JobList = () => {
//   const [jobs, setJobs] = useState([]); // All jobs
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');

//   const [filters, setFilters] = useState({
//     jobTypes: [],        // e.g., ["fullTime", "partTime"]
//     location: '',        // e.g., Hyderabad
//     experience: '',      // e.g., 0-1 years
//     skills: []           // e.g., ["react", "django"]
//   });

//   // Fetch jobs from local server
//   const fetchJobs = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/activejobs");
//       const data = await response.json();
//       setJobs(data);
//     } catch (err) {
//       console.log("Error fetching jobs:", err);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // ✅ Define here
//   function handleFilterChange(newFilters) {
//     setFilters(newFilters);
//     setCurrentPage(1); // reset to page 1 on filter change
//     console.log("Updated filters:", newFilters);
//   }

//   // Reverse for newest first
//   const reversedJobs = jobs.slice().reverse();

//   // ✅ Filter logic
//   const filteredJobs = reversedJobs.filter((job) => {
//     const search = searchTerm.toLowerCase();
//     const jobTitle = job.title.toLowerCase();
//     const jobLocation = job.location.toLowerCase();
//     const company = job.company.toLowerCase();
//     const jobSkills = job.skills.map((s) => s.toLowerCase());

//     const matchesSearch =
//       jobTitle.includes(search) ||
//       jobLocation.includes(search) ||
//       company.includes(search) ||
//       jobSkills.some(skill => skill.includes(search));

//     const matchesType =
//       filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);

//     const matchesLocation =
//       filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase());

//     const matchesExperience =
//       filters.experience === '' || job.experience === filters.experience;

//     // const matchesSkills =
//     //   filters.skills.length === 0 || filters.skills.every(skill => jobSkills.includes(skill));

//  const matchesSkills = (jobs, selectedSkills) => {
//   if (!selectedSkills || selectedSkills.length === 0) return jobs; // no skills selected, return all jobs

//   return jobs.filter(job =>
//     job.skills.some(jobSkill =>
//       selectedSkills.some(selectedSkill =>
//         jobSkill.toLowerCase().trim() === selectedSkill.toLowerCase().trim()
//       )
//     )
//   );
// };

//     return matchesSearch && matchesType && matchesLocation && matchesExperience && matchesSkills;
//   });

//   // Pagination logic
//   const jobsPerPage = 3;
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

//   // Page change
//   const paginate = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <>
//       <NavBar />

//       <div className="container-fluid pt-5" style={{ backgroundColor: "#f8f9fa" }}>
//         <div className="container my-5">
//           <h2 className="text-center mb-4">Available Jobs</h2>

//           {/* 🔍 Search bar */}
//           <div className="row justify-content-center mb-4">
//             <div className="col-12 col-md-8">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="🔍 Search by Job Title, Location, Skills & Company Name..."
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setCurrentPage(1);
//                 }}
//               />
//             </div>
//           </div>

//           <div className="row">
//             {/* Sidebar Filter */}
//             <div className="col-12 col-md-3 mb-4 d-none d-md-block">
//               <AsideBar onFilterChange={handleFilterChange} />
//             </div>

//             {/* Job Cards */}
//             <div className="col-12 col-md-6">
//               <JobCardList jobs={currentJobs} />

//               {filteredJobs.length > jobsPerPage && (
//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   paginate={paginate}
//                 />
//               )}
//             </div>

//             {/* Image Panel */}
//             <div className="col-12 col-md-3">
//               <img
//                 src="https://cdn.pixabay.com/photo/2017/12/05/15/43/jobs-2999575_1280.jpg"
//                 alt="Jobs"
//                 className="img-fluid shadow rounded sticky-top"
//                 style={{ height: '100vh', objectFit: 'cover' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default JobList;



// import React, { useState, useEffect } from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import AsideBar from '../components/AsideBar';
// import JobCardList from '../components/JobCardList';
// import Pagination from '../components/Pages';

// const JobList = () => {
//   const [jobs, setJobs] = useState([]); // All jobs
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');

//   const [filters, setFilters] = useState({
//     jobTypes: [],        // e.g., ["Full-time", "Part-time"]
//     location: '',        // e.g., Hyderabad
//     experience: '',      // e.g., "0-1 years"
//     skills: []           // e.g., ["React", "Django"]
//   });

//   // Fetch jobs from local server
//   const fetchJobs = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/activejobs");
//       const data = await response.json();
//       setJobs(data);
//     } catch (err) {
//       console.log("Error fetching jobs:", err);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // Update filters on filter change from AsideBar
//   function handleFilterChange(newFilters) {
//     setFilters(newFilters);
//     setCurrentPage(1); // reset to page 1 on filter change
//     console.log("Updated filters:", newFilters);
//   }

//   // Reverse jobs to show newest first
//   const reversedJobs = jobs.slice().reverse();

//   // Filter logic
//   const filteredJobs = reversedJobs.filter((job) => {
//     const search = searchTerm.toLowerCase();
//     const jobTitle = job.title.toLowerCase();
//     const jobLocation = job.location.toLowerCase();
//     const company = job.company.toLowerCase();
//     const jobSkills = job.skills.map((s) => s.toLowerCase());

//     const matchesSearch =
//       jobTitle.includes(search) ||
//       jobLocation.includes(search) ||
//       company.includes(search) ||
//       jobSkills.some(skill => skill.includes(search));

//     const matchesType =
//       filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);

//     const matchesLocation =
//       filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase());

//     // const matchesExperience =
//     //   filters.experience === '' || job.experience === filters.experience;

//     // Helper: Convert experience string to number of years
// function parseExperience(exp) {
//   if (!exp) return null;
//   exp = exp.toLowerCase();

//   if (exp === "fresher") return 0;
//   if (exp === "0 years" || exp === "0 year") return 0;

//   // Extract number (including decimals) from string like "1 year", "2.5 years"
//   const match = exp.match(/(\d+(\.\d+)?)/);
//   if (match) {
//     return parseFloat(match[1]);
//   }

//   return null; // fallback
// }

// // Helper: Check if job experience fits filter range
// function experienceMatchesFilter(jobExpStr, filterExp) {
//   const jobExp = parseExperience(jobExpStr);

//   if (jobExp === null) return false;

//   switch (filterExp) {
//     case "":
//       return true; // no filter, match all
//     case "fresher":
//       return jobExp === 0;
//     case "0-1":
//       return jobExp >= 0 && jobExp <= 1;
//     case "1-3":
//       return jobExp >= 1 && jobExp <= 3;
//     case "3-5":
//       return jobExp >= 3 && jobExp <= 5;
//     case "5+":
//       return jobExp >= 5;
//     default:
//       return false;
//   }
// }


//     // Skills filter logic
//     const matchesSkills =
//       filters.skills.length === 0 || // no skills filter applied
//       filters.skills.some(selectedSkill =>
//         jobSkills.includes(selectedSkill.toLowerCase())
//       );

//     return matchesSearch && matchesType && matchesLocation && matchesExperience && matchesSkills;
//   });

//   // Pagination logic
//   const jobsPerPage = 3;
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

//   // Page change handler
//   const paginate = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <>
//       <NavBar />

//       <div className="container-fluid pt-5" style={{ backgroundColor: "#f8f9fa" }}>
//         <div className="container my-5">
//           <h2 className="text-center mb-4">Available Jobs</h2>

//           {/* Search bar */}
//           <div className="row justify-content-center mb-4">
//             <div className="col-12 col-md-8">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="🔍 Search by Job Title, Location, Skills & Company Name..."
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setCurrentPage(1);
//                 }}
//               />
//             </div>
//           </div>

//           <div className="row">
//             {/* Sidebar Filter */}
//             <div className="col-12 col-md-3 mb-4 d-none d-md-block">
//               <AsideBar onFilterChange={handleFilterChange} />
//             </div>

//             {/* Job Cards */}
//             <div className="col-12 col-md-6">
//               <JobCardList jobs={currentJobs} />

//               {filteredJobs.length > jobsPerPage && (
//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   paginate={paginate}
//                 />
//               )}
//             </div>

//             {/* Image Panel */}
//             <div className="col-12 col-md-3">
//               <img
//                 src="https://cdn.pixabay.com/photo/2017/12/05/15/43/jobs-2999575_1280.jpg"
//                 alt="Jobs"
//                 className="img-fluid shadow rounded sticky-top"
//                 style={{ height: '100vh', objectFit: 'cover' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default JobList;


import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AsideBar from '../components/AsideBar';
import JobCardList from '../components/JobCardList';
import Pagination from '../components/Pages';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    jobTypes: [],
    location: '',
    experience: '',
    skills: []
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:3000/activejobs");
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      console.log("Error fetching jobs:", err);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    console.log("Updated filters:", newFilters);
  };

  const reversedJobs = jobs.slice().reverse();

  // Parse experience string to number
  const parseExperience = (exp) => {
    if (!exp) return null;
    exp = exp.toLowerCase();
    if (exp === "fresher" || exp === "0 years" || exp === "0 year") return 0;
    const match = exp.match(/(\d+(\.\d+)?)/);
    return match ? parseFloat(match[1]) : null;
  };

  // Match experience based on selected filter
  const experienceMatchesFilter = (jobExpStr, filterExp) => {
    const jobExp = parseExperience(jobExpStr);
    if (jobExp === null) return false;

    switch (filterExp) {
      case "":
        return true;
      case "fresher":
        return jobExp === 0;
      case "0-1":
        return jobExp >= 0 && jobExp <= 1;
      case "1-3":
        return jobExp >= 1 && jobExp <= 3;
      case "3-5":
        return jobExp >= 3 && jobExp <= 5;
      case "5+":
        return jobExp >= 5;
      default:
        return false;
    }
  };

  const filteredJobs = reversedJobs.filter((job) => {
    const search = searchTerm.toLowerCase();
    const jobTitle = job.title.toLowerCase();
    const jobLocation = job.location.toLowerCase();
    const company = job.company.toLowerCase();
    const jobSkills = job.skills.map((s) => s.toLowerCase());

    const matchesSearch =
      jobTitle.includes(search) ||
      jobLocation.includes(search) ||
      company.includes(search) ||
      jobSkills.some(skill => skill.includes(search));

    const matchesType =
      filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);

    const matchesLocation =
      filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase());

    const matchesExperience =
      filters.experience === '' || experienceMatchesFilter(job.experience, filters.experience);

    const matchesSkills =
      filters.skills.length === 0 ||
      filters.skills.some(selectedSkill =>
        jobSkills.includes(selectedSkill.toLowerCase())
      );

    return matchesSearch && matchesType && matchesLocation && matchesExperience && matchesSkills;
  });

  const jobsPerPage = 3;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <NavBar />

      <div className="container-fluid pt-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container my-5">
          <h2 className="text-center mb-4">Available Jobs</h2>

          {/* Search bar */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="🔍 Search by Job Title, Location, Skills & Company Name..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="row">
            {/* Sidebar Filter */}
            <div className="col-12 col-md-3 mb-4 d-none d-md-block">
              <AsideBar onFilterChange={handleFilterChange} />
            </div>

            {/* Job Cards */}
            <div className="col-12 col-md-6">
              <JobCardList jobs={currentJobs} />

              {filteredJobs.length > jobsPerPage && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  paginate={paginate}
                />
              )}
            </div>

            {/* Image Panel */}
            <div className="col-12 col-md-3">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/05/15/43/jobs-2999575_1280.jpg"
                alt="Jobs"
                className="img-fluid shadow rounded sticky-top"
                style={{ height: '100vh', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default JobList;
