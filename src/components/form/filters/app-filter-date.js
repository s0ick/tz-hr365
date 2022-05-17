import React, {useCallback} from 'react';
import {DatePicker, Form} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'antd/dist/antd.css';

export function AppFilterDate({field, setField, value}) {
  const onChangeCallback = useCallback(
    (moment, value) => {
      setField({id: field.id, value: {date: value, moment}});
    }, [field]
  );

  const disabledDate = current => {
    return current && current < moment().endOf('day');
  };

  return (
    <Form.Item style={{minWidth: field.minWidth}}>
      <DatePicker
        disabledDate={disabledDate}
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
