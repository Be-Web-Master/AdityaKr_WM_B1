const search = document.getElementById("search");
const sort = document.getElementById("sort");
const Close = document.getElementById("close");
const SearchingSortingFunction = document.querySelector("#Searching-sorting-function");
const sortFrom = document.querySelector("#sort-from");
const searchingFrom = document.querySelector("#searching-from")
let table = document.querySelector("table");
let thead = document.querySelector("#thead");
let tbody = document.querySelector("#tbody");
let addColumn = document.querySelector("#addColumn");
let addRow = document.querySelector("#addRow");
let columndropdown = document.querySelector(".column-dropdown");
// let sortOrder = document.querySelector(".")
let localStorageClear = document.getElementById("#localStorage");
const key = "tableState";
search.addEventListener('click',() => {
  SearchingSortingFunction.style.top="15%";
})
Close.addEventListener('click',()=>{
  SearchingSortingFunction.style.top="-15%";
})

const tableState = JSON.parse(localStorage.getItem(key)) ?? {
  header: [],
  body: [],
};


function createSortingFormElement() {
  tableState.header.forEach((columnHeader) => {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", columnHeader.columnName);
    optionElement.innerHTML = columnHeader.columnName;
    columndropdown.append(optionElement);
  });
}
tableState.header.length &&
  tableState.body.length &&
  createSortingFormElement();

const sortForm = document.getElementById("sort-from");
sortForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedColumnName = e.target.columnDropdown.value;
  const sortOrder = e.target.sort.value;
  const columnNumber = tableState.header.find(
    (headerObj) => headerObj.columnName === selectedColumnName
  ).columnNumber;
  if (sortOrder === "Acending") {
    tableState.body.sort((obj1, obj2) => {
      console.log({ obj1: (obj2.cellDetails[columnNumber].cellvalue) });
      if (
        (obj1.cellDetails[columnNumber].cellvalue) >
        (obj2.cellDetails[columnNumber].cellvalue)
      )
        return 1;
      else return -1;
    });
  } else {
    tableState.body.sort((obj1, obj2) => {
      console.log({ obj1: (obj2.cellDetails[columnNumber].cellvalue) });
      if (
        (obj1.cellDetails[columnNumber].cellvalue) >
        (obj2.cellDetails[columnNumber].cellvalue)
      )
      return -1;
      else return 1;
    });
  }
  updateTableData(tableState);
});


tbody.addEventListener("keyup", (event) => {
  console.log(event.target.id);
  const [isbody, rowIndex, columnIndex] = event.target.id.split("-");
  console.log({
    tableState: (tableState.body[rowIndex].cellDetails[columnIndex].cellvalue =
      event.target.value),
  });
  localStorage.setItem(key, JSON.stringify(tableState));
});

thead.addEventListener("keyup", (event) => {
  console.log(event.target.id);
  const [ishead, rowIndex, columnIndex] = event.target.id.split("-");
  tableState.header[columnIndex].columnName = event.target.value;
  localStorage.setItem(key, JSON.stringify(tableState));
});
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
  tableState.body.forEach((rowObject, idx) => {
    rowObject.cellDetails.push({
      elementType: "td",
      columnNumber: columnData.columnNumber,
      rowNumber: idx,
      cellvalue: "",
    });
  });
  createTableUI(tableState);
}
addColumn.addEventListener("click", () =>
  addNewColumn({
    elementType: "th",
    columnNumber: tableState.header.length,
    sort: undefined,
    columnName: "",
  })
);


function addNewRow(rowData) {
  tableState.header.forEach((headerObject, idx) => {
    rowData.cellDetails.push({
      elementType: "td",
      columnNumber: idx,
      rowNumber: rowData.rowNumber,
      cellvalue: "",
    });
  });
  tableState.body.push(rowData);
  createTableUI(tableState);
}
addRow.addEventListener("click", () =>
  addNewRow({
    elementType: "tr",
    rowNumber: tableState.body.length,
    cellDetails: [],
  })
);

function createTableUI(tableState) {
  clearUi();
  const Header = tableState.header;
  const Body = tableState.body;

  for (let i = 0; i < Header.length; i++) {
    const createTh = document.createElement(Header[i].elementType);
    const inputElem = createElementInput(`headcell`,"",`head-0-${Header[i].columnNumber}`);
    inputElem.value = Header[i].columnName;
    createTh.append(inputElem);
    thead.append(createTh);
  }
  Body.forEach((tableRow) => {
    const { elementType, cellDetails } = tableRow;
    console.log(tableRow);
    const tr = document.createElement(elementType);
    cellDetails.forEach((cellElement, idx) => {
      // console.log({ cellElement });
      const tdElem = document.createElement(cellElement.elementType);
      // console.log(cellDetails);
      let columnNumber = cellElement.columnNumber;
      let rowNumber = cellElement.rowNumber;
      const inputElem = createElementInput(
        "bodycell",
        "",
        `body-${rowNumber}-${columnNumber}`
      );
      inputElem.value = cellElement.cellvalue;
      tdElem.append(inputElem);
      tr.append(tdElem);
    });
    tbody.append(tr);
  });

  localStorage.setItem(key, JSON.stringify(tableState));
}

function createElementInput(cellType, value, id) {
  const elementType = cellType === "headcell" ? "input" : "textarea";
  const inputElement = document.createElement(elementType);
  inputElement.value = value;
  inputElement.setAttribute(`id`, id);
  //   console.log(cellElement);
  if (cellType === "headcell") {
    inputElement.setAttribute("placeholder", "column Name");
  } else if (cellType === "bodycell") {
    inputElement.setAttribute("placeholder", "row Name");
  }
  inputElement.setAttribute("type", "text");
  inputElement.style.border = "none";
  inputElement.style.textAlign = "center";
  inputElement.style.color='Black',
  inputElement.style.fontWeight='bold'
  inputElement.style.fontSize='16px'
  inputElement.style.padding = "22px";
  return inputElement;
}
