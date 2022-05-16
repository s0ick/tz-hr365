import React from 'react';
import {useSelector} from 'react-redux';
import {Table} from 'antd';

import {getTable} from '../../redux/selectors/table.selectors';

export function AppTable() {
  const {columns, content} = useSelector(getTable);

  return <Table columns={columns} dataSource={content}/>;
}
