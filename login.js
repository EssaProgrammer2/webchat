function setlocalstorage(name, valuess){
    const xdxdlololol = window.localStorage.setItem(name, valuess)
    return xdxdlololol
}

document.getElementById("loginbtn").addEventListener("click", () => {
fetch('https://07ad9488-0f71-4960-8b36-a357e97d0a73-00-259lc2ps6fkfa.picard.replit.dev/get/all/userdata', {method: "GET"})
    .then(response => response.json())
    .then(data => {
        let allusernames = []
        let passwordsss = []
        for(let i = 0; i < data.usernames.length; i++){
            allusernames.push(data.usernames[i])
            passwordsss.push(data.passwords[i])
        }

        if (allusernames.includes(document.getElementById("userinput").value)){
            if (document.getElementById("passinput").value == passwordsss[allusernames.indexOf(document.getElementById("userinput").value)]){
                setlocalstorage("username", document.getElementById("userinput").value)
                setlocalstorage("password", document.getElementById("passinput").value)
                window.location.replace("index.html")
            }
        }
    })
    .catch(error => console.error(error));
})