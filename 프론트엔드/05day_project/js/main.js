const columnDefs = [
  { field: 'no', headerName: '도감 번호' },
  { field: 'name', headerName: '이름' },
  { field: 'id', headerName: '죄수 번호' },
  { field: 'part', headerName: '소속' },
];

// specify the data
const rowData = [
  { no: '1', name: '예몬', id: 2020073, part: '괴인협회' },
  { no: '2', name: '최D수', id: 2022073, part: '예몬컴퍼니' },
  { no: '3', name: '스컬예몬', id: 2020073, part: '괴인협회' },
  { no: '4', name: '히스테리몬', id: 2020073, part: '괴인협회' },
  { no: '5', name: '킹콩예몬', id: 2020073, part: '괴인협회' },
];

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);
});
