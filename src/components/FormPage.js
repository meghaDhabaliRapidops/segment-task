import React from "react";
import { Button, Form, Input } from "antd";
import ToggleButton from "./ToggleButton";
import ConditionPage from "./ConditionPage";
import AddRemoveInputField from "./AddRemoveInputField-backup";

export default function FormPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const options = [
    {
      label: "Option 1",
      value: "option1",
      children: [
        { label: "Option 1.1", value: "option1.1" },
        { label: "Option 1.2", value: "option1.2" },
      ],
    },
    {
      label: "Option 2",
      value: "option2",
      children: [
        {
          label: "Option 2.1",
          value: "option2.1",
        },
        {
          label: "Option 2.2",
          value: "option2.2",
        },
      ],
    },
  ];
  return (
    <div style={{marginTop: "20px"}}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Segment Name"
          name="segmentName"
          rules={[{ required: true, message: "This field is required." }]}
        >
          <Input />
        </Form.Item>

        <ConditionPage />

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <br/>
      <br/>
      <br/>
      {/* <AddRemoveInputField/> */}
    </div>
  );
}
