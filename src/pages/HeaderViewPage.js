import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Text } = Typography;

const HeaderViewPage = () => {
	return(
		<Row >
			<Col style={{marginRight: "12px"}} align="center">
		  		<Button icon={<ArrowLeftOutlined />} style={{background: "none", color: "black"}}/>
			</Col>
			<Col align="center">
				<Text strong style={{fontSize: "36px"}}>View Table</Text>
			</Col>
		</Row>
	)
}

export default HeaderViewPage;