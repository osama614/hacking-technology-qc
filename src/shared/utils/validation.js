
export const validateInput = (property, name, schema) => {
    const { error } = schema.validate(property, { abortEarly: false });
    if (!error || error?.details.filter(attr=> attr.context.key === name).length === 0) {
      return null;
    }
    return error.details.filter(attr=> attr.context.key === name)[0];
  };
  
  export const validateForm = (object, schema) => {
    const result = schema.validate(object, { abortEarly: false });
  
    if (!result.error) {
      return null;
    }
  
    const errors = {};
    for (const error of result.error.details) {
      errors[error.path] = error.message;
    }
  
    return errors;
  };