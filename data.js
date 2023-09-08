const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const generateData = () => {
  const date = new Date();
  const currentDay = days[date.getDay()];

  const myUtcTime = () => {
    // Get the date and time components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // Create the ISO 8601 formatted string
    const isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    return isoString;
  };

  const data = [
    {
      slack_name: "Mr. Dee",
      current_day: currentDay,
      utc_time: myUtcTime(),
      track: "backend",
      github_file_url:
        "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
      github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",
      status_code: "",
    },
    {
      slack_name: "Oladokun",
      current_day: currentDay,
      utc_time: myUtcTime(),
      track: "frontend",
      github_file_url:
        "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
      github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",
      status_code: "",
    },
    {
      slack_name: "Musa",
      current_day: currentDay,
      utc_time: myUtcTime(),
      track: "Frontend",
      github_file_url:
        "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
      github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",
      status_code: "",
    },
    {
      slack_name: "Musa",
      current_day: currentDay,
      utc_time: myUtcTime(),
      track: "backend",
      github_file_url:
        "https://github.com/MrChukwudi/HNGX-Level1/blob/master/index.js",
      github_repo_url: "https://github.com/MrChukwudi/HNGX-Level1",
      status_code: "",
    },
  ];

  return data;
};

export { generateData };
