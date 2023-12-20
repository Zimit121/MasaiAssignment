function storeData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const userData = { name, age };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Clear form fields after storing data
        document.getElementById('userDataForm').reset();
    } else {
        alert('Please enter both name and age.');
    }
}

function retrieveData() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
        const userData = JSON.parse(userDataString);

        const displayArea = document.getElementById('displayArea');
        displayArea.innerHTML = `
            <table>
                <tr>
                    <th>Name</th>
                    <th>${userData.name}</th>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>${userData.age}</td>
                </tr>
            </table>
        `;
    } else {
        alert('No data found in Local Storage.');
    }
}
