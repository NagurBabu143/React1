// import { useState } from "react";

// import React from "react";
// import ButtonSizes from "./components/Buttons/Buttons";
// import Checkboxes from "./components/CheckBox/CheckBox";
// import ResponsiveAppBar from "./components/AppBar/AppBar";
// import RecipeReviewCard from "./components/Card/Card";
// import SignupForm from "./components/sample/signup";
// import SigninForm from "./components/sample/signin";
// import ColorTabs from "./components/Tab/Tab";
// // import NotificationsSignInPageError from "./components/sample/signin";
// // import SignUp from "./components/SignUp/SignUp";
// // import SignIn from "./components/SignIn/SignIn";

// const App = () => {
//   // const [currentPage, setCurrentPage] = useState("signup");

//   return (
//     // <div>
//     //   {currentPage === "signup" ? (
//     //     <SignUp onNavigate={() => setCurrentPage("signin")} />
//     //   ) : (
//     //     <SignIn onNavigate={() => setCurrentPage("signup")} />
//     //   )}
//     // </div>
//     // <div>
//     //   <NotificationsSignInPageError/>
//     // </div>
   
//     <div>
//       <SignupForm/>
//       <SigninForm/>
//       <ButtonSizes/>
//       <Checkboxes/>
//       <ResponsiveAppBar/>
//       <RecipeReviewCard/>
//       <ColorTabs/>
//     </div>
//   );
// };

// export default App;




// import React, { useState } from "react";

// import { Container, Typography } from "@mui/material";
// import JobList from "./components/Job/JobList";
// import ApplicationTracker from "./components/Job/ApplicationTracker";
// import ApplyForm from "./components/Job/ApplyForm";

// function App() {
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleApply = (job) => {
//     setSelectedJob(job);
//     setOpen(true);
//   };

//   const handleFormSubmit = (job) => {
//     if (!appliedJobs.find((j) => j.id === job.id)) {
//       setAppliedJobs([...appliedJobs, job]);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h3" textAlign="center" marginBottom={3}>Job Portal Dashboard</Typography>
//       <JobList onApply={handleApply} />
//       <ApplicationTracker appliedJobs={appliedJobs} />
//       <ApplyForm open={open} handleClose={() => setOpen(false)} job={selectedJob} onApply={handleFormSubmit} />
//     </Container>
//   );
// }

// export default App;



import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import AttendanceList from "./components/Attendance/Attendance/AttendanceList";
import './components/Attendance/styles/styles.css'
function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Attendance Management System
        </Typography>
        <AttendanceList />
      </Paper>
    </Container>
  );
}

export default App;


