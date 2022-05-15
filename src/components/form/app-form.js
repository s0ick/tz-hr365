import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Button} from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import {setValue} from '../../redux/reducers/form.reducer';
import {setRow} from '../../redux/reducers/table.reducer';
import {getForm} from '../../redux/selectors/form.selectors';
import {TYPES} from '../../utils/constants';

import {AppFilterSelect} from './filters/app-filter-select';
import {AppFilterDate} from './filters/app-filter-date';

export function AppForm({config}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const formState = useSelector(getForm);

  const setField = useCallback(
    data => {
      dispatch(setValue({field: data.id, value: data.value}))
    }, [dispatch]
  );

  const setRequest = useCallback(
    () => {
      const {date, product, loadingPlace, unloadingPlace} = formState;

      const dateCol = {
        type: TYPES.DATE,
        value: date.date
      };
      const productCol = {
        type: TYPES.TEXT,
        value: product
      };
      const loadingPlaceCol = {
        type: TYPES.SELECTOR,
        value: loadingPlace
      };
      const unloadingPlaceCol = {
        type: TYPES.SELECTOR,
        value: unloadingPlace
      };

      dispatch(setRow([dateCol, productCol, loadingPlaceCol, unloadingPlaceCol]));
    }, [formState]
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
              value={formState[field.id]}
            />;
          case TYPES.SELECTOR:
            return <AppFilterSelect
              key={`${field.type}_${field.id}`}
              field={field}
              setField={setField}
              value={formState[field.id]}
            />;
          default: return <></>;
        }
      })}
      <Form.Item>
        <Button
          disabled={!formState.isReady}
          onClick={setRequest}
          type={'primary'}
        >
          {'Add request'}
        </Button>
      </Form.Item>
    </Form>
  );
}

AppForm.propTypes = {
  config: PropTypes.array
};
