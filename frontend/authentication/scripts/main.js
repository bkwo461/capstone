document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const formData = new FormData(this);

    fetch("/register", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
});