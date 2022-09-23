/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth){
    return [(width*height)*2 + (height*depth)*2 + (width*depth)*2, width*height*depth]
}
  