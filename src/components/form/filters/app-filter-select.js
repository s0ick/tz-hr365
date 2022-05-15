import React, {useCallback} from 'react';
import {Form, Select} from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

export function AppFilterSelect({field, setField, value}) {
  const onChangeCallback = useCallback(
    value => {
      setField({id: field.id, value});
    }, [field]
  );

  return (
    <Form.Item style={{minWidth: field.minWidth}}>
      <Select
        placeholder={field.placeholder}
        onChange={onChangeCallback}
        value={value}
      >
        {field.data.map(option => (<Select.Option
          key={`${field.type}_${field.id}_${option}`}
          value={option}
        >
          {option}
        </Select.Option>))}
      </Select>
    </Form.Item>
  );
}

AppFilterSelect.propTypes = {
  field: PropTypes.object,
  setField: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
