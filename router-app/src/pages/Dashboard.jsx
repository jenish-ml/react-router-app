import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #ccc', paddingRight: '1rem' }}>
        <h3>Dashboard Menu</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/dashboard">Overview</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </aside>
      <div style={{ flex: 1 }}>
        <Outlet /> 
      </div>
    </div>
  )
}

export default Dashboard
