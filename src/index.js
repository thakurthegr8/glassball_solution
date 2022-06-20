import React from "react";
import { render } from "react-dom";
import Color from "./examples/color";
import ConvertFromHtml from "./examples/ConvertFromHtml";
import Entity from "./examples/Entity";
import Link from "./examples/Link";
import Media from "./examples/Media";
import PlainText from "./examples/PlainText";
import Rich from "./examples/Rich";
import Tweet from "./examples/Tweet";

import "antd/dist/antd.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const App = () => (
  <div>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tweet" key="1">
        <Tweet />
      </TabPane>
      <TabPane tab="Rich" key="12300">
        <Rich />
      </TabPane>
      <TabPane tab="Color" key="100">
        <Color />
      </TabPane>
      <TabPane tab="Convert From Html" key="2">
        <ConvertFromHtml />
      </TabPane>
      <TabPane tab="Entity" key="3">
        <Entity />
      </TabPane>
      <TabPane tab="Link" key="4">
        <Link />
      </TabPane>
      <TabPane tab="Media" key="5">
        <Media />
      </TabPane>
      <TabPane tab="PlainText" key="6">
        <PlainText />
      </TabPane>
    </Tabs>
  </div>
);

render(<App />, document.getElementById("root"));
