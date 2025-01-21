import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Job from "./pages/Job";
import JobListing from "./pages/JobListing";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/MyJobs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/jobs" element={<JobListing/>}/>
          <Route path="/onboarding" element={<Onboarding/>}/>
          <Route path="/job/:id" element={<Job/>}/>
          <Route path="/post-job" element={<PostJob/>}/>
          <Route path="/saved-jobs" element={<SavedJobs/>}/>
          <Route path="/my-jobs" element={<MyJobs/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
