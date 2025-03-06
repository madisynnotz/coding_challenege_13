// Task 2: Adding Employee Cards Dynamically
function addEmployeeCard(name, position) {
    // Create employee card element
    const card = document.createElement('div');
    card.className = 'employee-card';

    // Add employee name
    const nameElement = document.createElement('h2');
    nameElement.innerText = name;
    card.appendChild(nameElement);

    // Add employee position
    const positionElement = document.createElement('p');
    positionElement.innerText = position;
    card.appendChild(positionElement);

    // Add remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerText = 'Remove';
    card.appendChild(removeBtn);

    // Add event listener to remove button
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        card.remove();
    });

    // Add inline editing feature to card
    enableInlineEditing(card);

    // Append employee card to container
    document.getElementById('employeeContainer').appendChild(card);
}

// Add event listener for "Add Employee" button
const addEmployeeBtn = document.getElementById('addEmployee');
addEmployeeBtn.addEventListener('click', () => {
    addEmployeeCard('Jane Doe', 'Manager'); // Example employee
});

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function bulkUpdateCards() {
    // Select all employee cards and convert NodeList to array
    const cards = Array.from(document.querySelectorAll('.employee-card'));

    // Apply styling updates to each card
    cards.forEach(card => {
        card.style.backgroundColor = '#e3f2fd';
        card.style.border = '1px solid #2196f3';
    });
}
