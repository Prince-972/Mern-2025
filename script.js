        var details =async () =>{
            var responce = await fetch ('https://dummyjson.com/users');
            var users = await responce.json();
            console.log(users);
        }
        details()