/*
Your function takes two arguments:

    current father's age (years)
    current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/
function twiceAsOld(dadYearsOld, sonYearsOld) { //20 11
    // your code here
    if(dadYearsOld >= sonYearsOld * 2) return dadYearsOld - sonYearsOld*2 
    else return Math.abs(sonYearsOld*2 - dadYearsOld)
}