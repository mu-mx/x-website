export const get = (url) =>
    fetch(url)
        .then((response) => {
            // network failure, request prevented
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }

            return Promise.reject(new Error(response.statusText));
        })
        .then((response) => response.json())
        .then((result) => result)
        .catch((error) => {
            console.log("error - >:", error);
            return [];
        });

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

export const getDataBase = async () => {
    const categoryData = await get(
        "https://raw.githubusercontent.com/mu-mx/site-database/main/category.json"
    );
    const websiteData = await get(
        "https://raw.githubusercontent.com/mu-mx/site-database/main/website.json"
    );
    const categoryMap = {};
    categoryData.forEach((item) => {
        item.children = [];
        categoryMap[item.id] = item;
    });

    websiteData.forEach((item) => {
        if (categoryMap[item.pId]) {
            categoryMap[item.pId].children.push(item);
        }
    });

    return mapToTree(categoryData);
};
