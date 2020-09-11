const Users = require("./user.model");
//
exports.save = async (req, res) => {
  try {
    console.log("Users req.body: ", JSON.parse(JSON.stringify(req.body)));
    //
    const user = await Users.create(req.body);
    return res.json({
      success: true,
      status: "User saved success!",
      user: user,
    });
  } catch (error) {
    return res.json(error);
  }
};
//
exports.find = async (req, res) => {
  try {
    //   console.log("Users req.body: ", JSON.parse(JSON.stringify(req.body)));
    //
    // const user = await Users.find();
    return res.json({
      success: true,
      status: "User saved success!",
    //   user: user,
    });
  } catch (error) {
    return res.json(error);
  }
};
