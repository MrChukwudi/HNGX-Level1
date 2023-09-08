import { generateData } from "../data.js";

const dataRequest = async (req, res) => {
  const { slack_name, track } = req.query;

  try {
    const data = generateData(); // Get the data array from the module
    const requiredUser = data.filter(
      (userData) =>
        userData.slack_name === slack_name && userData.track === track
    );

    if (requiredUser.length > 0) {
      let myUser = requiredUser[0];
      myUser.status_code = 200;
      res.status(200).json(myUser);
    } else {
      res.status(400).json({ error: "Invalid Parameters" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default dataRequest;
