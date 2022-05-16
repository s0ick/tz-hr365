import React, {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'antd';

import {getTable} from '../../redux/selectors/table.selectors';
import {updateCol} from '../../redux/reducers/table.reducer';
import {copyObject, renderCol} from '../../utils/table.utils';

export function AppTable() {
  const {columns, content} = useSelector(getTable);
  const dispatch = useDispatch();

  const onUpdatePoint = useCallback(
    data => {
      dispatch(updateCol(data));
    }, [dispatch]
  );

  const customColumns = useMemo(
    () => {
      const newColumns = copyObject(columns);

      return newColumns.map(column => {
        column.render = colValue => renderCol(colValue, onUpdatePoint)
        return column;
      });
    }, [columns]
  );

  return <Table
    columns={customColumns}
    dataSource={content}
  />;
}
