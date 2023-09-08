import myData from "../data.js";

const dataRequest = async (req, res) => {
  //I will use these query parameters to filter my Array of Data and the matching object
  const { slack_name, track } = req.query;

  try {
    //Filtering my Data to find the record that matches the request parameters:
    const requiredUser = await myData.filter(
      (data) => data.slack_name === slack_name && data.track === track
    );
    //When I find a matching Record in my Data, I will add the status_code, and return the Record:
    if (requiredUser) {
      const myUser = requiredUser[0];
      myUser.status_code = 200;
      console.log(requiredUser);
      res.status(200).send(myUser);
    } else {
      return res.send("Invalid Parameters");
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default dataRequest;
