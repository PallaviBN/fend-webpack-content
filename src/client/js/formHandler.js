function handleSubmit(event) {
    event.preventDefault();
   
let formText = document.getElementById("statement").value
console.log(formText)
console.log("::: Form Submitted :::")
fetch("/api", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({formText})
    })
     .then(res => res.json())
     .then(data => {
        console.log("Received data is, "+ data);
        document.getElementById("text_polarity").innerHTML = data.polarity;
        document.getElementById("text_subjectivity").innerHTML = data.subjectivity;
        document.getElementById("text_polarity_confidence").innerHTML = data.polarity_confidence;
        document.getElementById("text_subjectivity_confidence").innerHTML = data.subjectivity_confidence;
    });     
}

export { handleSubmit };
