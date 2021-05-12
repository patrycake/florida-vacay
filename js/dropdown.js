function dropdown() {
    var mydata = JSON.parse(places);
    var dropDown = document.getElementById("dropdown-content-cities");
    var cities = [];
    var haveCity = false;

    for (var i = 0; i < mydata.length; i++) {

        //only add non empty cities
        if (mydata[i].city != "") {
            var haveCity = false;
            var option = document.createElement("option");

            // no duplicate cities
            cities.forEach(element => {
                if (element == mydata[i].city) {

                    //true if duplicate
                    haveCity = true;
                }
            });

            // if no duplicates add to cities array
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
    var mydata = JSON.parse(places);

    selectElem.addEventListener('change', function () {
        //new JSON object
        var newdata = [];
        if (selectElem.value == "All Cities") {

            //add all of the JSON objects
            newdata = mydata;
        } else {
            mydata.forEach(element => {

                //if city matches user selection add object to JSON object
                if (element.city == selectElem.value) {
                    newdata.push(element);
                }
            })
        }
        populate(newdata);
    })

}