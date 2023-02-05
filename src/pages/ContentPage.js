import React, { useState } from 'react';
import { Row, Col, Typography, Menu, Divider, Button, Input, Checkbox, Card, Rate, Avatar, Space, Drawer, Breadcrumb, Alert, Modal, Switch, Dropdown   } from 'antd';
import { AppstoreOutlined, FilterOutlined, SortAscendingOutlined, UserOutlined, MoreOutlined, EyeOutlined, DeleteOutlined, EyeInvisibleOutlined, HolderOutlined, FunctionOutlined, ShareAltOutlined, FormOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('All', 'sub1', ),
  getItem('My Data', 'sub2', ),
  {
    type: 'divider',
  },
  getItem('Favourites', 'sub3', ),
  getItem('Datasources', 'sub4', ),
  getItem('Files', 'sub5', ),
  {
    type: 'divider',
  },
  getItem('Shared With You', 'sub6', ),
  getItem('Shared By You', 'sub7', ),
  {
    type: 'divider',
  },
  getItem('Hidden', 'sub8', ),
];


const dropitems = [
  {
    label: 'Share',
    key: 'drop_share',
    icon: <ShareAltOutlined />,
  },
  {
    label: 'Edit',
    key: 'drop_edit',
    icon: <FormOutlined />,
  },
  {
    label: 'Hide',
    key: 'drop_hide',
    icon: <EyeInvisibleOutlined />,
  },
  {
    label: 'Delete',
    key: 'drop_delete',
    icon: <DeleteOutlined />,
  },
];

const ContentPage = () => {

  const [open, setOpen] = useState(false);
  const showLargeDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleMenuClick = (e) => {
    if(e.key === "drop_edit")
      showLargeDrawer();
    console.log('click', e);
  };

  return(
    <Row gutter={48}>
      <Col span={4}>
        <Menu
          mode="inline"
          openKeys={['sub1']}
          style={{
            width: "100%",
            color: "black",
            background: "#fafafa",
            borderRadius: "12px",
            padding: "12px"
          }}
          items={items}
        />
      </Col>
      <Col span={20}>
        <Row>
          <Col span="12"><Title level={3}>All Tables</Title></Col>
          <Col span="12" style={{display: "inline-block"}}>
            <Space style={{float: "right"}}>
            <Button type="primary" icon={<SortAscendingOutlined />} style={{background: "none", color: "black"}}/>
            <Button type="primary" icon={<FilterOutlined />} style={{background: "none", color: "black", marginLeft: "4px"}}/>
            <Button type="primary" icon={<AppstoreOutlined />} style={{background: "none", color: "black", marginLeft: "4px"}}/>
            </Space>
          </Col>
        </Row>
        <Row>
          <Input placeholder="Search tables" />
        </Row>
        <Row style={{background: "#fafafa", marginTop: "24px", marginBottom: "12px"}}>
          <Col span="12">
            <Title level={4}>2 Tables Selected</Title>
          </Col>
          <Col span="12" style={{display: "inline-block"}}>
            <Space style={{float: "right"}}>
              <Button icon={<ShareAltOutlined />}/>
              <Button icon={<EyeOutlined />} />
              <Button icon={<DeleteOutlined />}/>
              <Button style={{background: "black", color: "#fafafa"}}>
                View Tables
              </Button>
            </Space>
          </Col>
        </Row>
        <Row style={{marginTop: "24px", marginBottom: "18px", display: "inline-block", width: "100%"}}>
          <Col span="12"><Checkbox >DATASOURCE ONE</Checkbox></Col>
          <Col span="12" style={{float: "right"}}>Uploaded on 21 aug 22, 12:00pm IST</Col>
        </Row>
        <Row style={{marginBottom: "12px"}}  justify="center">
          <Card style={{width: "100%"}}>
            <Row justify="center">
              <Col span="1"><Checkbox /></Col>
              <Col span="1"><Rate count="1" /></Col>
              <Col span="18">
                <Row><Title level={4}>Sales - All India - 2022</Title></Row>
                <Row>The table contains pan India sales data</Row>
              </Col>
              <Col span="2" style={{textAlign: "center", display: "inline-block"}}>
                <Row justify="center">
                  <Avatar.Group>
                    <Avatar icon={<UserOutlined />} />
                    <Avatar icon={<UserOutlined />} />
                    <Avatar icon={<UserOutlined />} />
                  </Avatar.Group>
                </Row>
                <Row style={{display: "inline-block"}}>Author</Row>
              </Col>
              <Col span="2">
                <Dropdown
                  menu={{
                    items: dropitems,
                    onClick: handleMenuClick,
                  }}
                  placement="bottomLeft"
                  arrow
                >
                  <Button type="primary" icon={<MoreOutlined />} style={{background: "none", color: "black"}} />
                </Dropdown>
              </Col>
            </Row>
          </Card>
        </Row>
      </Col>
      <Drawer
        placement="right"
        size={'large'}
        onClose={onClose}
        open={open}
        closable={false}
      >
        <Row>
          <Col span="12">
            <Row>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="">DATA MANAGEMENT</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">TABLE DETAILS</a>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Row>
            <Row><Title level={3}>Sales India</Title></Row>
          </Col>
          <Col span="12" style={{display: "inline-block"}}>
            <Space style={{float: "right"}}>
              <Button icon={<EyeOutlined />} size={'large'} />
              <Button icon={<DeleteOutlined />} size={'large'}/>
            </Space>
          </Col>
        </Row>
        <Alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
          style={{background: "#fafafa"}}
        />
        <Title level={5} style={{marginTop: "12px"}}>Table Name</Title>
        <Input placeholder="Sales India"/>
        <Title level={5} style={{marginTop: "12px"}}>Table Description</Title>
        <TextArea rows={4} />
        <Title level={5} style={{marginTop: "24px"}}>Columes</Title>

        <Card style={{width: "100%", marginBottom: "12px", marginTop: "12px"}}>
          <Row justify="center">
            <Col span="1"><HolderOutlined /></Col>
            <Col span="11"><Title level={5}>Product Cost</Title></Col>
            <Col span="12" style={{display: "inline-block"}}>
              <Space style={{float: "right"}}>
                <Button icon={<EyeInvisibleOutlined />} size={'large'} />
                <Button icon={<DeleteOutlined />} size={'large'}/>
              </Space>
            </Col>
          </Row>
        </Card>

        <Card style={{width: "100%", marginBottom: "12px", marginTop: "12px"}}>
          <Row justify="center">
            <Col span="1"><HolderOutlined /></Col>
            <Col span="11"><Title level={5}>Sales Cost</Title></Col>
            <Col span="12" style={{display: "inline-block"}}>
              <Space style={{float: "right"}}>
                <Button icon={<EyeInvisibleOutlined />} size={'large'} />
                <Button icon={<DeleteOutlined />} size={'large'}/>
              </Space>
            </Col>
          </Row>
        </Card>

        <Card style={{width: "100%", marginBottom: "12px", marginTop: "12px"}}>
          <Row justify="center">
            <Col span="1"><HolderOutlined /></Col>
            <Col span="11"><Title level={5}>No Of New Customers</Title></Col>
            <Col span="12" style={{display: "inline-block"}}>
              <Space style={{float: "right"}}>
                <Button icon={<EyeInvisibleOutlined />} size={'large'} />
                <Button icon={<DeleteOutlined />} size={'large'}/>
              </Space>
            </Col>
          </Row>
        </Card>

        <Card style={{width: "100%", marginBottom: "12px", marginTop: "12px"}}>
          <Row justify="center">
            <Col span="1"><HolderOutlined /></Col>
            <Col span="11"><Title level={5}>CAC</Title></Col>
            <Col span="12" style={{display: "inline-block"}}>
              <Space style={{float: "right"}}>
                <Button icon={<FunctionOutlined />} size={'large'} onClick={showModal}/>
                <Button icon={<EyeInvisibleOutlined />} size={'large'} />
                <Button icon={<DeleteOutlined />} size={'large'}/>
              </Space>
            </Col>
          </Row>
        </Card>

        <Card style={{width: "100%", marginBottom: "12px", marginTop: "12px"}}>
          <Row justify="center">
            <Col span="1"><HolderOutlined /></Col>
            <Col span="11"><Title level={5}>Averge</Title></Col>
            <Col span="12" style={{display: "inline-block"}}>
              <Space style={{float: "right"}}>
                <Button icon={<FunctionOutlined />} size={'large'} onClick={showModal}/>
                <Button icon={<EyeInvisibleOutlined />} size={'large'} />
                <Button icon={<DeleteOutlined />} size={'large'}/>
              </Space>
            </Col>
          </Row>
        </Card>

        <Card style={{width: "100%", marginBottom: "12px", marginTop: "12px"}}>
          <Row justify="center">
            <Col span="1"><HolderOutlined /></Col>
            <Col span="11"><Title level={5}>Sum</Title></Col>
            <Col span="12" style={{display: "inline-block"}}>
              <Space style={{float: "right"}}>
                <Button icon={<FunctionOutlined />} size={'large'} onClick={showModal}/>
                <Button icon={<EyeInvisibleOutlined />} size={'large'} />
                <Button icon={<DeleteOutlined />} size={'large'}/>
              </Space>
            </Col>
          </Row>
        </Card>
       
        <Row justify="center" gutter={16}>
          <Col span="12"><Button style={{width: "100%", height: "50px"}}>Cancel</Button></Col>
          <Col span="12"><Button type="primary" style={{width: "100%", height: "50px", background: "black", color: "#fafafa"}} >Save</Button></Col>
        </Row>
      </Drawer>

      <Modal 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        closable={false} 
        footer={null}>
          <Row>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="">TABLE DETAILS</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">KPI</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <br/>
          <Row>
            <Title level={3}>CAC</Title>
          </Row>
        <Title level={5} style={{marginTop: "24px"}}>Colume Name</Title>
        <Input placeholder="CAC"/>
        <Title level={5} style={{marginTop: "24px"}}>KPI Description</Title>
        <TextArea rows={4} />
        <Row style={{marginTop: "24px"}}>
          <Col span={12}>
            <Title level={5}>KPI</Title>
          </Col>
          <Col span={12}>
            <Switch defaultChecked style={{float: "right", background: "black"}}/>
          </Col>
        </Row>
        <TextArea rows={4} />
        <Row justify="center" gutter={16} style={{marginTop: "24px"}}>
          <Col span="12"><Button style={{width: "100%", height: "50px"}}>Cancel</Button></Col>
          <Col span="12"><Button type="primary" style={{width: "100%", height: "50px", background: "black", color: "#fafafa"}} >Save</Button></Col>
        </Row>
      </Modal>
    </Row>
  )
}

export default ContentPage;