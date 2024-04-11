/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

export const CareerDetails = () => {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title} </h2>
      <p>starting salary: {career.salary} </p>
      <p>Location {career.location} </p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          temporibus tenetur laboriosam perferendis molestias enim est neque
          molestiae excepturi commodi.
        </p>
      </div>
    </div>
  );
};

//loader function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/careers/` + id);

  if (!res.ok) {
    throw new Error("Could not find that career");
  }

  return res.json();
};
