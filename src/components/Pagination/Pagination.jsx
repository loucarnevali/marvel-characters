import React from 'react';
import { PaginationWrapper, PageButton } from './Pagination.styles';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationWrapper>
      {/* Voltar para primeira página: aparece se currentPage > 2 */}
      {currentPage > 2 && (
        <PageButton isArrow onClick={() => onPageChange(1)}>
          «
        </PageButton>
      )}

      {/* Voltar uma página: aparece se currentPage > 1 */}
      {currentPage > 1 && (
        <PageButton isArrow onClick={() => onPageChange(currentPage - 1)}>
          ‹
        </PageButton>
      )}

      {pages.map((page) => (
        <PageButton
          key={page}
          active={page === currentPage}
          currentPage={currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      {/* Avançar uma página: aparece se currentPage < totalPages */}
      {currentPage < totalPages && (
        <PageButton isArrow onClick={() => onPageChange(currentPage + 1)}>
          ›
        </PageButton>
      )}

      {/* Avançar para última página: aparece se currentPage < totalPages - 1 */}
      {currentPage < totalPages - 1 && (
        <PageButton isArrow onClick={() => onPageChange(totalPages)}>
          »
        </PageButton>
      )}
    </PaginationWrapper>
  );
}

export default Pagination;
