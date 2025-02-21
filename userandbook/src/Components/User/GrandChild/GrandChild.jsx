import "./GrandChild.css";

const GrandChild = ({ address }) => {
  return (
    <div className="grandchild">
      <h3>GrandChild </h3>
      <p>Address: {address}</p>
    </div>
  );
};

export default GrandChild;