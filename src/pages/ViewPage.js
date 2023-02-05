import React, { useRef, useState } from 'react';
import { Tabs, Row, Col, Button, Typography, Space, Table, Tag, Tooltip } from 'antd';
import { ShareAltOutlined, EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const initialItems = [
  {
    label: 'Sales - All India -2022',
    key: '1',
  },
  {
    label: 'Sales - All Western States',
    key: '2',
  },
];

const columns = [
  {
    title: 'Product Cost',
    dataIndex: 'col1',
    key: 'col1',
    align: 'center'
  },
  {
    title: 'Sales Cost',
    dataIndex: 'col2',
    key: 'col2',
    align: 'center'

  },
  {
    title: 'No Of New Customers',
    dataIndex: 'col3',
    key: 'col3',
    align: 'center'

  },
  {
    title: 'CAC',
    dataIndex: 'col4',
    key: 'col4',
    align: 'center'

  }
];
const data = [
  {
    key: '1',
    col1: 'Table Row',
    col2: 'Table Row',
    col3: 'Table Row',
    col4: 'Table Row',
  },
  {
    key: '2',
    col1: 'Table Row',
    col2: 'Table Row',
    col3: 'Table Row',
    col4: 'Table Row',

  },
  {
    key: '3',
    col1: 'Table Row',
    col2: 'Table Row',
    col3: 'Table Row',
    col4: 'Table Row',

  },
  {
    key: '4',
    col1: 'Table Row',
    col2: 'Table Row',
    col3: 'Table Row',
    col4: 'Table Row',

  },
  {
    key: '5',
    col1: 'Table Row',
    col2: 'Table Row',
    col3: 'Table Row',
    col4: 'Table Row',

  },
  {
    key: '6',
    col1: 'Table Row',
    col2: 'Table Row',
    col3: 'Table Row',
    col4: 'Table Row',

  },
];

const ViewPage = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
  	<Row>
  		<Row style={{width: "100%"}}>
		    <Tabs
		      type="editable-card"
		      onChange={onChange}
		      activeKey={activeKey}
		      onEdit={onEdit}
		      items={items}
		    />
		  </Row>
		  <Row style={{width: "100%", marginTop: "10px"}}>
		  	<Col span={12}>
		  		<Row><Title level={3}>All Tables</Title></Row>
		  		<Row>This table contains pan inda sales data</Row>
		  	</Col>
		  	<Col span={12} style={{display: "inline-block"}}>
		  		<Row style={{float: "right"}}>
			  		<Tooltip placement="top" title={"Share"}><Button icon={<ShareAltOutlined />} style={{background: "none", color: "black"}}/></Tooltip>
			  		<Tooltip placement="top" title={"Edit"}><Button icon={<EditOutlined />} style={{background: "none", color: "black", marginLeft: "4px"}}/></Tooltip>
			  		<Tooltip placement="top" title={"View"}><Button icon={<EyeOutlined />} style={{background: "none", color: "black", marginLeft: "4px"}}/></Tooltip>
			  		<Tooltip placement="top" title={"Delete"}><Button icon={<DeleteOutlined />} style={{background: "none", color: "black", marginLeft: "4px"}}/></Tooltip>
			  	</Row>
		  	</Col>
		  </Row>
		  <Table columns={columns} dataSource={data} style={{width: "100%", marginTop: "24px"}} bordered/>
    </Row>
  );
};
export default ViewPage;