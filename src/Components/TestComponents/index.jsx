import React from "react";
import { Button, Typography } from "../index";

export const TestComponents = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <Typography text="This is a sample text" type="important" color="white" />
      <Typography text="This is a sample text" type="important" color="primary" />
      <Typography text="This is a sample text" type="important" color="secondary" />
      <Typography text="This is a sample text" type="big" color="white" />
      <Typography text="This is a sample text" type="big" color="primary" />
      <Typography text="This is a sample text" type="big" color="secondary" />
      <Typography text="This is a sample text" type="title" color="white" />
      <Typography text="This is a sample text" type="title" color="primary" />
      <Typography text="This is a sample text" type="title" color="secondary" />
      <Typography text="This is a sample text" type="subtitle" color="white" />
      <Typography text="This is a sample text" type="subtitle" color="primary" />
      <Typography text="This is a sample text" type="subtitle" color="secondary" />
      <Typography text="This is a sample text" type="p1" color="white" />
      <Typography text="This is a sample text" type="p1" color="primary" />
      <Typography text="This is a sample text" type="p1" color="secondary" />
      <Typography text="This is a sample text" type="p2" color="white" />
      <Typography text="This is a sample text" type="p2" color="primary" />
      <Typography text="This is a sample text" type="p2" color="secondary" />

      <Button text="Button" color="primary" />
      <Button text="Button" color="secondary" />
      <Button text="Button" color="danger" />
      <Button text="Button" color="primary" size="sm" />
      <Button text="Button" color="secondary" size="sm" />
      <Button text="Button" color="danger" size="sm" />
      <Button text="Button" color="primary" outlined />
      <Button text="Button" color="secondary" outlined />
      <Button text="Button" color="danger" outlined />
      <Button text="Button" color="primary" size="sm" outlined />
      <Button text="Button" color="secondary" size="sm" outlined />
      <Button text="Button" color="danger" size="sm" outlined />
      <Button text="Button" color="primary" disabled />
      <Button text="Button" color="secondary" disabled />
      <Button text="Button" color="danger" disabled />
      <Button text="Button" color="primary" size="sm" disabled />
      <Button text="Button" color="secondary" size="sm" disabled />
      <Button text="Button" color="danger" size="sm" disabled />
      <Button text="Button" color="primary" disabled outlined />
      <Button text="Button" color="secondary" disabled outlined />
      <Button text="Button" color="danger" disabled outlined />
      <Button text="Button" color="primary" size="sm" disabled outlined />
      <Button text="Button" color="secondary" size="sm" disabled outlined />
      <Button text="Button" color="danger" size="sm" disabled outlined />
    </div>
  );
};
