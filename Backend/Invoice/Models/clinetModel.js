const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
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
  postalCode: {
    type: Number,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  OrganizationName: {
    type: String,
    required: false,
  },
  faxNumber: {
    type: Number,
    required: false,
  },
  webSiteUrl: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
  customFieldName: {
    type: String,
    required: false,
  },
  customFieldValue: {
    type: String,
    required: false,
  },
  taxId: {
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
  }, 
  currency:{
    type: String,
    required: false,
  }, 
  language:{
    type: String,
    required: false,
  },

});

const ClientDetail = mongoose.model("ClienteDetail", ClientSchema);

module.exports = { ClientDetail };
