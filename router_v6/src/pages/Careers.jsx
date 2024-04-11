import { useLoaderData, Link } from "react-router-dom";

export const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link key={career.id} to={career.id.toString()}>
          <p> {career.title} </p>
          <p>Based in {career.location} </p>
        </Link>
      ))}
    </div>
  );
};

// loader function

// eslint-disable-next-line react-refresh/only-export-components
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw new Error("Could not fetch  careers");
  }
  return res.json();
};
