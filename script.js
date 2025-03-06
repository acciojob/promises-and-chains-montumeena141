//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    
    if (!name || !age) {
        alert("Please enter valid details.");
        return;
    }
    
    age = parseInt(age);
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then(message => alert(message))
    .catch(error => alert(error));
});