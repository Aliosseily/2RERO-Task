/*
const sum = (a) => a.reduce((r, x) => r + x);
sum function to get the sum of each adjacent elements inside cities array
 */

//prevSum variable to temporary store the sum of each adjacent elements

//cities.sort function to sort the incoming cities roads. I want to start from road [1,2]...

/* 
roadsToBeRepaired array contains the roads that we should be repair
I loop over all of cities roads, and get the roads that has to be repair by
ignore the roads that are related to the previous road by checking if 
the current road greater than or equal to the sum of prvious road +2 
because +1 is related to the prvious road

ex:       
            4     7     6     3     5     11
cities = [[1,3],[3,4],[2,4],[1,2],[2,3],[5,6]]

after sorting

            3     4     5     6     7     11
cities = [[1,2],[1,3],[2,3],[2,4],[3,4],[5,6]]

so here I took the first road [1,2] have sum 3 and skip the second road [1,3] have sum 4 
because then took the thurd road [2,3] have sum 5 (prev+2) they are connected by city 1 and so on...
 */

/*roadsToBeRepairedCost is the cost of all roads needs to be repaired by getting the number 
of roads should be repaired (roadsToBeRepaired.length) multiply by the cost to repair the road (c_road)
*/


/*
numberOflibrariesToBuild variable to store how much libraries we should build
if roadsToBeRepaired.length is 1 (if we have one road e.g [1,2]) then we should build only one library and repair one raod
if roadsToBeRepaired.length is greater than 1, then the number of libraries needed
to be build are number of roads to be repaired -1
e.g([[1,2],[2,3],[3,4],[5,6]]) 4 raods , so we should build 3 libraries
*/

/*
librariesToBeBuildCost is the cost of all libraries need to be built by multiply the number of 
libraries we want to build (numberOflibrariesToBuild) with the cost of each libabry(c_lib)
*/


/*
librariesToBeBuildInEveryCityCost variable to store the cost if we build a 
library in each city without repair any road.
number of cities * library cost  (n_cities * c_lib)
*/

/*
totalRoadsAndLibaraiesCost varaibel to store the total cost f all roads needed to be repair
and the libraries needed to be built

Finally, I check if totalRoadsAndLibaraiesCost is less than librariesToBeBuildInEveryCityCost 
then the totalRoadsAndLibaraiesCost is the minimum cost of making libraries accessible to all the citizens
else librariesToBeBuildInEveryCityCost, so we shiuld build a library in each city

*/
