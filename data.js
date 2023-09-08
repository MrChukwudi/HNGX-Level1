const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date()

//Getting the day of the week
const currentDay = days[date.getDay()];


//Getting the Current Time:

// Get the date and time components
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

// Create the ISO 8601 formatted string
const isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

console.log(isoString);


const data = [
  {
    name: "Desire",
    slack_name: "example_name",
    current_day: currentDay,
    utc_time: isoString,
    track: "backend",
    github_file_url:
      "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
    github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",

    status_code: "",
  },
  {
    name: "Oladokun",
    slack_name: "example_name",
    current_day: currentDay,
    utc_time: isoString,
    track: "frontend",
    github_file_url:
      "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
    github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",

    status_code: "",
  },
  {
    name: "Musa",
    slack_name: "example_name",
    current_day: currentDay,
    utc_time: isoString,
    track: "Frontend",
    github_file_url:
      "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
    github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",

    status_code: "",
  },
  {
    name: "Musa",
    slack_name: "example_name",
    current_day: currentDay,
    utc_time: isoString,
    track: "backend",
    github_file_url:
      "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
    github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",

    status_code: "",
  },
];

export default data;
