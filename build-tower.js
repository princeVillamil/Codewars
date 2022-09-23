/*
Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
function towerBuilder(nFloors) {
  // build here
  return [...Array(nFloors)].map((x,i)=>" ".repeat(nFloors-1-i)+"*".repeat(i*2+1)+" ".repeat(nFloors-1-i))
}