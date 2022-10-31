export const webSearchUrl = [];

export let allData = [];

const modules = import.meta.glob("./new-list/*.js", { eager: true });
const arr = [];
Object.values(modules).forEach((val) => {
  const mods = val.default;
  const modList = [];

  for (const key in mods) {
    const element = mods[key];
    modList.push(element);
  }
  allData.push(...modList);
});

// console.log("allData -> :", allData);
