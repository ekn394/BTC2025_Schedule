function lockCard(session){

    if (session.classList.contains("selected")){
		session.classList.remove("selected");
        return false;
	}

    session.classList.add("selected");
}

const tableCells = document.querySelectorAll('td');

    // Load selected cells from local storage
    function loadSelectedCells() {
        const selectedCells = JSON.parse(localStorage.getItem('selectedCells')) || [];
        selectedCells.forEach(index => {
            if (tableCells[index]) {
                tableCells[index].classList.add('selected');
            }
        });
    }

    // Save selected cells to local storage
    function saveSelectedCells() {
        const selectedCells = Array.from(tableCells)
            .map((cell, index) => cell.classList.contains('selected') ? index : null)
            .filter(index => index !== null);
        localStorage.setItem('selectedCells', JSON.stringify(selectedCells));
    }

    // Toggle selected class on click
    tableCells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            cell.classList.toggle('selected');
            saveSelectedCells();
        });
    });

    // Load the state when the page loads
    loadSelectedCells();

    function clearLocalStorage() {
        localStorage.removeItem("selectedCells");
        location.reload();
    }