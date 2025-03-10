import { UserModel } from "../../models/userModel/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";

async function loginUser(req, res) {
  const { email, password } = req.body;

  if (validator.isEmail(email) === false) {
    return res.status(400).json({
      message: "Please provide a valid email address",
      status: "failed",
    });
  }

  if (
    validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }) === false
  ) {
    return res.status(400).json({
      message:
        "Password must be at least 6 characters containing upper, lower, number and special character",
      status: "failed",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //login user here

  try {
    const user = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (user === null) {
      return res
        .status(400)
        .json({ message: "Email or password incorrect", status: "failed" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect === false) {
      return res
        .status(400)
        .json({ message: "Email or password incorrect", status: "failed" });
    }
    res.status(200).json({ user, status: "successful" });
  } catch (error) {
    res.status(400).json({ message: "Login failed", status: "failed" });
  }
}

export { loginUser };
