export const listComponents = [
    {
    controlType:"table",
    name:"Table",
    tableData:[
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
          },
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 19,
          Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
          },
        }]
    },
    {
        controlType:"menu",
        name:"Menu"
    },
    {
        controlType:"card",
        name:"Card"
    },
]
