import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Sidebar from "../../Components/Sidebar";
import "./Admin.css"
import Customers from "./Customers";
import Orders from "./Orders";
import ProductsAdmin from "./ProductsAdmin";

function Admin() {
    return (
        <div id="admin-container">
        

          <Sidebar/>
          <main>
            <Routes>
              <Route path="/" element={< AdminDashboard/>} />
              <Route path="/customers" element={< Customers/>}/>
              <Route path="/orders" element={< Orders/>}/>
              <Route path="/products" element={< ProductsAdmin/>}/>

            </Routes>
          </main>
          
        
      </div>
    )
}

export default Admin;