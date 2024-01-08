const mongoose = require("mongoose");

const businessProfileOrganizationSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  websiteURL: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  address1: {
    type: String,
    required: false,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  zipCode: {
    type: Number,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  websiteURL: {
    type: String,
    required: false,
  },
  taxId: {
    type: Number,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  faxNumber: {
    type: Number,
    required: false,
  },
  customFields: {
    type: String,
    required: false,
  },
  postalCode:{
    type: Number,
    required: false,
  },
  customFieldName:{
    type: String,
    required: false,
  },
  customFieldValue:{
    type: String,
    required: false,
  }

});

const BusinessProfileOrganization = mongoose.model(
  "businessProfileOrganization",
  businessProfileOrganizationSchema
);
module.exports = { BusinessProfileOrganization };