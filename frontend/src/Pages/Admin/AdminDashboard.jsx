import Sidebar from '../../Components/Sidebar';
import Products from "../Products"
import './AdminDashboard.css';
function AdminDashboard() {
  

  return (
    <div className='dashboard'>
     <Sidebar/>
     <Products/>
    </div>
  )
}

export default AdminDashboard
