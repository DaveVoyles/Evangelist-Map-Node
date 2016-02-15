/// <reference path="../../typings/microsoft.maps.d.ts" />
var Map = (function () {
    function Map() {
        // Locations
        this.aDefaultLngLat = [37.09024, -95.712891];
        this.aCenterLoc = new Microsoft.Maps.Location(this.aDefaultLngLat[0], this.aDefaultLngLat[1]);
        this.infoboxOptions = { width: 400, height: 250, showCloseButton: true, visible: false };
        this.bingAPIKey = 'Ah1_aJohnC76ttqxM-PjSm5rsabmFcLSOujmuYvfSmKSHAOk9Xm2X2E6AtCQBNPk';
        this.testVar = 'string';
        this.defaultInfobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(38.09024, -95.712891), this.infoboxOptions); // Put info box slight above pin
        this.myMap = new Microsoft.Maps.Map(document.getElementById('BingMap'), {
            credentials: this.bingAPIKey
        });
        this.pushpin = new Microsoft.Maps.Pushpin(this.aCenterLoc);
        // Center map on the United States   
        this.myMap.setView({ zoom: 5, center: this.aCenterLoc });
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
    return Map;
})();
;
