import "./Nagur.css";

const Nagur = () => {
  return (
    <div className="nagur">
      <form>
        <div className="name">
          <label>User Name:</label>
          <input type="text" placeholder="Enter User Name!" required></input>
        </div>
        <div>
          <label>User Email:</label>
          <input type="email" placeholder="Enter Email ID!" required></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter User password!" required></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Nagur;
