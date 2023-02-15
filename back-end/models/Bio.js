const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bioSchema = new Schema(
  {
    bio: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const Bio = mongoose.model('Bio', bioSchema)

// export the model so other modules can import it
module.exports = {
  Bio,
}
