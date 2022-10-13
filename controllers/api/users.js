const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
};

async function create(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      parseInt(process.env.SALT_ROUNDS)
    );
    const user = await User.create({
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(user);
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new Error("Password doesn't match e-mail");
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}
