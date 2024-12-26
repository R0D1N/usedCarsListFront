import React from "react";
import { Link } from "react-router";

function Pagination({ currentPage, totalPages }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Link className="page-link" to={`?page=${currentPage - 1}`}>
            Prev
          </Link>
        </li>
        <li className="page-item">
          <div className="page-link">{currentPage}</div>
        </li>
        <li className="page-item">
          <Link
            className={`page-link ${currentPage === totalPages ? "disabled" : ""}`}
            to={`?page=${currentPage + 1}`}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
