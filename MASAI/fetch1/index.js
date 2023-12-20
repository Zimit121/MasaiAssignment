document.getElementById("userbtn").addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(masai => {
            let output = ""
            console.log(masai.data)
            masai.data.forEach(ele => {
                output += `
                <br>
                    <div class="Users">
                    <img src="${ele.avatar}" alt="userAvatar">
                    <div class="userDetails">
                        <span class="name"> Name: ${ele.first_name}</span><br>
                        <span class="email">Email: ${ele.email}</span>
                    </div>
                    </div>
            `
            });
            document.getElementById("userLists").innerHTML = output;
        })
        .catch(error => {
            console.log("Something went wrong",error)
        })
}