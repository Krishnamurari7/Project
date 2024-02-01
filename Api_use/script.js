async function apiuse() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.json();
  // console.log(result);
document.getElementById("userData").innerHTML = result.map((user) => 
        `<tr>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.username}</td>
        <td>${user.website}</td>
        <td>${user.email}</td>
        </tr>`
        )
 .join("");
};

apiuse();