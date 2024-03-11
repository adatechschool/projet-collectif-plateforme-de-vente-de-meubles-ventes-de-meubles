async function afficherUsers() {
    const reponse = await fetch("http://localhost:8080/users/read ");
    const users = await reponse.json();
    console.log(users);
  };
afficherUsers();