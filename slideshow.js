let slideshow = {
    photoList: ['tobi.jpg', 'cat.png', 'turtle.png', 'fish.png'],

    currentPhotoIndex: -1,

    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
 
     },

    nextPhoto: function() {

        if (this.currentPhotoIndex < this.photoList.length - 1 ) {
            this.currentPhotoIndex++;   
            console.log("Current Photo is: ", this.getCurrentPhoto());
        } else {
            console.log('End of Slideshow');
            this.pause()
        };
    },

    prevPhoto: function() {
        
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('Current Photo is: ', this.getCurrentPhoto());
        } else {
            console.log('Beginning of Slideshow');
        }
    },

    playInterval: null,

    play: function(){
        
        this.playInterval = setInterval(function() {
            this.nextPhoto();
        }.bind(this), 2000)

    },

    pause: function(){
        clearInterval(this.playInterval)
    }

}

slideshow.play();