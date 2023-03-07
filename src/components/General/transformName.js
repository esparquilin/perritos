export const transformName = (name) => {
  const newName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

  return newName;
};
