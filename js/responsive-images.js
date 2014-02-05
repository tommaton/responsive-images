var responsiveImages = responsiveImages || {};

responsiveImages = (function() {
  'use strict';

  var responsiveImagesList = (document.getElementsByClassName) ? document.getElementsByClassName('responsive-images') : document.querySelectorAll(".responsive-images"),
      getScreenWidth = function() {
            return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
        },
    getImageData = function() {      
        for (var i = responsiveImagesList.length - 1; i >= 0; i--) {
            getRequiredImage( responsiveImagesList[i] );
        }
    },
    getRequiredImage = function(elem) {        
        var imageSizes = JSON.parse(elem.getAttribute('data-img-size-binding')),
            screenWidth = getScreenWidth(),
            previousImageSize = 0,
            selectedImage;
              
        for (var i = imageSizes.length - 1; i >= 0; i--) {
                var currentImageDetails = imageSizes[i];
            
                if(screenWidth > currentImageDetails.size && currentImageDetails.size > previousImageSize) {
                    selectedImage =  elem.getAttribute('data-img-'+currentImageDetails.image);
                    previousImageSize = currentImageDetails.size;
                }              
        }
      /*
        set the img src to the selected image
        if the image is set to "" we use CSS to hide the image as we dont want to see a cross in IE for the images.
        
        We set the image to "" so we can prevent it from loading in mobiles if we wish.
      */
      if(selectedImage !== null) {
        elem.src = selectedImage;
      } else {
        elem.src = "";
      }
      
    },
    debounce = function(delay, callback){
        var timeout;

        //$().keyup(debounce()) will be this function, it still has access to timeout because of closure
        return function(){
            var that = this,args = arguments,
            delayed = function(){
                callback.apply(that, args);
                timeout = null;
            };
            //if we have already have something queued then clear it
            if(timeout) {
                clearTimeout(timeout);
            }
            //each time this is called set the timeout to something else
            timeout = setTimeout(delayed, delay || 250);
        };

    },
    init = function(){
        if (window.addEventListener) {
            window.addEventListener('resize', function(){
                debounce(500, getImageData());
            }, false);
            window.addEventListener("orientationchange", function() {
                getImageData();
            }, false);
        } else if (window.attachEvent)  {
            window.attachEvent('resize', function(){
                debounce(500, getImageData());
            });
        }
        getImageData();
    };
  
  return {
    init: init
  };

})();