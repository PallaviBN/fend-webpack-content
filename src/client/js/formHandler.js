function handleSubmit(event) {
    event.preventDefault();
   
let formText = document.getElementById("statement").value

console.log("::: Form Submitted :::")
fetch("/resultFromAPI", {
    method: "POST",
    credentials:"same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ formText })
    })
     .then(res => res.json())
     .then(data => {
        console.log("Received data is, "+ data);
        document.getElementById("polarity").innerHTML = data.polarity;
        document.getElementById("subjectivity").innerHTML = data.subjectivity;
        document.getElementById("polarity_confidence").innerHTML = data.polarity_confidence;
        document.getElementById("subjectivity_confidence").innerHTML = data.subjectivity_confidence;
    })
    .catch(e => console.error(e));   
}

export { handleSubmit };
