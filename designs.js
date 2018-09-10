// Access the pixel canvas area in the DOM
const grid = document.getElementById("pixel_canvas");

const sizeForm = document.getElementById("sizePicker");

// When size is submitted by the user, get size input & call makeGrid()
sizeForm.addEventListener('submit', function() {
    event.preventDefault();
    // Access the size picker input , set up storage for grid height and width input from user
    let height = null;
    let width = null;
    height = document.getElementById("input_height").value;
    width = document.getElementById("input_width").value;
    //Clear previous table before building a new one
    grid.innerHTML = "";
    makeGrid(height, width);
})


// Obtain color input from color picker (default matches UI)
let newColor = "black";
$('#colorPicker').on('change', function() {
    newColor = $('#colorPicker').val();
});


// Function to set up the design canvas grid 
function makeGrid(height, width) {
    for (i = 0; i < height; i++) {
        let row = grid.insertRow(i);
        let j = 0;
        while (j < width) {
            let cell = row.insertCell(0);
            j++;
        }
    }

    //Traverse the table and change bkg for clicked cells
    const cellEvents = function() {
        console.log("grid", grid);
        for (let i = 0; i < grid.rows.length; i++) {
            for (let j = 0; j < grid.rows[i].cells.length; j++) {

                let cell = grid.rows[i].cells[j];
                cell.onclick = function() {
                    cell.style.backgroundColor = newColor;
                }
            }
        }
    }

    cellEvents();

}