import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        voluptate explicabo minus. Iure quia excepturi dolorem voluptate unde
        itaque eveniet?
      </p>
      <p>
        Go to the <Link to="/">Home</Link>{" "}
      </p>
    </div>
  );
};
