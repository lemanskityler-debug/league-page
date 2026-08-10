/*   STEP 1   */
export const leagueID = "1384301614763892736"; // your league ID
export const leagueName = "Squad Box"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Hello and welcome to year five of the Squad Box fantasy football league! Our league was started in 2022 amongst a group of close friends and has developed into a yearly staple of laughs, huge upsets, heartbreaking losses, and, most important of all, a way for everybody to stay connected and build stronger friendships. 
  <p>Every manager has added their own personality and strategy year in and year out to make this league what it is today. Through many debates, disagreements, and sometimes arguments, the fantasy landscape changed and rivalries have been formed. 
  <p>Going into year five, we introduce our newest member Cory and hope that he enjoys his time playing fantasy. This season will be the most competitive season yet as everyone has the experience under their belt and former newcomer Kyle is looking for vengeance after his teams disappointing showing in the championship. 
  <p>Good luck to everyone this season!
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set 

export const managers = [
  {
    // "roster": 4,
       "managerID": "1384301614763892736",
       "name": "Brendan",
    // "took0ver": 2020,
       "location": "Wesley Chapel",
       "bio": "Sexy Beast",
       "photo": "managers/IMG_8245.jpeg",
       "fantasyStart": 2022,
       "favoriteTeam": "tb",
   //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426,
       "valuePosition": "WR",
    // "rookieOrVets": "Rookies
       "philosophy": null,
       "tradingScale": 5,
       "preferredContact": "Text",
    },
  
]
  
    
