function dropdown() {
    var mydata = JSON.parse(places);
    var dropDown = document.getElementById("dropdown-content-cities");
    for (var i = 0; i < mydata.length; i++) {
        if (mydata[i].city != "") {
            console.log(mydata[i].city);
            var div = document.createElement("div");
            div.className = "dropdown-item";
            div.innerHTML = mydata[i].city;
            dropDown.appendChild(div);
        }
    }
}