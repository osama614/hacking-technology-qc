import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={"السابق"}
      nextLabel={"التالي"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination justify-content-center"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
