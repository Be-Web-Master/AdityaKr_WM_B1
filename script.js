let table = document.querySelector("table");
let thead = document.querySelector("#thead");
let tbody = document.querySelector("#tbody");
let addColumn = document.querySelector("#addColumn");
let addRow = document.querySelector("#addRow");
let localStorageClear = document.getElementById("#localStorage");


tbody.addEventListener("keyup", (event) => {
  console.log(event.target);
});
thead.addEventListener("keyup", (event) => {
  console.log(event.target);
});

const key = "tableState";
const tableState = JSON.parse(localStorage.getItem(key)) ?? {
  header: [],
  body: [],
};

const clearUi = () => {
  thead.innerHTML = "";
  tbody.innerHTML = "";
};
createTableUI(tableState);


function updateTableData(tableState) {
  localStorage.setItem(key, JSON.stringify(tableState));
  createTableUI(tableState);
}


function clearLocalStorage() {
  localStorage.clear();
}


function addNewColumn(columnData) {
  console.log({ columnData });
  tableState.header.push(columnData);
  tableState.body.forEach((rowObject) => {
    rowObject.cellDetails.push({
      elementType: "td",
      columnNumber: "",
      rowNumber: 0,
      cellvalue: "",
    });
  });
  createTableUI(tableState);
}
addColumn.addEventListener("click", () =>
  addNewColumn({
    elementType: "th",
    columnNumber: "Column A",
    columnNumber: tableState.header.length,
    sort: undefined,
  })
);



function addNewRow(rowData) {
  tableState.header.forEach((headerObject) => {
    rowData.cellDetails.push({
      elementType: "td",
      columnNumber: headerObject.columnNumber+1,
      rowNumber: tableState.body.length+1,
      cellvalue: "",
    });
  });
  tableState.body.push(rowData);
  createTableUI(tableState);
}
addRow.addEventListener("click", () =>
  addNewRow({
    elementType: "tr",
    rowNumber: tableState.body.length + 1,
    cellDetails: [],
  })
);



function createTableUI(tableState) {
  clearUi();
  const Header = tableState.header;
  const Body = tableState.body;

  for (let i = 0; i < Header.length; i++) {
    const createTh = document.createElement(Header[i].elementType);
    const inputElem = createElementInput(`headcell`, `${i+1}`);
    createTh.append(inputElem);
    thead.append(createTh);
  }
  Body.forEach((tableRow) => {
    const { elementType, cellDetails } = tableRow;
    console.log(tableRow);
    const tr = document.createElement(elementType);
    cellDetails.forEach((cellElement) => {
      //   console.log({ cellElement });
      const tdElem = document.createElement(cellElement.elementType);
      // console.log(cellDetails);
      let columnNumber = cellElement.columnNumber;
      let rowNumber = cellElement.rowNumber;
      const inputElem = createElementInput("bodycell", cellElement ,rowNumber,columnNumber);
      tdElem.append(inputElem);
      tr.append(tdElem);
    });
    tbody.append(tr);
  });

  localStorage.setItem(key, JSON.stringify(tableState));
}

function createElementInput(cellType, idx, rowNumber, columnNumber) {
  const elementType = cellType === "headcell" ? "input" : "textarea";
  const inputElement = document.createElement(elementType);
  inputElement.value;
  if (cellType === "headcell") {
    inputElement.setAttribute("placeholder", "column Name");
    inputElement.setAttribute(`id`, `${idx}`);
  } else if (cellType === "bodycell") {
    inputElement.setAttribute("placeholder", "row Name");
    inputElement.setAttribute(`id`, `${rowNumber}-${columnNumber}`);
  }
  inputElement.setAttribute("type", "text");
  inputElement.style.padding = "8px";
  inputElement.style.borderRadius = "25PX";
  inputElement.style.border = "2px solid black";
  inputElement.style.textAlign = "center";
  return inputElement;
}

// function createColumnInput(columnNumber) {
//     const input = Object.assign(document.createElement("input"), {
//       id: `0-${columnNumber}`,
//       type: "text",
//       placeholder: "Enter Column",
//     });
//     return input;
//   }
  
//   function createRowInput(rowNumber, columnNumber) {
//       console.log(`${rowNumber}-${columnNumber}`)
//     const input = Object.assign(document.createElement("textarea"), {
//       id: `${rowNumber}-${columnNumber}`,
//       row: "10",
//       column: "10",
//       placeholder: "Enter row",
//     });
//     return input;
//   }