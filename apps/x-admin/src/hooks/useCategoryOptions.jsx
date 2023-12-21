import React, { useEffect, useState } from "react";
// import { getTreeList } from "@/api/category";

export default function useCategoryOptions(open) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
      // getTreeList().then((res) => {
      //   console.log('res.data -> :', res.data)
      //   setOptions(res.data);
      // });
  }, [open]);

  return options;
}
