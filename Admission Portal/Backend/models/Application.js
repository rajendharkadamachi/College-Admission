const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  course: { type: String, required: true },
  branch: { type: String }, 
  fullName: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  aadhar: { type: String, required: true, unique: true },
  emcetMarks: { type: String, required: true },
  tenthPercentage: { type: Number, required: true },
  interPercentage: { type: Number, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  photo: { type: String }, 
  signature: { type: String }, 

});

module.exports = mongoose.model('Application', applicationSchema);
