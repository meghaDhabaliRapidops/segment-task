import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import { Button, Row, Col, Input, Select } from "antd";
import Condition from "./Condition";
import AddRemoveInputField from "./AddRemoveInputField";

export default function ConditionPage() {
  return (
    <div>
      <Row>
        <Col span={6}>
          <ToggleButton />
        </Col>
        <Col span={6}>
          <Button>Add Condition</Button>
        </Col>
        <Col span={6}>
          <Button>Add Group</Button>
        </Col>
      </Row>
      <br />

      {/* <Condition /> */}
      <AddRemoveInputField />
    </div>
  );
}
