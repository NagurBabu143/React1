
// import './App.css';
// // import MediaControlCard from './Sidebar/audio';
// // import CustomImageList from './Sidebar/image';
// // import MiniDrawer from './Sidebar/Sidebar';
// // import PersistentDrawerLeft from './Sidebar/Sidebar1';
// // import Timer from './Timer';
// // import UserList from './User';

// function App() {
//   return (
//     <div>
//       {/* <Timer/>
//       <UserList/> */}
//       {/* <MiniDrawer/>
//       <PersistentDrawerLeft/> */}
//       {/* <CustomImageList/> */}
//       {/* <MediaControlCard/> */}
//     </div>
//   );
// }

// export default App;




import React from "react";
import Quiz from "./components/Quiz";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;