// import React, { useState, useEffect } from 'react';
// import '../css/JobListings.css';

// const JobListings = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // In a real application, replace this with your API call
//     // Example: fetch('/api/jobs').then(res => res.json()).then(data => setJobs(data))
//     const fetchJobs = async () => {
//       try {
//         setLoading(true);
//         // Simulating API call with timeout
//         setTimeout(() => {
//           // Mock data based on your screenshot
//           const mockJobs = [
//             {
//               id: 1,
//               title: "Intern - Software Developer",
//               company: "WEX",
//               location: "Chicago, IL",
//               benefits: "1 benefit",
//               logo: "https://media.licdn.com/dms/image/C4D0BAQGLJJLsK0osyA/company-logo_100_100/0/1630470471994?e=1716422400&v=beta&t=YN8YDSfsXI29_IQctJ8H_6Y1gRlFwW3WfNXZ-Q336-Q",
//               alumni: "6 school alumni work here",
//               promoted: true,
//               datePosted: "2 weeks ago"
//             },
//             {
//               id: 2,
//               title: "Ruby on Rails Software Engineer Intern",
//               company: "G2",
//               location: "Chicago, IL",
//               logo: "https://media.licdn.com/dms/image/C4E0BAQHm5bYK6emQSg/company-logo_100_100/0/1630577060658?e=1716422400&v=beta&t=FE_SSnh0QRKkRTU3Kc_NHS7B2H-Q9om_5MpJNdX42N0",
//               alumni: "1 school alum works here",
//               promoted: true
//             },
//             {
//               id: 3,
//               title: "Software Engineering Intern (Remote in Colorado)",
//               company: "TieTalent",
//               location: "Colorado, United States (Remote)",
//               logo: "https://media.licdn.com/dms/image/C4D0BAQExj999_X3zAg/company-logo_100_100/0/1630585936854?e=1716422400&v=beta&t=HqZCwuTNoQdPSMFNTMEQFpjrJCKcGDNXJKUdmcQUDjE",
//               datePosted: "1 week ago"
//             },
//             {
//               id: 4,
//               title: "Software Development Intern - Summer 2025",
//               company: "CACI International Inc",
//               location: "Chantilly, VA (Hybrid)",
//               logo: "https://media.licdn.com/dms/image/C4D0BAQHqcWGZ1F9fQw/company-logo_100_100/0/1630575517952?e=1716422400&v=beta&t=9KCpwQQ9MzhvZnWc2Jzld5HkFiPTxnAyVLHxI4r0Wt8",
//               alumni: "16 school alumni work here",
//               promoted: true
//             },
//             {
//               id: 5,
//               title: "Software Engineer Intern",
//               company: "Integral Ad Science",
//               location: "United States (Remote)",
//               logo: "https://media.licdn.com/dms/image/C4E0BAQEiMRFXHYQwdQ/company-logo_100_100/0/1656697517798?e=1716422400&v=beta&t=uYa9kJ8rUCysj2K4vu0o4NJY-2D4-y-JMDg2-8VrQKM",
//               alumni: "2 school alumni work here",
//               promoted: true
//             },
//             {
//               id: 6,
//               title: "Software Engineer Intern",
//               company: "Starburst",
//               location: "Boston, MA (Remote)",
//               logo: "https://media.licdn.com/dms/image/C4D0BAQHxsFze11_7Ow/company-logo_100_100/0/1630580857097?e=1716422400&v=beta&t=7LCUPSyJ0lJ2LFYJOXGDgvASRXrUQmWbZ3_3UoYAJu0",
//               alumni: "1 school alum works here",
//               promoted: true
//             },
//             {
//               id: 7,
//               title: "Software Engineering Intern (Remote in California)",
//               company: "Rocket Lawyer",
//               location: "California, United States (Remote)",
//               logo: "https://media.licdn.com/dms/image/C4E0BAQGglTY32kGUjw/company-logo_100_100/0/1656694686402?e=1716422400&v=beta&t=k0VkGFfFc-9ZVDM_LhXha-HuF8C_NO9ezIB82lYDYHs",
//               alumni: "1 school alum works here",
//               promoted: true
//             }
//           ];
//           setJobs(mockJobs);
//           setLoading(false);
//         }, 1000);
//       } catch (err) {
//         setError("Failed to fetch job listings. Please try again later.");
//         setLoading(false);
//         console.error("Error fetching jobs:", err);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleDismissJob = (jobId) => {
//     setJobs(jobs.filter(job => job.id !== jobId));
//   };

//   const handleFeedback = (isPositive) => {
//     // In a real app, you would send this feedback to your backend
//     console.log(`User feedback: ${isPositive ? 'positive' : 'negative'}`);
//     // You could also use this to refine job recommendations
//   };

//   if (loading) {
//     return <div className="job-listings-loading">Loading job listings...</div>;
//   }

//   if (error) {
//     return <div className="job-listings-error">{error}</div>;
//   }

//   return (
//     <div className="job-listings-container">
//       <div className="job-listings-header">
//         <h2>More jobs for you</h2>
//         <p>Based on your profile, preferences, and activity like applies, searches, and saves</p>
//       </div>

//       <div className="job-listings">
//         {jobs.map((job) => (
//           <div className="job-card" key={job.id}>
//             <div className="job-content">
//               <div className="job-logo">
//                 <img src={job.logo} alt={`${job.company} logo`} />
//               </div>
//               <div className="job-details">
//                 <div className="job-title-container">
//                   <h3 className="job-title">
//                     <a href="#">{job.title}</a>
//                     <span className="job-verified-icon">
//                       <i className="fas fa-check-circle"></i>
//                     </span>
//                   </h3>
//                   <button 
//                     className="dismiss-button"
//                     onClick={() => handleDismissJob(job.id)}
//                   >
//                     <i className="fas fa-times"></i>
//                   </button>
//                 </div>
//                 <p className="company-name">{job.company} · {job.location}</p>
//                 {job.benefits && <p className="job-benefits">{job.benefits}</p>}
                
//                 {job.alumni && (
//                   <div className="alumni-info">
//                     <span className="school-badge">SB</span>
//                     <span className="alumni-text">{job.alumni}</span>
//                   </div>
//                 )}
                
//                 {job.datePosted && <p className="date-posted">{job.datePosted}</p>}
                
//                 {job.promoted && <p className="promoted-label">Promoted</p>}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="feedback-section">
//         <p>Are these jobs right for you?</p>
//         <p className="feedback-subtitle">We will use your feedback to improve recommendations</p>
//         <div className="feedback-buttons">
//           <button 
//             className="feedback-button negative" 
//             onClick={() => handleFeedback(false)}
//           >
//             <i className="fas fa-thumbs-down"></i>
//           </button>
//           <button 
//             className="feedback-button positive" 
//             onClick={() => handleFeedback(true)}
//           >
//             <i className="fas fa-thumbs-up"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobListings;