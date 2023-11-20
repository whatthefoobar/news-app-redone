const formatDate = (inputDate: string): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(inputDate);
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return `${months[monthIndex]} ${day}th ${year}`;
};

// Example usage:
const formattedDate = formatDate("2023-11-19 10:01:05");
console.log(formattedDate); // Output: November 19th 2023

export default formatDate;
