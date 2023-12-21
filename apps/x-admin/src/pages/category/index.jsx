import {
    ModalForm,
    ProFormCascader,
    ProFormText,
    ProFormTextArea,
    ProTable,
} from "@ant-design/pro-components";
import { Button, Form, message } from "antd";
import { useReactive } from "ahooks";
import useCategoryOptions from "@/hooks/useCategoryOptions";
import { list, save } from "@/api/category";
import React from "react";

const Index = () => {
    const state = useReactive({
        open: false,
        title: "新建分类",
        row: {},
    });

    const [messageApi, contextHolder] = message.useMessage();
    const opts = useCategoryOptions();

    const columns = [
        {
            dataIndex: "id",
            valueType: "indexBorder",
            width: 48,
        },
        {
            title: "标题",
            dataIndex: "title",
            copyable: true,
            ellipsis: true,
        },
        {
            title: "描述",
            dataIndex: "description",
            search: false,
        },
        {
            title: "上级分类",
            dataIndex: "pTitle",
            valueType: "cascader",
            fieldProps: {
                options: opts,
                fieldNames: {
                    label: "title",
                    value: "id",
                },
                changeOnSelect: true,
            },
        },

        {
            title: "操作",
            valueType: "option",
            key: "option",
            render: (text, record, _, action) => [
                <a
                    key="editable"
                    onClick={() => {
                        state.open = true;
                        state.title = "编辑分类";
                        state.row = record;
                        console.log("record -> :", record);
                        record.pId = record.fullIds.split("-").map((item) => Number(item));
                        if (record.pId.length > 1) {
                            record.pId.pop();
                        } else {
                            record.pId = [];
                        }
                        form.setFieldsValue(record);
                    }}
                >
                    编辑
                </a>,
                <a key="view">删除</a>,
                // <TableDropdown
                //   key="actionGroup"
                //   onSelect={() => action?.reload()}
                //   menus={[
                //     { key: "copy", name: "复制" },
                //     { key: "delete", name: "删除" },
                //   ]}
                // />,
            ],
        },
    ];

    const baseTable = React.useRef(null);

    const config = {
        columns,

        rowKey: "id",
        options: false,
        size: "middle",

        dateFormatter: "string",

        actionRef: baseTable,

        search: {
            labelWidth: 100,
            collapsed: false,
            defaultCollapsed: false,
            collapseRender: () => "",
            optionRender: (searchConfig, formProps, dom) => {
                return [...dom.reverse()];
            },
            className: "search-table",
        },

        request: async (params = {}, sort, filter) => {
            if (params?.pTitle?.length) {
                params.pId = params.pTitle[params.pTitle.length - 1];
                delete params.pTitle;
            }
            console.log("params -> :", params);
            return list(params);
        },

        headerTitle: [
            <Button
                key="3"
                type="primary"
                onClick={() => {
                    state.open = true;
                    state.title = "新建分类";
                }}
            >
                新增
            </Button>,

            <Button
                key="4"
                type=""
            >
                导入
            </Button>,
        ],
    };

    const [form] = Form.useForm();

    return (
        <>
            {contextHolder}

            <ProTable {...config} />

            <ModalForm
                title={state.title}
                open={state.open}
                form={form}
                autoFocusFirstInput
                size="middle"
                modalProps={{
                    destroyOnClose: true,
                    forceRender: true,
                    maskClosable: false,
                    preserve: false,
                    onCancel: () => {
                        state.open = false;
                        state.row = {};
                        form.resetFields();
                    },
                }}
                onFinish={async (values) => {
                    values.pId = values.pId ? values.pId[values.pId.length - 1] : 0;
                    if (state.row.id) {
                        values.id = state.row.id;
                    }
                    console.log("values -> :", values);
                    const res = await save(values);
                    if (res.code !== 200) {
                        messageApi.error(res.message);
                        return false;
                    }
                    messageApi.success("提交成功");
                    state.open = false;
                    state.row = {};
                    baseTable.current.reload();
                    return true;
                }}
            >
                <ProFormText
                    width="100%"
                    name="title"
                    label="分类名称"
                    placeholder="请输入分类名称"
                    initialValues={state.row.title}
                    rules={[
                        {
                            required: true,
                            message: "请输入分类名称",
                        },
                    ]}
                />

                <ProFormCascader
                    width="100%"
                    name="pId"
                    label="关联分类"
                    placeholder="请选择网站分类"
                    rules={
                        [
                            // {
                            //   required: true,
                            //   message: "请选择网站分类",
                            // },
                        ]
                    }
                    fieldProps={{
                        options: opts,
                        fieldNames: {
                            label: "title",
                            value: "id",
                        },
                        changeOnSelect: true,
                    }}
                />

                <ProFormTextArea
                    width="100%"
                    name="description"
                    initialValues={state.row.description}
                    label="分类描述"
                    placeholder="请分类描述"
                />
            </ModalForm>
        </>
    );
};

export default Index;
