import {
    ModalForm,
    ProFormCascader,
    ProFormRadio,
    ProFormText,
    ProFormTextArea,
    ProTable,
} from "@ant-design/pro-components";
import { deletes, list, save } from "@/api/site";
import { Button, Form, message, Modal } from "antd";
import { useReactive } from "ahooks";
import React from "react";
import useCategoryOptions from "@/hooks/useCategoryOptions";

const SitePage = () => {
    const [opts] = useCategoryOptions();

    const [form] = Form.useForm();

    const baseTable = React.useRef(null);

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
            title: "网站分类",
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
            title: "描述",
            dataIndex: "description",
            search: false,
        },
        {
            title: "状态",
            dataIndex: "state",
            ellipsis: true,
            valueType: "select",
            valueEnum: {
                0: { text: "停用", status: "0" },
                1: { text: "启用", status: "1" },
            },
        }, // {
        //     disable: true,
        //     title: "标签",
        //     dataIndex: "labels",
        //     search: false,
        //     renderFormItem: (_, {defaultRender}) => {
        //         return defaultRender(_);
        //     },
        //     render: (_, record) => (
        //         <Space>
        //             {record.labels.map(({name, color}) => (
        //                 <Tag color={color} key={name}>
        //                     {name}
        //                 </Tag>
        //             ))}
        //         </Space>
        //     ),
        // },

        {
            title: "操作",
            valueType: "option",
            key: "option",
            render: (text, record, _, action) => [
                <a
                    key="editable"
                    onClick={() => {
                        state.open = true;
                        state.title = "编辑网站";
                        state.row = record;
                        console.log("record -> :", record);

                        record.pId = record.fullId.split("-").map((item) => Number(item));
                        if (record.pId.length > 1) {
                            record.pId.shift();
                        }
                        form.setFieldsValue(record);
                    }}
                >
                    编辑
                </a>,
                // <a
                //     key="del"
                //     onClick={() => {
                //         Modal.confirm({
                //             title: "确认删除？",
                //             content: "是否确认删除该数据",
                //             onOk: () => {
                //                 deletes({ ids: record.id }).then((res) => {
                //                     console.log("res", res);
                //                     if (res.code === 200) {
                //                         baseTable?.current?.reload();
                //                     }
                //                 });
                //             },
                //             onCancel() {
                //                 console.log("Cancel");
                //             },
                //         });
                //     }}
                // >
                //     删除
                // </a>,
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
                    state.title = "新增网站";
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

    const state = useReactive({
        open: false,
        title: "新建网站",
        row: {},
    });

    return (
        <>
            <ProTable {...config} />

            <ModalForm
                title={state.title}
                open={state.open}
                form={form}
                autoFocusFirstInput
                size="middle"
                modalProps={{
                    destroyOnClose: true,
                    maskClosable: false,
                    forceRender: true,
                    preserve: false,
                    onCancel: () => {
                        state.open = false;
                        state.row = {};
                        form.resetFields();
                    },
                }}
                onFinish={async (values) => {
                    values.pId = values.pId ? values.pId[values.pId.length - 1] : 0;
                    if (state?.row?.id) {
                        values.id = state.row.id;
                    }
                    console.log("values -> :", values);

                    const res = await save(values);
                    if (res.code !== 200) {
                        message.error(res.message);
                        return false;
                    }
                    message.success("提交成功");
                    state.open = false;
                    state.row = {};
                    baseTable.current.reload();
                    return true;
                }}
            >
                <ProFormText
                    width="100%"
                    name="title"
                    label="网站名称"
                    placeholder="请输入网站名称"
                    rules={[
                        {
                            required: true,
                            message: "请输入网站名称",
                        },
                    ]}
                />
                <ProFormText
                    width="100%"
                    name="url"
                    label="网站访问链接"
                    placeholder="请输入网站访问链接"
                    rules={[
                        {
                            required: true,
                            message: "请输入网站访问链接",
                        }, // {
                        //   type: "url",
                        //   message: "请输入正确的网站访问链接",
                        // },
                    ]}
                />

                <ProFormCascader
                    width="100%"
                    name="pId"
                    label="关联分类"
                    placeholder="请选择网站分类"
                    rules={[
                        {
                            required: true,
                            message: "请选择网站分类",
                        },
                    ]}
                    fieldProps={{
                        options: opts,
                        fieldNames: {
                            label: "title",
                            value: "id",
                        },
                        changeOnSelect: true,
                    }}
                />

                <ProFormText
                    width="100%"
                    name="sort"
                    label="图标排序"
                    placeholder="请输入在该分类下的排序"
                    rules={[
                        {
                            required: true,
                            message: "请输入在该分类下的排序",
                        },
                    ]}
                />

                <ProFormText
                    width="100%"
                    name="icon"
                    label="图标链接"
                    placeholder="请输入图标链接"
                    rules={
                        [
                            // {
                            //   type: "url",
                            //   message: "请输入正确的图标链接",
                            // },
                        ]
                    }
                />

                <ProFormTextArea
                    width="100%"
                    name="description"
                    label="网站描述"
                    placeholder="请输入描述"
                />

                <ProFormRadio.Group
                    name="state"
                    label="是否启用"
                    initialValue={1}
                    options={[
                        {
                            label: "是",
                            value: 1,
                        },
                        {
                            label: "否",
                            value: 0,
                        },
                    ]}
                />
            </ModalForm>
        </>
    );
};

export default SitePage;
