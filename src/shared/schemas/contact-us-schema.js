import Joi from "joi";

const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
export const emailErrorMsg = "يجب إن يكون بريد إلكتروني صالح!";
export const requiredErrorMsg = "هذا الحقل مطلوب!";

export const contactUsSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net", "edu"] } })
    .message(emailErrorMsg)
    .pattern(new RegExp(emailPattern))
    .message(emailErrorMsg)
    .required()
    .messages({
      "string.empty": requiredErrorMsg,
      "any.required": requiredErrorMsg,
    })
    .label("Email"),
  name: Joi.string()
    .required()
    .messages({
      "string.empty": requiredErrorMsg,
      "any.required": requiredErrorMsg,
    })
    .label("Name"),
  subject: Joi.string()
    .required()
    .messages({
      "string.empty": requiredErrorMsg,
      "any.required": requiredErrorMsg,
    })
    .label("Subject"),
  message: Joi.string()
    .required()
    .messages({
      "string.empty": requiredErrorMsg,
      "any.required": requiredErrorMsg,
    })
    .label("Message"),
});
