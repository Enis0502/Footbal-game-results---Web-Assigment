document.addEventListener("DOMContentLoaded", function () {
    fetch('../json/player-info.json')
        .then(response => response.json())
        .then(data => {
            const generatedContent = document.querySelector('.generated-content');
            data.forEach((player, index) => {
                const playerDiv = document.createElement('div');
                playerDiv.classList.add('player');
                playerDiv.setAttribute('data-id', index);

                playerDiv.innerHTML = `
                    <h2>${player.name}</h2>
                    <p>Age: <span class="age">${player.age}</span></p>
                    <p>Current Club: <span class="club">${player.currentClub}</span></p>
                    <p>Position: <span class="position">${player.position}</span></p>
                    <button class="edit-btn theme-switch" id="edit">Edit</button>
                    <button class="delete-btn theme-switch" id="delete">Delete</button>
                    <br><br>
                `;
                generatedContent.appendChild(playerDiv);
            });

            generatedContent.addEventListener("click", function (e) {
                if (e.target.classList.contains("delete-btn")) {
                    handleDelete(e.target);
                } else if (e.target.classList.contains("edit-btn")) {
                    handleEdit(e.target);
                }
            });
        })
        .catch(error => console.error('Error loading the JSON file:', error));

    function handleDelete(button) {
        const playerDiv = button.closest('.player');
        playerDiv.remove();
        toastr.success("Player stat deleted successfully!");;
    }

    function handleEdit(button) {
        const playerDiv = button.closest('.player');
        const name = playerDiv.querySelector('h2').textContent;
        const age = playerDiv.querySelector('.age').textContent;
        const club = playerDiv.querySelector('.club').textContent;
        const position = playerDiv.querySelector('.position').textContent;

        const newName = prompt("Edit Name:", name) || name;
        const newAge = prompt("Edit Age:", age) || age;
        const newClub = prompt("Edit Current Club:", club) || club;
        const newPosition = prompt("Edit Position:", position) || position;

        playerDiv.querySelector('h2').textContent = newName;
        playerDiv.querySelector('.age').textContent = newAge;
        playerDiv.querySelector('.club').textContent = newClub;
        playerDiv.querySelector('.position').textContent = newPosition;

        toastr.success("Player updated successfully!");
    }
});
