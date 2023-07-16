
import {Link} from 'react-router-dom'


const Sidebar = ({children}) => {
  const menuItem=[
    {
      path:"/admin/dashboard",
      name:"Dashboard",
      
    },
    {
      path:"/admin/customers",
      name:" Customers",
      
    },
    {
      path:"/admin/orders",
      name:"Orders",
      
    },{
      path:"/admin/products",
      name:"Products",
      
    }
  ]
  
  return (
    <div className="sidebar-container">
      <div className='sidebar'>
        <div className='top-section'>
          <h1 className='logo'>Shoppa</h1>

        </div>
        {
          menuItem.map((item,index)=>(
            <Link to={item.path} key={index} className='link'>
              <div>
              <div className="name">{item.name}</div>
            
              </div>
             
            </Link>
          ))
        }



      </div>
      <main>{children}</main>
      
      
    </div>
  )
}

export default Sidebar