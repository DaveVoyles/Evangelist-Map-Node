/// <reference path="../../typings/microsoft.maps.d.ts" />

class Map {
     
    // Declare map, Infobox, & pin
    private myMap;
    private defaultInfobox;
    private pushpin;
    
    // Locations
    private aDefaultLngLat = [37.09024, -95.712891];
    private aCenterLoc     = new Microsoft.Maps.Location(this.aDefaultLngLat[0], this.aDefaultLngLat[1]);

    private infoboxOptions = { width: 400, height: 250, showCloseButton: true, visible: false };
    private bingAPIKey     = 'Ah1_aJohnC76ttqxM-PjSm5rsabmFcLSOujmuYvfSmKSHAOk9Xm2X2E6AtCQBNPk';       
    
    private testVar = 'string';
    constructor() {
        this.defaultInfobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(38.09024, -95.712891), this.infoboxOptions); // Put info box slight above pin
        this.myMap          = new Microsoft.Maps.Map(document.getElementById('BingMap'), {
            credentials: this.bingAPIKey
        });
        this.pushpin        = new Microsoft.Maps.Pushpin(this.aCenterLoc);         
        
        // Center map on the United States   
        this.myMap.setView({ zoom: 5, center: this.aCenterLoc })
     
        // Create pin and infobox
        this.myMap.entities.clear();
        this.myMap.entities.push(this.pushpin);
        this.myMap.entities.push(this.defaultInfobox);    
         
        this.pushPinClickHandler();
    }   
    
    /** 
     * Displays infobox on screen when user clicks
     */
    private pushPinClickHandler () : any
     {
         Microsoft.Maps.Events.addHandler(this.pushpin, 'click', ()=> this.defaultInfobox.setOptions({visible: true}));  
    }
             
};
