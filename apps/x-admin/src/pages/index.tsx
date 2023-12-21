import yayJpg from "../assets/yay.jpg";
import { Button, Modal } from "antd";
import { useEffect } from "react";
import { userAuth } from "@/api";

export default function HomePage() {
    const getList = async () => {
        await userAuth();
    };

    useEffect(() => {
        getList();
    }, []);
    return <>666</>;
}
