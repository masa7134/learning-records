import "./Container.css";

const Container = ({ title, children, first, second }) => {
  console.log(children)
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Container;
