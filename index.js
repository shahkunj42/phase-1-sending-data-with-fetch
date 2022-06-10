// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// };
// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(object){
//         console.log(object)
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     })

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name, email})
    })
    .then(res => res.json())
    .then(data => document.querySelector('body').textContent = data["id"])
    .catch(e => document.querySelector('body').textContent = e.message)
    }