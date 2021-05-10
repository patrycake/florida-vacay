function dropdown() {
    var mydata = JSON.parse(places);
    var dropDown = document.getElementById("dropdown-content-cities");
    var cities = [];
    var haveCity = false;
    for (var i = 0; i < mydata.length; i++) {
        if (mydata[i].city != "") {
            var haveCity = false;
            //console.log(mydata[i].city);
            var option = document.createElement("option");
            //div.className = "dropdown-item";
            cities.forEach(element => {
                if (element == mydata[i].city) {
                    haveCity = true;
                }
            });
            if (!haveCity) {
                cities.push(mydata[i].city)
                option.innerHTML = mydata[i].city;
                dropDown.appendChild(option);
            }

        }
    }
}

function clickDropdownMenu() {
    var selectElem = document.getElementById('dropdown-content-cities');
    console.log(selectElem.value);
    selectElem.addEventListener('change', function () {
        console.log(selectElem.value);
        var place = document.getElementsByClassName("place");
        Array.from(place).forEach(element => {
            // console.log(element.children[1].innerHTML);
            if (element.children[1].innerHTML != selectElem.value) {
                console.log(element.children[1].innerHTML);
                element.classList.add("is-hidden");
            } else {
                element.classList.remove("is-hidden");
            }
            if (selectElem.value == "All Cities") {
                element.classList.remove("is-hidden");
            }

        });
    })
}