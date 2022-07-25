const whole = document.querySelector('#whole');

function creategrid(columns,rows) {
    for (let columnstart=1;columnstart<=columns;++columnstart) {
        createcolumn(columnstart);

        for (let rowstart=1;rowstart<=rows;++rowstart) {
            createrow(columnstart, rowstart)
        }
    }
    
};

function createrow(columnid,rowi) {
    const columni = document.querySelector(`#column${columnid}`);
    const row = document.createElement('div');
    row.setAttribute('id', `row${rowi}`)
    row.classList.add('row');
    // row.textContent='x';
    columni.appendChild(row);
}
function createcolumn(columni) {
    const column = document.createElement('div');
    column.setAttribute('id', `column${columni}`);
    column.classList.add('column');
    // column.textContent='beepboop';
    whole.appendChild(column);
}

creategrid(16,16);
const selectRow = document.querySelectorAll(".row");
selectRow.forEach(rowhover => {
    rowhover.addEventListener('mouseenter', function hover(event) {
    event.target.classList.add('bg-black');
})
});

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let squares=prompt('How many squares on each side of the grid? (100 max)',
     16);
    if (squares != null && squares<=100) {
        removeAllChildNodes(whole)
        creategrid(squares, squares);
    };
    const selectRow = document.querySelectorAll(".row");
    selectRow.forEach(rowhover => {
    rowhover.addEventListener('mouseenter', function hover(event) {
    event.target.classList.add('bg-black');
})
});
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
