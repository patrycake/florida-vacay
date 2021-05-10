function populate() {
    var mydata = JSON.parse(places);
    console.log("JSON");

    var mainContainer = document.getElementById("myData");
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
            div.forEach(element => {
                divRow.appendChild(element);
            });
            mainContainer.appendChild(divRow);
            divRow.className = "place-row tile is-ancestor";
            div.splice(0, 3);
        }
    }

    /* look into document fragment?? https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment */
}