const express = require('express');
const userController = require('./user.controller');
//
const userRouter = express.Router();
//
/* 
Routers for the Inventory Form
Which is basically used by admin
of the system.
*/
// @@@@@@@@@@@@@@@@@@@@@@
const multer = require('multer');
//

/* 
A method to upload files to the nodejs server
Using multer module
*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    cb(new Error("You can only upload image files", false));
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });
// @@@@@@@@@@@@@@@@@@@@@@
//
userRouter.post('/save',upload.none(), userController.save);

//
module.exports = userRouter;