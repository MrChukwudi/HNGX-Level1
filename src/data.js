const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Getting the day of the week
const currentDay = days[new Date().getDay()];
console.log(currentDay);

// Create a string representation of the current time
const currentTime =
  (new Date().getHours() +
  ":" +
  new Date().getMinutes() +
  ":" +
  new Date().getSeconds());

  console.log(currentTime);


const data = [
  {
    name: "Desire",
    slack_name: "example_name",
    current_day: currentDay,
    utc_time: currentTime,
    track: "backend",
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "",
    status_code: "",
  },
  {
    name: "Oladokun",
    slack_name: "example_name",
    current_day: currentDay,
    utc_time: currentTime,
    track: "frontend",
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "",
    status_code: "",
  },
  {
    name: "Musa",
    slack_name: "example_name",
    current_day: currentDay,
    utc_time: currentTime,
    track: "Frontend",
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "",
    status_code: "",
  },
  {
    name: "Musa",
    slack_name: "example_name",
    current_day: currentDay,
    utc_time: currentTime,
    track: "backend",
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "",
    status_code: "",
  },
];


export default data;