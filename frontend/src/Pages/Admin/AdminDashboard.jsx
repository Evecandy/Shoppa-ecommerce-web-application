import Sidebar from '../../Components/Sidebar';
import './AdminDashboard.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function AdminDashboard() {
  const data = [
    {
      name: 'products',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'customers',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'orders',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  

  return (
    
       <ResponsiveContainer >
        <LineChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="black" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>  
     
    
  )
}

export default AdminDashboard
