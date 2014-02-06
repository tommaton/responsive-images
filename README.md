responsive-images
==================

Responsive Images allowing you to switch images based on screen size and not to display at all dependent on the screen size you've set in the img data attribute. Pure JS no dependencies on 3rd party library.

There is no limit to how many images at how many break points you can have, but I would suggest not to have no more than 5. If you do then I think you may need to rethink your responsive site.

it works on the premise of min-width, media query example would be.

````
@media (min-width: 480px) {
    
}
````
So we're focusing on mobile first.

Show how does it work?
=======================

Its pretty simple, in your html just drop in an img tag without a src and with the class "responsive-images". 

You then add the following attributes to your img.

data-img-XXXX
---

The **XXXX** you can be named whatever you like (this helps give you the flexibility to add as many images) in our case we'll use small.

````
data-img-small='http://tom-maton.co.uk/images/image-test/bay-bridge-small.jpg'
````

data-img-size-binding
----

This will contain an array of objects with the list of image sizes and the data-img attributes it should match up with. So if we take our example of small above, when we hit a min-width of 320 the image will be small and so will look for the data attribute on the image **data-img-small**. 

````
data-img-size-binding='[{ "size": 768, "image": "medium"},{"size": 1200, "image": "large"}, {"size": 320, "image": "small"}]'
````

Installing
----

Include the js file at the bottom of your page and and it wil instantiate itself and perform the image replacements.

Misc
----

The resize event uses a debounce method so when resizing the browser we're not counting every pixel and therefore helping with performance.

Next on the list is to add support for retina and possibly orientation.
