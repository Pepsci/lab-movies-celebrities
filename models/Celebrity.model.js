const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
  name: String,
  occupation: {
    type: String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchPhrase: String,
});

const Celebrity = model("celebrities", celebritySchema);

module.exports = Celebrity;
