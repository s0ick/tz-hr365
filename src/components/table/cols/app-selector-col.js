import React, {useCallback} from 'react';
import {Select} from 'antd';
import PropTypes from 'prop-types';

import {randomKey} from '../../../utils/table.utils';
import {MIN_WIDTH_FIELDS, PLACES} from '../../../utils/constants';

export function AppSelectorCol({col, onUpdate}) {
  const onChangeSelect = useCallback(
    value => {
      onUpdate({value, list: col.list, numRow: col.numRow});
    }, [col, onUpdate]
  );

  return (
    <Select
      value={col.value}
      onChange={onChangeSelect}
      style={{
        width: MIN_WIDTH_FIELDS.SMALL
      }}
    >
      {PLACES[col.list].map(option => (
        <Select.Option
          key={`option_table_key_${randomKey()}`}
          value={option}
        >
          {option}
        </Select.Option>
      ))}
    </Select>
  );
}

AppSelectorCol.propTypes = {
  col: PropTypes.object,
  onUpdate: PropTypes.func
};
