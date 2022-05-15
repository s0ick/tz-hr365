import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Form, Button} from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import {setValue} from '../../redux/reducers/form.reducer';
import {TYPES} from '../../utils/constants';

import {AppFilterSelect} from './filters/app-filter-select';
import {AppFilterDate} from './filters/app-filter-date';

export function AppForm({config}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const setField = useCallback(
    data => {
      dispatch(setValue({field: data.id, value: data.value}))
    }, [dispatch]
  );

  return (
    <Form
      layout={'inline'}
      form={form}
      initialValues={{layout: 'inline'}}
    >
      {config.map(field => {
        switch (field.type) {
          case TYPES.DATE:
            return <AppFilterDate
              key={`${field.type}_${field.id}`}
              field={field}
              setField={setField}
            />;
          case TYPES.SELECTOR:
            return <AppFilterSelect
              key={`${field.type}_${field.id}`}
              field={field}
              setField={setField}
            />;
          default: return <></>;
        }
      })}
      <Form.Item>
        <Button type={'primary'}>{'Add request'}</Button>
      </Form.Item>
    </Form>
  );
}

AppForm.propTypes = {
  config: PropTypes.array
};
