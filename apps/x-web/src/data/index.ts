let allData: any = [];
const modules = import.meta.globEager("./libs/*.ts");
Object.values(modules).forEach((val: any) => {
  const files = val;
  const mods = files.default;
  const modList = [];

  for (const key in mods) {
    const element = mods[key];
    allData.push(element);
  }
});

export const webSearchUrl = [];

export { allData };

// console.log("allData -> :", allData);
