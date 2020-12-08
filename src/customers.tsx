import React from 'react';
import {
    List,
    Filter,
    Datagrid,
    TextInput,
    TextField,
    DateField,
    BooleanField,
    Show,
    TabbedShowLayout,
    Tab,
    ReferenceManyField,
    TopToolbar,
    ListButton,
    ReferenceField
} from 'react-admin';

const CustomerFilter = (props: object) => (
    <Filter {...props}>
        <TextInput label="Search by Name" source="name" alwaysOn />
    </Filter>
);

export const CustomerList = (props: object) => (
    <List filters={<CustomerFilter />} bulkActionButtons={false} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="displayName" />
            <TextField source="companyName" />
            <ReferenceField source="parentCompany" reference="customers">
                <TextField source="displayName" />
            </ReferenceField>
        </Datagrid>
    </List>
);

const CustomerTitle = ({ record }: { record?: {displayName: string}}) => {
    return <span>Customer: {record ? `${record.displayName}` : ''}</span>;
};

const CustomerShowActions = ({ basePath, data }: { basePath?: string, data?: object}) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data} label="Back" />
    </TopToolbar>
);

export const CustomerShow = (props: object) => (
    <Show title={<CustomerTitle />} actions={<CustomerShowActions />} {...props}>
        <TabbedShowLayout>
            <Tab label="summary">
            <TextField source="id" />
            <TextField source="displayName" />
            <TextField source="companyName" />
            </Tab>
        </TabbedShowLayout>
    </Show>
);

/* export const CustomerShow = (props: object) => (
    <Show title={<CustomerTitle />} actions={<CustomerShowActions />} {...props}>
        <TabbedShowLayout>
            <Tab label="summary">
                <TextField source="id" />
                <TextField source="name" />
                <DateField label="Created At" source="created_at" />
            </Tab>
            <Tab label="todos" path="todos">
                <ReferenceManyField reference="todos" target="user_id" addLabel={false}>
                    <Datagrid rowClick="edit">
                        <TextField source="id" label="Todo Id" />
                        <TextField source="title" />
                        <BooleanField source="is_completed" label="Completed?" />
                        <DateField source="created_at" />
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
); */