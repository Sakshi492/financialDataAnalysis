import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './styles/dropDownControl.scss';

const DropDownControl = props => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState('Select...');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  const customStyles = {
    control: base => ({
      ...base,
      background: 'transparent',
      display: 'flex',
      flexWrap: 'nowrap',
      cursor: 'pointer',
      border: 0
    }),
    menu: base => ({
      ...base,
      background: '#1b1b1b',
      border: '1px solid #fc6e20',
      '&:hover': {
        border: '1px solid #ffe7d0'
      }
    }),
    option: base => ({
      ...base,
      background: '#1b1b1b',
      padding: '1rem',
      cursor: 'pointer',
      color: '#fc6e20',
      border: 0,
      outline: 'none',
      fontWeight: 'bold',
      '&:hover': {
        background: '#ffe7d0'
      }
    }),
    valueContainer: base => ({
      ...base,
      color: '#fc6e20'
    }),
    placeholder: base => ({
      ...base,
      color: '#fc6e20'
    })
  };

  return (
    <div className="dropdown-control">
      <div className="dropdown-control-header">{props.header}</div>
      <div className="dropdown-control-container">
        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder={placeholder}
          isDisabled={isDisabled}
          isLoading={isLoading}
          // isRtl={isRtl}
          isSearchable={true}
          name="color"
          options={options}
          styles={customStyles}
          onChange={option => {
            props.onValueChange(option.value);
          }}
        />
      </div>
    </div>
  );
};

export default DropDownControl;
