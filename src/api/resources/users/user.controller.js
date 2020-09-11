const Users = require("./user.model");
//
exports.save = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.json({ success: false, status: "Your request is empty!" });
    } else {
      console.log("Users req.body: ", JSON.parse(JSON.stringify(req.body)));
      //
      const userFind = await Users.findOne({ email: req.body.email });
      console.log("User Find: ", userFind);
      //
      if (userFind) {
        return res.json({ success: false, status: "User already exist!" });
      } else {
        const user = await Users.create(req.body);
        console.log("User created: ", user);
        //
        if (!user) {
          return res.json({
            success: false,
            status: "Error in creating new user!",
          });
        }
        return res.json({
          success: true,
          status: "User saved success!",
          user: user,
        });
      }
    }
  } catch (error) {
    return res.json(error);
  }
};
//
exports.find = async (req, res) => {
  try {
    console.log("Users req.body: ", JSON.parse(JSON.stringify(req.body)));
    //
    const users = await Users.find();
    console.log("User record found: ", users);
    //
    if (users.length > 0) {
      return res.json({
        success: false,
        status: "Users record not found!",
      });
    } else {
      return res.json({
        success: true,
        status: "Users record found!",
        users: users,
      });
    }
  } catch (error) {
    return res.json(error);
  }
};
