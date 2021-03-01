import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const CustomSelect = ({ id, placeholder, label, options, isClearable, isSearchable, classNames, value, error, onChange })=>{
    return(
        <div className={`${classNames? classNames:''}`}>
            {
                label? <label htmlFor={id}>{label}</label>:null
            }
            <Select 
                id={id}
                value={value}
                onChange={onChange}
                options={options} 
                placeholder={placeholder}
                isClearable={isClearable}
                isSearchable={isSearchable}
                hideSelectedOptions={true}
            />
            <div className="invalid-feedback" style={{display: error? "block":"none"}}>
                {error}
            </div>
        </div>
    );
};

CustomSelect.propTypes  = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    isClearable: PropTypes.bool,
    isSearchable: PropTypes.bool,
    classNames: PropTypes.string,
    value: PropTypes.object,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default CustomSelect;