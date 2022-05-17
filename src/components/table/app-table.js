import React, {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'antd';
import PropTypes from 'prop-types';

import {getCurrentRow, getTable} from '../../redux/selectors/index.selectors';
import {deleteRow, updateCol} from '../../redux/reducers/table.reducer';
import {copyObject, renderActionCol, renderCol} from '../../utils/table.utils';
import {setCurrentRow, replaceMap} from '../../redux/reducers/map.reducer';

const defaultStyles = {
  backgroundColor: '#fff',
  minWidth: '400px',
  overflow: 'auto',
  paddingRight: '5px'
};

export function AppTable({width}) {
  const {columns, content} = useSelector(getTable);
  const currentRow = useSelector(getCurrentRow);
  const dispatch = useDispatch();

  const onUpdatePoint = useCallback(
    data => {
      dispatch(updateCol(data));
    }, [dispatch]
  );

  const actionDeleteRow = useCallback(
    num => {
      dispatch(deleteRow(num));
    }, [dispatch]
  );

  const customColumns = useMemo(
    () => {
      const newColumns = copyObject(columns);

      return newColumns.map(column => {
        if (column.title !== 'Action') {
          column.render = colValue => renderCol(colValue, onUpdatePoint);
          return column;
        }

        column.render = colValue => renderActionCol(colValue, actionDeleteRow);
        return column;
      });
    }, [columns]
  );

  const onTargetRow = useCallback(
    record => {
      return {
        onClick: event => {
          const target = event.target;

          if (target.tagName === 'TR' || target.tagName === 'TD') {
            const copy = copyObject(currentRow);
            dispatch(replaceMap());

            if (record.key !== copy?.key) {
              dispatch(setCurrentRow(record));
            }
          }
        }
      }
    }, [dispatch, currentRow]
  );

  return (
    <div style={{...defaultStyles, width}}>
      <Table
        onRow={onTargetRow}
        columns={customColumns}
        dataSource={content}
        rowSelection={currentRow && {selectedRowKeys: currentRow.key}}
      />
    </div>
  );
}

AppTable.propTypes = {
  width: PropTypes.number
};
