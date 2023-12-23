import React from "react";

import {
    Button,
    Col,
    Row,
    Input,
    Select,
    Card,
    Tabs,
    Collapse,
    theme,
    Avatar,
    Radio,
    Tooltip,
} from "antd";

import { SearchOutlined, CaretRightOutlined } from "@ant-design/icons";

const ClickableCard = ({ icon, title, description, url }) => {
    return (
        <>
            <Tooltip
                placement="top"
                title={description}
            >
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Card
                        hoverable
                        bodyStyle={{
                            padding: "12px 8px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {icon ? (
                            <Avatar
                                style={{
                                    verticalAlign: "middle",
                                }}
                                size="large"
                                src={icon}
                            />
                        ) : (
                            <Avatar
                                style={{
                                    verticalAlign: "middle",
                                }}
                                size="large"
                            >
                                X
                            </Avatar>
                        )}
                        <div className="ml-1 truncate flex-1">
                            <p className="truncate ">{title}</p>
                            <p className="truncate ">{description}</p>
                        </div>
                    </Card>
                </a>
            </Tooltip>
        </>
    );
};

const getItems = (panelStyle, data) => {
    return data.map((it, key) => ({
        key,
        label: it.title,
        children: (
            <>
                <Row gutter={[10, 16]}>
                    {it.children.map((it, index) => (
                        <Col
                            xs={24}
                            sm={24}
                            md={12}
                            lg={8}
                            xl={6}
                            xxl={4}
                            key={index}
                        >
                            <ClickableCard {...it} />
                        </Col>
                    ))}
                </Row>
            </>
        ),
        style: panelStyle,
    }));
};

function CardItem({ data }) {
    const { token } = theme.useToken();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: "none",
    };

    const defaultAllKey = new Array(30).fill(0).map((it, ind) => ind);

    return (
        <Collapse
            bordered={false}
            defaultActiveKey={defaultAllKey}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{
                background: token.colorBgContainer,
            }}
            items={getItems(panelStyle, data)}
        />
    );
}

export default CardItem;
