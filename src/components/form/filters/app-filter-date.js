import React, {useCallback} from 'react';
import {DatePicker, Form} from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

export function AppFilterDate({field, setField, value}) {
  const onChangeCallback = useCallback(
    (moment, value) => {
      setField({id: field.id, value: {date: value, moment}});
    }, [field]
  );

  return (
    <Form.Item style={{minWidth: field.minWidth}}>
      <DatePicker
        onChange={onChangeCallback}
        placeholder={field.placeholder}
        value={value.moment}
      />
    </Form.Item>
  );
}

AppFilterDate.propTypes = {
  field: PropTypes.object,
  setField: PropTypes.func,
  value: PropTypes.object
}
