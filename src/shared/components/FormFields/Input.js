import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, id, label, placeholder, classNames, labelClassnames, value, readOnly, error, onChange })=>{
    return(
        <div className={`form-group ${classNames? classNames:''}`}>
            {
                label? <label htmlFor={id} className={labelClassnames}>{label}</label>:null
            }
            <input
                type={type}
                id={id}
                name={id}
                className={`form-control ${error? 'is-invalid':''}`}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                onChange={onChange}
            />
            <div className="invalid-feedback" style={{display: error? "block":"none"}}>
                {error}
            </div>
        </div>
    );
};

Input.propTypes  = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    classNames: PropTypes.string,
    labelClassnames: PropTypes.string,
    value: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Input;