const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../../utilits/helper");
const JWT = require("jsonwebtoken");

const Mutation = {
  createUser: async (parent, { createUserInput }, context) => {
    try {
      const { name, email, password } = createUserInput;

      if (!name || !email || !password) {
        return {
          userErrors: [
            {
              message: "Please add all fields",
            },
          ],
          user: null,
        };
      }
      const userExists = await User.findOne({ email });

      if (userExists) {
        return {
          userErrors: [
            {
              message: "User already exists",
            },
          ],
          user: null,
        };
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      if (user) {
        return {
          userErrors: [],
          user : {
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
          }
        };
      } else {
        throw new Error("Invalid user data");
      }
    } catch (error) {
      console.log("Create User Error:", error);
    }
  },
  signin: async (_, { credentials }, { db }) => {
    const { email, password } = credentials;
    const userdb = db.UserDB;

    const user = await userdb.findOne({
      email,
    });

    if (!user) {
      return {
        userErrors: [{ message: "The Not Find" }],
        token: null,
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return {
        userErrors: [{ message: "Password Wrong" }],
        token: null,
      };
    }

    const token =  JWT.sign({ userId: user.id }, process.env.JWT_SECRET, {

      expiresIn: 3600000,
    })
    return {
      userErrors: [],
      user,

      token
    };
  },
};

module.exports = Mutation;

