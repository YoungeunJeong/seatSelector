const cinema = document.getElementById('cinema');
const seatList = document.getElementById('seat-list');
const rows = 10;
const cols = 10;

// Function to update the list of selected seats
function updateSeatList() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    seatList.innerHTML = '';
    selectedSeats.forEach(seat => {
        const seatLabel = seat.getAttribute('data-label');
        const listItem = document.createElement('li');
        listItem.textContent = seatLabel;
        seatList.appendChild(listItem);
    });
}
// Function to clear selected seats
function clearSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
    });
    updateSeatList();  // Update the list of selected seats
}

// Attach the clearSelectedSeats function to the Clear button
const clearButton = document.getElementById('clear-seats');
clearButton.addEventListener('click', clearSelectedSeats);

// Seat creation
for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    cinema.appendChild(row);

    for (let j = 0; j < cols; j++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        const seatLabel = String.fromCharCode('A'.charCodeAt(0) + i) + (j + 1);
        seat.setAttribute('data-label', seatLabel);
        seat.innerText = seatLabel;  // Label the seat
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
            seat.classList.innerText = "Selected";
            updateSeatList();
        });
        row.appendChild(seat);
    }
}