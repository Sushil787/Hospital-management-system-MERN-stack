const mongoose = require("mongoose");

const user_schema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", user_schema);
module.exports = user;
