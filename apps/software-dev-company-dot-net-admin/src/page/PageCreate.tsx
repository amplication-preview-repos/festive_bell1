import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="About" source="about" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Dashboard" source="dashboard" />
        <TextInput label="Home" source="home" />
        <BooleanInput label="IsAuthRequired" source="isAuthRequired" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
