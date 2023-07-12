
import {Link} from 'react-router-dom'


const Sidebar = ({children}) => {
  const menuItem=[
    {
      path:"/admindashboard",
      name:"Dashboard",
      
    },
    {
      path:"/customers",
      name:" Customers",
      
    },
    {
      path:"/orders",
      name:"Orders",
      
    },{
      path:"/products",
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