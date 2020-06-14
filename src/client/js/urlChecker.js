function checkForValidation(url) {
    console.log("::: Running checkForValidation :::", url);
    var pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(url)) {
        return true;
    }
    alert("Url is not valid!");
    return false;

}


export { checkForValidation }
