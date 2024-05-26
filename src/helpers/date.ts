export const formatDate = (datestring: string) => {
  const date = new Date(datestring);
  return date.toLocaleDateString("ru");
};
