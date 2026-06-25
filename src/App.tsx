import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router";
import Sidebar from "./sidebar";
import Prescription from "./prescription";
import Inventory from "./inventory";
import Reports from "./reports";
import Settings from "./settings";  
import Dashboard from "./dashboard";
// import Profile from "./profile";



function App() {
  const [showModal, setShowModal] = useState(false);

  const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className = "app-layout">
        < Sidebar onProfileClick={() => setShowModal(true)} />

        <main className = "main-content">
          <Outlet />
        </main>
        {showModal && (
          <>
            <div className="overlay" onClick={() => setShowModal(false)}></div>
            <div className="modal">
              <h1>UserName</h1>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </>
        )};
      </div>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "prescriptions", element: <Prescription /> },
      { path: "inventory", element: <Inventory /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> },
      // { path: "profile", element: <Profile /> }
    ],
  },
  ]);

  return <RouterProvider router = {router} />;
};


export default App;