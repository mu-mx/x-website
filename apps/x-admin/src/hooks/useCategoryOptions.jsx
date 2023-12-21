import React, { useEffect, useState } from "react";
import { getTreeList } from "@/api/category";

const mapToTree = (data) => {
    const res = [];
    const map = {};
    data.forEach((item) => {
        map[item.id] = item;
    });
    data.forEach((item) => {
        const parent = map[item.pId];
        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            res.push(item);
        }
    });
    return res;
};

export default function useCategoryOptions() {
    const [options, setOptions] = useState([]);

    const [state, setState] = useState(1);

    useEffect(() => {
        getTreeList().then((res) => {
            const treeList = mapToTree(res.data);
            setOptions(treeList);
        });
    }, [state]);

    const changeState = () => {
        setState((state) => state + 1);
    };

    return [options, changeState];
}
