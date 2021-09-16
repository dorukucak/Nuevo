import React from "react";

export default function Pagination({
  data,
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {


  return (
    <div className='py-2 px-10'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing
          
          
          <span className='font-medium'>{" "}{(data.length == 0) ? 0 : currentPage * postsPerPage - 2}{" "}</span>
          
          to
          <span className='font-medium'>{" "}{(currentPage * postsPerPage > totalPosts) ? totalPosts : currentPage * postsPerPage}{" "}</span>
          of
          <span className='font-medium'>{" "}{totalPosts}{" "}</span>
          results
        </p>
      </div>
      <nav className='block'></nav>
      <div>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <button
            onClick={() => {
              paginateBack();
            }}
            disabled={currentPage == 1}
            className={`${(currentPage <= 1) ? 'disabled: opacity-50 relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500' : 'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'}`}
          >
            Previous
          </button>

          <button
            onClick={() => {
              paginateFront();
            }}
            disabled={currentPage >= totalPosts / postsPerPage}
            className={`${(currentPage > totalPosts / postsPerPage) ? 'opacity-50 relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500' : 'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'}`}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}