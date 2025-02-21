
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Dashboard</h3>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#me">Me</a></li>
        <li><a href="#Inbox">Inbox</a></li>
        <li><a href="#My Team">My Team</a></li>
        <li><a href="#My Finances">My Finances</a></li>
        <li><a href="#Org">Org</a></li>
        <li><a href="#Engage">Engage</a></li>

      </ul>

    
    </aside>
  );
};

export default Sidebar;
