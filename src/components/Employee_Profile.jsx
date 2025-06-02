import React, { useEffect, useState } from 'react'
// import { User, Id, Mail, Phone, Briefcase, Key } from 'lucide-react';

const Employee_Profile = () => {
  const[userProfile,setUserProfile]=useState([])
  const [foundProfile,setFoundProfile]=useState(null)
  const [isEditing,setIsEditing]=useState(false)
  const [company,setCompany]=useState([])
  const [foundcompany,setFoundcompany]=useState(null)


  let emp_id=localStorage.getItem("Emp_Id")
  console.log("profie_Emp_id",emp_id)
  //____________________________________________________FETCH_ALL_DATA___________________________________
  const fetchProfile=async()=>{
    try {
      const profile_response=await fetch('http://localhost:3000/register');
      const profile_data=await profile_response.json();
      setUserProfile(profile_data)
    } catch (error) {
      console.log("error in fetching",error)
    }
  }
  useEffect(()=>{
    fetchProfile();
  },[])
//___________________________________________________FETCH_ONY_EMP_ID_MATCHED_DATA___________________
  useEffect(()=>{
    if(userProfile.length>0){
    console.log("Profile-->",userProfile)
    const Found_Profile=userProfile.find(Found=>Found.Emp_Id===emp_id)
    setFoundProfile(Found_Profile)
    }
  },[userProfile])//it store only emp_id matched data
  
  //__________________________EDIT_CHANGES_SESSION_START__________________________________________________________


  //_____________________________________Track_Changes________________________________

  const HandleChange=(e)=>{
    const {name,value}=e.target;
    setFoundProfile(prev=>({ ...prev,[name]:value}))
  }
//____________________________________SAVE EDIT____________________________

  // ✅ Renamed to camelCase and marked async so 'await' works
const handleSave = async (e) => {
  e.preventDefault();

  if (!foundProfile) return;

  try {
    // ✅ Awaiting fetch inside async fn
    const res = await fetch(
      `http://localhost:3000/register/${foundProfile.id}`, 
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foundProfile),
      }
    );

    // ✅ Check for non-2xx status
    if (!res.ok) throw new Error("Network response was not ok");

    // ✅ Await the JSON-parsed updated record
    const updated = await res.json();

    // ✅ Update local list with the single updated item
    setUserProfile(prev =>
      prev.map(item => item.id === updated.id ? updated : item)
    );
    
    // explain the above function
    // setUserProfile(prev =>
    //   prev.map(item =>
    //     item.id === updated.id   // ← for each item in the old array…
    //       ? updated              // …if its id matches the updated record, swap it in…
    //       : item                 // …otherwise keep the original item
    //   )
    // );

    // ✅ Update the form’s source of truth
    setFoundProfile(updated);

    // ✅ Exit edit mode
    setIsEditing(false);

    alert("Profile updated!");
  } catch (err) {
    console.error("Error saving profile:", err);
    alert("Save failed.");
  }
};


// ─── Cancel edit ────────────────────────────────────────────
  const handleCancel = () => {
    // reset form values back to original from userProfile array
    const original = userProfile.find(u => u.id === foundProfile.id);
    setFoundProfile(original);
    setIsEditing(false);                           // ✅ NEW: exit edit mode
  };


useEffect(() => {
  const fetchCompany = async () => {
    try {
      const storedCompanyName = localStorage.getItem("company_name");
      const response = await fetch(`http://localhost:3000/company?company_name=${storedCompanyName}`);
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("data--->",data)
      if (data.length > 0) {
        setCompany(data[0]); // Set the first matching company
      } else {
        console.warn("No company data found.");
      }
    } catch (error) {
      console.error("Company fetch failed", error);
    }
    
  };

  fetchCompany(); // Call the async function
}, []);
console.log("company-->",company)


  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '6px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '15px',
  };

  const labelStyle = {
    fontWeight: '500',
    marginBottom: '4px',
    display: 'block',
    color: '#333',
  };

  // ─── Render ────────────────────────────────────────────────
  if (!foundProfile) {
    return <p>Loading profile…</p>;
  }
  return (
    <div className="col-12 col-md-8 col-lg-9">
      {isEditing ? (
        /* EDIT MODE */
        <form onSubmit={handleSave} className="card p-3">
          <h2 className="text-center text-primary">Edit Employee</h2>

          <label>
            First Name:
            <input
              name="First_Name"
              value={foundProfile.First_Name}
              onChange={HandleChange}
              style={inputStyle}
            />
          </label>

          <label>
            Last Name:
            <input
              name="Last_Name"
              value={foundProfile.Last_Name}
              onChange={HandleChange}
              style={inputStyle}
            />
          </label>

          <label>
            Company:
            <input
              name="company"
              type="company"
              // className='disable'
              disabled
              value={foundProfile.company}
              onChange={HandleChange}
              style={inputStyle}
            />
          </label>
          <label>
            Email:
            <input
              name="Email"
              type="email"
              value={foundProfile.Email}
              onChange={HandleChange}
              style={inputStyle}
            />
          </label>

          <label>
            Phone:
            <input
              name="Phone"
              type="tel"
              value={foundProfile.Phone}
              onChange={HandleChange}
              style={inputStyle}
            />
          </label>
         
          <label>Job Role</label>
          <select
            name="Job_role"
            value={foundProfile.Job_role}
            onChange={HandleChange}
            style={inputStyle}
           
          >
            <option value="">Select a role</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>UI/UX Designer</option>
          </select>
         

          {/* add any other fields as needed */}

          <button type="submit" className="btn btn-primary m-2">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      ) : (

        <div className="card p-4 shadow-lg border-0" style={{ borderRadius: "16px", background: "linear-gradient(to bottom right, #ffffff, #f0f4f8)" }}>
        <h2 className="text-center mb-4" style={{ color: "#343a40", fontWeight: "600" }}>Employee Profile</h2>
        
        <div className="row justify-content-center p-3 bg-white rounded shadow-sm">
        {/* Profile Picture */}
        <div className="col-12 text-center mb-4">
          
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s'
            alt="Employee"
            style={{
              borderRadius: "50%",
              width: "130px",
              height: "130px",
              objectFit: "cover",
              border: "5px solid #0dcaf0",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
          <h4 className="mt-3 mb-0" style={{ color: "#343a40", fontWeight: "600" }}>
            {foundProfile.First_Name} {foundProfile.Last_Name}
          </h4>
          <small className="text-muted">{foundProfile.Job_role}</small>
        </div>

        {/* Details and Company Logo */}
        <div className="col-12 col-md-6 mb-4">
          <div className="px-3">
            <p className="mb-2">
              <strong>Company:</strong> <span className="text-muted">{foundProfile.company}</span>
            </p>
            <p className="mb-2">
              <strong>Employee ID:</strong> <span className="text-muted">{foundProfile.Emp_Id}</span>
            </p>
            <p className="mb-2">
              <strong>Email:</strong> <span className="text-muted">{foundProfile.Email}</span>
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> <span className="text-muted">{foundProfile.Phone}</span>
            </p>
            <p className="mb-2">
              <strong>Password:</strong> <span className="text-muted">{foundProfile.Password}</span>
            </p>
          </div>
        </div>

        {/* Company Logo */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          {company?.company_image ? (
            <img
              src={company.company_image}
              alt="Company Logo"
              className="img-fluid"
              style={{
                maxHeight: "80px",
                padding: "10px",
                border: "1px solid #dee2e6",
                borderRadius: "8px",
                background: "#f8f9fa",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
              }}
            />
          ) : (
            <span className="text-muted">No logo available</span>
          )}
        </div>
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary mt-4"
            onClick={() => setIsEditing(true)}
            style={{ padding: "10px 20px", fontWeight: "500", borderRadius: "8px" }}
          >
            Edit Profile
          </button>
        </div>
        </div>

      )}
    </div>
  );

}

export default Employee_Profile
