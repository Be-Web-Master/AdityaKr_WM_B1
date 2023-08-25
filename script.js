let table = document.querySelector("table");
let thead = document.querySelector("#thead");
let tbody = document.querySelector("#tbody");
let addColumn = document.querySelector("#addColumn");
let addRow = document.querySelector("#addRow");

const dataStore = {
  header: [
    { elementType: "th", columnName: "Colunm A", columnorder: 1, sort: undefined },
    { elementType: "th", columnName: "Colunm B", columnorder: 1, sort: undefined },
    { elementType: "th", columnName: "Colunm C", columnorder: 1, sort: undefined },
  ],
  body: [
    {
      elementType: "tr",
      rowOrder: 1,
      columnElems:[
        { elementType: "td", columnName: "ColunmA", rowOrder: "1", value: "Row1" },
        {elementType: "td", columnName: "ColunmB", rowOrder: "2", value: "Row2" },
        {elementType: "td", columnName: "ColunmC", rowOrder: "3", value: "Row3" },
      ],
    },
    {
        elementType: "tr",
        rowOrder: 2,
        columnElems:[
          { elementType: "td", columnName: "Colunm A", rowOrder: "1", value: "Row1" },
          {elementType: "td", columnName: "ColunmB", rowOrder: "2", value: "Row2" },
          {elementType: "td", columnName: "ColunmC", rowOrder: "3", value: "Row3" },
        ],
      },
      {
        elementType: "tr",
        rowOrder: 3,
        columnElems:[
          { elementType: "td", columnName: "ColunmA", rowOrder: "1", value: "Row1" },
          {elementType: "td", columnName: "ColunmB", rowOrder: "2", value: "Row2" },
          {elementType: "td", columnName: "ColunmC", rowOrder: "3", value: "Row3" },
        ],
      },
  ],
};

function createcolumn() {
  let th = document.createElement("th");
  const colunmCount = thead.childElementCount;
  th.innerText = `column ${colunmCount + 1}`;
  thead.append(th);
  if (tbody.childElementCount) {
    for (const elem of tbody.children) {
      const td = document.createElement("td");
      elem.appendChild(td);
      td.append(createInput());
    }
  }
}
function createRow() {
  let newRow = document.createElement("tr");
  tbody.appendChild(newRow);
  for (let i = 1; i <= thead.children.length; i++) {
    const td = document.createElement("td");
    newRow.appendChild(td);
    td.append(createInput());
  }
}

function createInput() {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "enter your text");
  // input.className = "HII"
  input.style.padding = "8px";
  input.style.borderRadius = "50px";
  return input;
}

function dataStore1(){
   const Header = dataStore.header;
   const Body =dataStore.body;
   thead.innerHtml='';
   tbody.innerHTML='';
   for(let i = 0; i<Header.length; i++){
        const createTh = document.createElement(Header[i].elementType);
        createTh.innerText = Header[i].columnName
        thead.append(createTh)
   }
   Body.forEach((tableRow)=>{
    const {elementType , columnElems} = tableRow;
    const tr = document.createElement(elementType);
    columnElems.forEach((cellElement)=>{
        const tdElem = document.createElement(cellElement.elementType);
        tdElem.innerText=cellElement.value;
        tr.append(tdElem)
    })
    tbody.append(tr);
   })
}
dataStore1()