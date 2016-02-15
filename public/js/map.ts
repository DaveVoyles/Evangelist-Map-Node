/// <reference path="../../typings/microsoft.maps.d.ts" />

class Map {
    
    //Default vars
    private lngOffset = 2;
    private latOffset = 0.5; 
     
    // Declare map, Infobox, & pin
    private myMap;
    private defaultInfobox;
    private pushpin;
    
    // Locations
    private aDefaultLngLat = [37.09024, -95.712891]; //Center of United States
    private aCenterLoc     = new Microsoft.Maps.Location(this.aDefaultLngLat[0], this.aDefaultLngLat[1]);

    private infoboxOptions = { width: 400, height: 250, showCloseButton: true, visible: false };
    private bingAPIKey     = 'Ah1_aJohnC76ttqxM-PjSm5rsabmFcLSOujmuYvfSmKSHAOk9Xm2X2E6AtCQBNPk';       
    
    
    constructor() {
        
        this.defaultInfobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(this.aDefaultLngLat[0] + this.lngOffset, 
                                                         this.aDefaultLngLat[1] - this.latOffset), this.infoboxOptions); // Put info box slight above pin
        this.myMap          = new Microsoft.Maps.Map(document.getElementById('BingMap'), {
            credentials: this.bingAPIKey
        });
        this.pushpin        = new Microsoft.Maps.Pushpin(this.aCenterLoc);         
        
        // Center map on the United States   
        this.myMap.setView({ zoom: 5, center: this.aCenterLoc })
        let image = "http://www.shawnee.edu/game-conference/img/David-Voyles.jpg"
        
        this.setInfoboxContent("Dave", "Philadelphia", "Games", "I am a person!", "http://www.twitter.com/DaveVoyles", 
        "www.DaveVoyles.com", image);
     
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
    
    
    /**
     * TODO: Consider changing spec to an array of strings
     * TODO: Consdier changing return type to string
     */
    private setInfoboxContent (name: string, city: string, spec: string, bio: string, twitter: string, websiteUrl: string, img: string) : any 
    {
        this.defaultInfobox.setHtmlContent(
            '<div class="bio-container">' +
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
            '</div><!-- .bio-container -->'
        )
    }
    
             
};
