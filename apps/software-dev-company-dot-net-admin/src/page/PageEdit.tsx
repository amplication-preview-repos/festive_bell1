import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="About" source="about" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Dashboard" source="dashboard" />
        <TextInput label="Home" source="home" />
        <BooleanInput label="IsAuthRequired" source="isAuthRequired" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
