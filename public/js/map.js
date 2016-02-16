/// <reference path="../../typings/microsoft.maps.d.ts" />
var Map = (function () {
    function Map() {
        //Default vars
        this.lngOffset = 2;
        this.latOffset = 0.5;
        // Locations
        this.aDefaultLngLat = [37.09024, -95.712891]; //Center of United States
        this.aCenterLoc = new Microsoft.Maps.Location(this.aDefaultLngLat[0], this.aDefaultLngLat[1]);
        this.infoboxOptions = { width: 400, height: 250, showCloseButton: true, visible: false };
        this.bingAPIKey = 'Ah1_aJohnC76ttqxM-PjSm5rsabmFcLSOujmuYvfSmKSHAOk9Xm2X2E6AtCQBNPk';
        this.defaultInfobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(this.aDefaultLngLat[0] + this.lngOffset, this.aDefaultLngLat[1] - this.latOffset), this.infoboxOptions); // Put info box slight above pin
        this.myMap = new Microsoft.Maps.Map(document.getElementById('BingMap'), {
            credentials: this.bingAPIKey
        });
        this.pushpin = new Microsoft.Maps.Pushpin(this.aCenterLoc);
        // Center map on the United States   
        this.myMap.setView({ zoom: 5, center: this.aCenterLoc });
        var image = "http://www.shawnee.edu/game-conference/img/David-Voyles.jpg";
        this.setInfoboxContent("Dave", "Philadelphia", "Games", "I am a person!", "http://www.twitter.com/DaveVoyles", "www.DaveVoyles.com", image);
        // Create pin and infobox
        this.myMap.entities.clear();
        this.myMap.entities.push(this.pushpin);
        this.myMap.entities.push(this.defaultInfobox);
        this.pushPinClickHandler();
    }
    /**
     * Displays infobox on screen when user clicks
     */
    Map.prototype.pushPinClickHandler = function () {
        var _this = this;
        Microsoft.Maps.Events.addHandler(this.pushpin, 'click', function () { return _this.defaultInfobox.setOptions({ visible: true }); });
    };
    /**
     * TODO: Consider changing spec to an array of strings
     * TODO: Consdier changing return type to string
     */
    Map.prototype.setInfoboxContent = function (name, city, spec, bio, twitter, websiteUrl, img) {
        this.defaultInfobox.setHtmlContent('<div class="bio-container">' +
            '<h1 id="firstHeading" class="firstHeading">' + name + '</h1>' +
            '<h3>' + city + '</h3>' +
            '<h3>' + spec + '</h3>' +
            '<div id="bodyContent">' +
            bio +
            '</div> <!-- .bodyContent-->' +
            '<p>' +
            '<a href=' + twitter + '/>' + twitter +
            '<p>' +
            '<a href="' + websiteUrl + '"/>' + websiteUrl +
            '</div> <!-- Bio Container -->' +
            '<img src=' + img + ' class = "evangelist-img">' +
            '</div><!-- .bio-container -->');
    };
    Map.prototype.SelectAll = function (callback) {
        $.getJSON("api/customers", callback);
    };
    return Map;
})();
;
