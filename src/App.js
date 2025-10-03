import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Patient from "./pages/Patient";
import Doctor from "./pages/doctor/List";
import Role from "./pages/Role";
import Staff from "./pages/Staff";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected routes inside AdminLayout */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/user" element={<Patient />} />
                  <Route path="/doctor" element={<Doctor />} />
                  <Route path="/role" element={<Role />} />
                  <Route path="/staff" element={<Staff />} />
                </Routes>
              </AdminLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
