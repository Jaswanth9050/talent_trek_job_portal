import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Application = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const [jobInfo, setJobInfo] = useState({ title: '', company: '' });

  // Fetch job info
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_DB_SERVER_ACTIVEJOB);
        const data = await response.json();
        const foundJob = data.find((job) => job.id === id);
        if (foundJob) {
          setJobInfo({ title: foundJob.title, company: foundJob.company });
        } else {
          console.log("Job not found!");
        }
      } catch (error) {
        console.error("Failed to fetch job data:", error);
      }
    };
    fetchJob();
  }, [id]);

  // Handle form input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      title: jobInfo.title,
      company_name: jobInfo.company
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,       // ✅ Replace with your EmailJS Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,      // ✅ Replace with your EmailJS Template ID
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY        // ✅ Replace with your EmailJS Public Key
    )
    .then((res) => {
      alert("Application submitted successfully!\n Thank You");
      console.log("EmailJS success:", res);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
      });

      navigate('/');
    })
    .catch((err) => {
      console.error("EmailJS failed:", err);
      alert("Failed to send confirmation email.");
    });
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <div className="mb-4 text-center">
          <h2 className="text-primary">{jobInfo.title}</h2>
          <p className="text-secondary fs-5">
            <i className="bi bi-building me-2"></i>{jobInfo.company}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Resume</label>
            <input
              type="file"
              name="resume"
              className="form-control"
              onChange={handleChange}
              required
              accept=".pdf,.doc,.docx"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Cover Letter</label>
            <textarea
              name="coverLetter"
              className="form-control"
              rows="5"
              value={formData.coverLetter}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Application;
