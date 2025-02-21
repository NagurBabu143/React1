
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
