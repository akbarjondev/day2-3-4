export const getData = async () => {
  try {
    const rawData = await fetch("https://pressa-exem.herokuapp.com/category");
    const data = await rawData.json();

    return data;
  } catch (error) {}
};

export const addCategory = async (catName) => {
  try {
    const rawData = await fetch("https://pressa-exem.herokuapp.com/category", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        categoryName: catName,
      }),
    });
    const data = await rawData.json();

    return data;
  } catch (error) {
  } finally {
  }
};
