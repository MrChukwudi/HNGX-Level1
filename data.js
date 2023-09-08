const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();

//Getting the day of the week
let currentDay = days[date.getDay()];

//Getting the Current Time:

// Get the date and time components
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
let day = String(date.getDate()).padStart(2, "0");
let hours = String(date.getHours()).padStart(2, "0");
let minutes = String(date.getMinutes()).padStart(2, "0");
let seconds = String(date.getSeconds()).padStart(2, "0");

// Create the ISO 8601 formatted string
const isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

console.log(isoString);

const data = [
  {
    slack_name: "Mr. Dee",
    current_day: currentDay,
    utc_time: isoString,
    track: "backend",
    github_file_url:
      "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
    github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",
    status_code: "",
  },
  {
    slack_name: "Oladokun",
    current_day: currentDay,
    utc_time: isoString,
    track: "frontend",
    github_file_url:
      "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
    github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",
    status_code: "",
  },
  {
    slack_name: "Musa",
    current_day: currentDay,
    utc_time: isoString,
    track: "Frontend",
    github_file_url:
      "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
    github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",
    status_code: "",
  },
  {
    slack_name: "Musa",
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
