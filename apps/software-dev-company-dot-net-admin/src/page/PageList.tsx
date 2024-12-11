import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="About" source="about" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Dashboard" source="dashboard" />
        <TextField label="Home" source="home" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsAuthRequired" source="isAuthRequired" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
