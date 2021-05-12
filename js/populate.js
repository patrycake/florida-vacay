function populate(mydata = JSON.parse(places)) {
    mydata.sort(comparePlaces);
    console.log("populate begin");

    var mainContainer = document.getElementById("myData");

    //clear up myData children before populating
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }

    console.log("Removal done")
    var article = [];
    var div = [];
    var k = 0;
    for (var i = 0; i < mydata.length; i++) {
        var divRow = document.createElement('div');
        var tempDiv = document.createElement('div')
        div.push(tempDiv);
        var tempArt = document.createElement('article')
        article.push(tempArt);
        var h2 = document.createElement("p");
        var h3 = document.createElement("p");
        var myList = document.createElement('ul');

        div[div.length - 1].className = "tile is-parent";
        article[article.length - 1].className = "place tile is-child box content notification is-primary";
        h2.className = "place-name title";
        h3.className = "city-name subtitle";
        myList.className = "list-attributes";

        h2.innerHTML = mydata[i].place;
        h3.innerHTML = mydata[i].city;

        const attributes = mydata[i].attributes;
        for (let j = 0; j < attributes.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = attributes[j];
            myList.appendChild(listItem);
        }

        article[article.length - 1].appendChild(h2);
        article[article.length - 1].appendChild(h3);
        article[article.length - 1].appendChild(myList);

        div[div.length - 1].appendChild(article[article.length - 1]);

        if (div.length == 3) {
            // only 3 place per row 
            div.forEach(element => {
                divRow.appendChild(element);
            });
            mainContainer.appendChild(divRow);
            divRow.className = "place-row tile is-ancestor";
            //empty out place div array
            div.splice(0, 3);

        }
    }
    //if there are less then 3 places left over populate
    //populate left over remaining places 
    div.forEach(element => {
        element.classList.add("is-4")
        divRow.appendChild(element);
    });
    mainContainer.appendChild(divRow);
    divRow.className = "place-row tile is-ancestor";
    console.log("populate end");

    /* look into document fragment?? https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment */
}