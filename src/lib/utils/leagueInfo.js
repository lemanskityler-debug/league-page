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
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "605958050657935360",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Alex",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "St Pete", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "managers/IMG_4300.jpeg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Tyler", // Can be anything (usually your rival's name)
         link: 2, // manager array number within this array, or null to link back to all managers page
         image: "/managers/FullSizeRender.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 11564, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
  //   "rookieOrVets": "Rookies",
       "philosophy": "The best defense is a great offense", // (optional)
       "tradingScale": 8, // 1 - 10 (optional)
       "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  {
        //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "1126918074470477824",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Brendan",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Wesley Chapel", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "managers/IMG_8245.jpeg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "tb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
       name: "Alex", // Can be anything (usually your rival's name)
         link: 0,  // manager array number within this array, or null to link back to all managers page 
         image: "/managers/IMG_4300.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
      "favoritePlayer": 6888, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Rookies",
       "philosophy": "Score more than the other team.", // (optional)
       "tradingScale": 5, // 1 - 10 (optional)
       "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
    {
        //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "922283973374496768",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Tyler",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Wesley Chapel", // (optional)
       "bio": "Lorem ipsum...",
       "photo": "managers/FullSizeRender.jpeg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     //  "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
       name: "Alex", // Can be anything (usually your rival's name)
         link: 0,  // manager array number within this array, or null to link back to all managers page 
         image: "/managers/IMG_5535.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
      "favoritePlayer": 8144, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
     //  "rookieOrVets": "Rookies",
       "philosophy": "Get your guy, even if you have to reach.", // (optional)
       "tradingScale": 10, // 1 - 10 (optional)
       "preferredContact": "Text",// (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
 {
        //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
       "managerID": "1009592675810607104",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
       "name": "Teej",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Clearwater", // (optional)
       "bio": "Commissioner of bad trades",
       "photo": "managers/RenderedImage.jpeg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//     "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
       name: "Alex", // Can be anything (usually your rival's name)
         link: 0,  // manager array number within this array, or null to link back to all managers page 
         image: "/managers/IMG_5535.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
      "favoritePlayer": 9226, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
   //    "rookieOrVets": "Rookies",
       "philosophy": "Keep Moving or Get Left Behind", // (optional)
       "tradingScale": 4, // 1 - 10 (optional)
       "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
]
  
    
