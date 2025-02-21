import './App.css';
import Test from './Components/Test/Test';
import Hello from './Components/Hello/Hello';
import Nagur from './Components/Nagur/Nagur';
function App() {
  return (
    <div>
      <Nagur/>
       <Test/>
      <Hello/>
  
      
      <header>
        <h1>Shaik NagurBabu</h1>
        <p>Web Developer </p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with experience in creating dynamic,
          responsive, and visually appealing websites. My goal is to leverage
          technology to solve real-world problems and make a meaningful impact.
          I specialize in front-end development but am equally comfortable with
          back-end technologies.
        </p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Front-End: React, JavaScript, HTML, CSS</li>
          <li>Back-End: Node.js</li>
          <li>Tools: Webpack, VS Code</li>
          
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <h2>Portfolio Website:</h2>
            <p>
              A personal portfolio showcasing my skills, projects, and contact
              information.
            </p>
            <a href="https://Portfolio.com"> View Project</a>
          </li>
          <li>
            <h2>E-commerce Platform:</h2>
            <p>
              A fully functional e-commerce site with product listings, a
              shopping cart, and secure payment integration.
            </p>
            <a href="https://commerce.com"> View Project</a>
          </li>
          <li>
            <h2>Blog Platform:</h2>
            <p>
              
              A blogging application where users can write, edit, and share
              articles.
            </p>
            <a href="https://Blog1.com"> View Project</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Hobbies & Interests</h2>
        <p>
          When I'm not coding, I enjoy exploring new technologies, reading
          books, and traveling to new places. I also have a keen interest in
          photography and love capturing moments that tell a story.
        </p>
      </section>
      <section>
        <h2>Contact Information</h2>
        <table >
          <thead>
            <tr>
              <th>S.No</th>
              <th>Names</th>
              <th>Age</th>
              <th>Mobile No</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>NagurBabu</td>
              <td>20</td>
              <td>973847348</td>
              <td>India</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Babu</td>
              <td>20</td>
              <td>973847348</td>
              <td>India</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nagur</td>
              <td>20</td>
              <td>973847348</td>
              <td>India</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>Login Form</h2>
        <form>
          <label>User Name:</label>
          <input type="text" placeholder="Enter User Name" required />
          <br />
          <label>Email Id:</label>
          <input type="email" placeholder="Enter Email" required />
          <br />
          <label>Password:</label>
          <input type="password" placeholder="Enter Password" required />
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <form>
          <h2>Singup Form</h2>
          <div>
            <label>First Name:</label>
            <input type="text" placeholder="Enter First Name" required />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" placeholder="Enter Last Name" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your Email!" required />
          </div>
          <div>
            <label>Re-Enter Email:</label>
            <input type="email" placeholder="Re-enter your email!" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div>
            <label>Re-Enter Password:</label>
            <input type="password" placeholder="Re-Enter your password" required/>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
