import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      
      <section className="welcome-section">
        <h2>Welcome, Shaik NagurBabu!</h2>
        <p>Here's an overview of your account and recent activities.</p>
      </section>

      
      <section className="stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>1,530</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p>Rs.74,300</p>
        </div>
        <div className="stat-card">
          <h3>Pending Orders</h3>
          <p>78</p>
        </div>
        <div className="stat-card">
          <h3>Completed Orders</h3>
          <p>98</p>
        </div>
        <div className="stat-card">
          <h3>Total Loss</h3>
          <p>$0</p>
        </div>
      </section>

      
      <section className="charts">
        <div className="table-section">
          <h4>Top Performing Products</h4>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mobile</td>
                <td>1,200</td>
                <td>RS.24,000</td>
              </tr>
              <tr>
                <td>Laptop</td>
                <td>980</td>
                <td>Rs.19,600</td>
              </tr>
              <tr>
                <td>Cooler</td>
                <td>750</td>
                <td>Rs.15,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      
      <section className="user-feedback">
        <h4>User Feedback</h4>
        <ul>
          <li>"Great service!" - Nagur</li>
          <li>"Fast delivery and excellent products." - Babu</li>
          <li>"Customer support was very helpful." - Shaik</li>
        </ul>
      </section>

      
      <section className="recent-activity">
        <h4>Recent Activities</h4>
        <ul>
          <li>Order #1234 completed on 12/28/2024.</li>
          <li>New user registration: Shaik NagurBabu.</li>
          <li>Product "Tablet" added to inventory.</li>
        </ul>
      </section>

      
      <section className="team-performance">
        <h4>Team Performance</h4>
        <div className="team-card">
          <h5>Sales Team</h5>
          <p>Target Achieved: 90%</p>
        </div>
        <div className="team-card">
          <h5>Support Team</h5>
          <p>Tickets Resolved: 250</p>
        </div>
      </section>

  
      <section className="news-updates">
        <h4>News and Updates</h4>
        <ul>
          <li>New feature "Analytics Dashboard" released.</li>
          <li>Holiday sale starts from 01/01/2025.</li>
          <li>Office closed on 01/02/2025 for maintenance.</li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
