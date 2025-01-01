import "./Child.css";
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment key="">
      <div className="component">
        <h3>Hello Component</h3>
      </div>
        <h3>Hello Fragment</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem doloremque deserunt hic laborum est ratione aspernatur facere veniam corporis ducimus repudiandae rem necessitatibus adipisci officia atque numquam, ea iure obcaecati.</p>
    </Fragment>
  );
};

export default Child;
