export function paginate(selectedPage, totalPages) {
  const pages = [];
  let oldPage;

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastPage = currentPage === 1 || currentPage === totalPages;
    const secondAndPenultimatePage =
      currentPage === 2 || currentPage === totalPages - 1;
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;

    if (
      firstAndLastPage ||
      secondAndPenultimatePage ||
      (pagesBeforeSelectedPage && pagesAfterSelectedPage)
    ) {
      if (oldPage && currentPage - oldPage > 2) pages.push('...');
      if (oldPage && currentPage - oldPage === 2) pages.push(oldPage + 1);

      pages.push(currentPage);
      oldPage = currentPage;
    }
  }

  return pages;
}

export function cep(value) {
  value = value.replace(/\D/g, '');

  if (value.length > 8) value = value.slice(0, -1);

  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  return value;
}
