import React from "react";
import { Link } from "react-router";

const updatedUrl = (url) =>
  url.replace(/(&|\?)page=\d+(&|$)/, (match, p1, p2) => {
    if (p1 === "?") {
      return p2 === "&" ? "?" : "";
    }
    return p2 === "&" ? "&" : "";
  });

function Pagination({ currentPage, totalPages, searchParams }) {
  const url = updatedUrl(searchParams.toString());
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Link className="page-link" to={`?${url}&page=${currentPage - 1}`}>
            Prev
          </Link>
        </li>
        <li className="page-item">
          <div className="page-link">{currentPage}</div>
        </li>
        <li className="page-item">
          <Link
            className={`page-link ${currentPage === totalPages ? "disabled" : ""}`}
            to={`?${url}&page=${currentPage + 1}`}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
