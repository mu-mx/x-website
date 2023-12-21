import { useState } from "react";

import { Button, Input, message } from "antd";
import { userAuth } from "@/api";
import { history } from "umi";

function getUuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

const DocsPage = () => {
    const [token, setToken] = useState<string>("");

    return (
        <>
            <Input
                value={token}
                onChange={({ target: { value: val } }) => {
                    setToken(val);
                }}
                placeholder="Basic usage"
            />

            <Button
                type="primary"
                onClick={async () => {
                    localStorage.setItem("token", `${token}-${getUuid()}`);

                    const res = await userAuth();

                    if (res.code == 200) {
                        history.push("/");
                        return;
                    }

                    message.error(res.msg);
                }}
            >
                验证
            </Button>
        </>
    );
};

export default DocsPage;
