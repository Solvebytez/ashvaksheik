/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatDate = (date:any) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate.replace(/([A-Za-z]+)/, (month) => month.toUpperCase());
  };