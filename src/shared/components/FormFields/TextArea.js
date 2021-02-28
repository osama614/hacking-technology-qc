import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ id, rows, placeholder, classNames, value, readOnly, error, onChange })=>{
    return(
        <div className={`form-group ${classNames? classNames:''}`}>
            <textarea
                id={id}
                name={id}
                rows={rows || "3"}
                className={`form-control ${error? 'is-invalid':''}`}
                placeholder={placeholder}
                value={value}
                readOnly={readOnly}
                onChange={onChange}
            />
            <div className="invalid-feedback" style={{display: error? "block":"none"}}>
                {error}
            </div>
        </div>
    );
};

TextArea.propTypes  = {
    id: PropTypes.string.isRequired,
    rows: PropTypes.string,
    placeholder: PropTypes.string,
    classNames: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};

export default TextArea;