(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
   // the <br> will give a new line for each item if you want to show on HTML page
    var planetsStringWithBr = planetsArray.join('<br>');
    console.log(planetsStringWithBr);

//    BONUS
    var listPlanets = '<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>';
    console.log(listPlanets);

    var planetUl = '<ul>'
    var planetList = arr => {
        arr.forEach((item, index) => {
            if (index === (arr.length - 1)) {
                planetUl = planetUl + '<li>' + item + '</li></ul>';
            } else {
                planetUl = planetUl + '<li>' + item + '</li>';
            }
        })
    };
    planetList(planetsArray);
    console.log(planetUl);
    // console.log(planetUl + '</ul>');

})();
