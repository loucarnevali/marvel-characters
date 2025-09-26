import React, { useEffect, useState } from 'react';
import { PaginationWrapper, PageButton } from './Pagination.styles';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxVisible = windowWidth < 375 ? 3 : totalPages;

  // calculates visible pagination
  let startPage = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
  let endPage = startPage + maxVisible - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxVisible + 1, 1);
  }

  const pagesToShow = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <PaginationWrapper>
      {/* back to First Page: currentPage > 2 */}
      {currentPage > 2 && (
        <PageButton isArrow onClick={() => onPageChange(1)}>
          «
        </PageButton>
      )}

      {/* back one page currentPage > 1 */}
      {currentPage > 1 && (
        <PageButton isArrow onClick={() => onPageChange(currentPage - 1)}>
          ‹
        </PageButton>
      )}

      {pagesToShow.map((page) => (
        <PageButton
          key={page}
          active={page === currentPage}
          currentPage={currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      {/* advance one page: currentPage < totalPages */}
      {currentPage < totalPages && (
        <PageButton isArrow onClick={() => onPageChange(currentPage + 1)}>
          ›
        </PageButton>
      )}

      {/* advance to the last page: currentPage < totalPages - 1 */}
      {currentPage < totalPages - 1 && (
        <PageButton isArrow onClick={() => onPageChange(totalPages)}>
          »
        </PageButton>
      )}
    </PaginationWrapper>
  );
}

export default Pagination;
