/// <reference path="../../typings/microsoft.maps.d.ts" />
var Map = (function () {
    function Map() {
        // Locations
        this.aDefaultLngLat = [37.09024, -95.712891];
        this.aCenterLoc = new Microsoft.Maps.Location(this.aDefaultLngLat[0], this.aDefaultLngLat[1]);
        this.infoboxOptions = { width: 400, height: 250, showCloseButton: true, visible: false };
        this.bingAPIKey = 'Ah1_aJohnC76ttqxM-PjSm5rsabmFcLSOujmuYvfSmKSHAOk9Xm2X2E6AtCQBNPk';
        this.defaultInfobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(38.09024, -95.712891), this.infoboxOptions); // Put info box slight above pin
        this.myMap = new Microsoft.Maps.Map(document.getElementById('BingMap'), {
            credentials: this.bingAPIKey
        });
        this.pushpin = new Microsoft.Maps.Pushpin(this.aCenterLoc);
        // Center map on the United States   
        this.myMap.setView({ zoom: 5, center: this.aCenterLoc });
        this.setInfoboxContent("Dave", "Philadelphia", "Games", "I am a person!", "http://www.twitter.com/DaveVoyles", "www.DaveVoyles.com", "https://www.google.com/imgres?imgurl=http://www.shawnee.edu/game-conference/img/David-Voyles.jpg&imgrefurl=http://www.shawnee.edu/game-conference/&h=320&w=320&tbnid=nbmS3Ix4lGQWeM:&docid=T2WMgVqAREbcIM&ei=vP_BVrKuIIWe-gGkrJaAAw&tbm=isch&ved=0ahUKEwiy_OmDm_rKAhUFjz4KHSSWBTAQMwgfKAIwAg");
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
    return Map;
})();
;
