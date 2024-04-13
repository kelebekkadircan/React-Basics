import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  console.log(location);
  //  /help/contact => help | contact

  let currentPath = location.pathname;

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentPath = +`/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentPath}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
