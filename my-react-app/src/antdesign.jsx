import { Button, DatePicker, Menu, Table } from "antd";
import { useState } from "react";

// we use attributes and props for change antd.Firstly we must find part of API  for know all things about component
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
export const Antdesign = () => {
  const [current, setCurrent] = useState("mail");
  const [open, setOpen] = useState("false");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            { label: "Option 1", key: "setting:1" },
            { label: "Option 2", key: "setting:2" },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            { label: "Option 3", key: "setting:3" },
            { label: "Option 4", key: "setting:4" },
          ],
        },
      ],
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      // macihine gets datas through dataIndex
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <div style={{ display: "flex", flex: 2, flexDirection: "column" }}>
      <h1>Antdesign</h1>
      <Button danger loading={false} shape="cycle" type="dashed">
        Default
      </Button>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      ;<Button onClick={() => setOpen(!open)}>toggle</Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["Sub"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={open}
        items={[
          { label: "Menu item1", icon: <h1>X</h1>, key: 1 },
          {
            label: "Menu item2s",
            icon: <h1>X</h1>,
            key: 1,
            children: [{ label: "Menu item1", icon: <h1>X</h1>, key: 1 }],
          },
        ]}
      />
      <hr />
      <DatePicker
        onChange={({ date, dateString }) => {
          console.log(date, dateString);
        }}
        picker="month"
      ></DatePicker>
      <hr />
      <Table
        footer={() => <h1>footer</h1>}
        bordered
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};
