import { Link } from "react-router-dom";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";
import "./Breadcrumbs.scss";

function Breadcrumbs() {
  const { breadcrumbs } = useBreadcrumbContext();
  return (
    <div
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   fontSize: "14px",
      // }}
      className="breadcrumbs"
    >
      {breadcrumbs.map(({ link, label }, index) => (
        <span key={link}>
          {index > 0 && <span style={{ margin: "0 5px" }}>/</span>}
          {link ? (
            <Link to={`/items?search=${label}`}>{label}</Link>
          ) : (
            <span>{label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
