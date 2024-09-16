export const useMediaQuery = () => {
  const minMediaQuery = (value) => `(min-width: ${value}px)`;
  const maxMediaQuery = (value) => `(max-width: ${value}px)`;
  return { maxMediaQuery, minMediaQuery };
};
