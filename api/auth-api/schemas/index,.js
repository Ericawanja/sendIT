
const Joi = require("joi")
const registerSchema = Joi.object({
    firstname:Joi.string().min(2).max(20).required(),
    lastname:Joi.string().min(2).max(20).required(),
    password: Joi.string().required().min(8).max(20),
    email: Joi.string().required().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });


  const loginSchema = Joi.object({
    password: Joi.string().required().min(8).max(20),
    email: Joi.string().required().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  module.exports = {
    registerSchema,
    loginSchema
  }