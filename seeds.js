require('dotenv').config();
require('./config/database');

const Ticket = require('./models/Ticket');
//add images later

(async function() {

  await Ticket.deleteMany({});
  const tickets = await Ticket.create([
    {
        reporter: '6341ca2bc688364cb6cb7a66', 
        title: 'Pothole on Isabel St',
        category: 'Pothole', 
        description:'Big hole near the stop sign', 
        lat:49.904734565268114, 
        long:-97.14767932891847,
        confirmationVote: ['6341ca2bc688364cb6cb7a66','1','2','3'],
        resolvedVote: ['6341ca2bc688364cb6cb7a66'],
   },
   {
        reporter: '6341ca2bc688364cb6cb7a66', 
        title: 'Need a Crosswalk',
        category: 'Pedestrian', 
        description:'Nowhere to cross to the mall for 3 blocks!', 
        lat:49.904671923861265, 
        long:-97.15705633163452,
        confirmationVote: ['6341ca2bc688364cb6cb7a66'],
        resolvedVote: [],
    },
    {
        reporter: '6341ca2bc688364cb6cb7a66',
        title: 'Single lane due to snow', 
        category: 'Snow', 
        description:'Right lane non-existant; too much snow', 
        lat:49.882297557358726, 
        long:-97.15400934219362,
        confirmationVote: ['6341ca2bc688364cb6cb7a66','1'],
        resolvedVote: ['6341ca2bc688364cb6cb7a66','1','2','3'],
    },
    {
      reporter: '6341ca2bc688364cb6cb7a66',
      title: 'Slippery Bridge!', 
      category: 'Ice', 
      description:'Go slow!', 
      lat:49.89126083113183, 
      long:-97.1258568763733,
      confirmationVote: ['1','2','3'],
      resolvedVote: [],
  },
  {
    reporter: '6341ca2bc688364cb6cb7a66',
    title: 'Washout in Forks Parking lot', 
    category: 'Drainage', 
    description:'Use East entrance', 
    lat:49.88847614656325, 
    long:-97.1293866634369,
    confirmationVote: ['1','2','3'],
    resolvedVote: ['1'],
  },
  {
    reporter: '6341ca2bc688364cb6cb7a66',
    title: 'Kids at play', 
    category: 'Speed Limit', 
    description:'40km zone needs to be 20km', 
    lat:49.88020809563354, 
    long:-97.17414736747742,
    confirmationVote: ['1','2','3','4','5','6'],
    resolvedVote: [],
  },
  {
    reporter: '6341ca2bc688364cb6cb7a66',
    title: 'Advanced Green Needed', 
    category: 'Traffic Light', 
    description:'Takes 20 minutes to turn left in rush hour', 
    lat:49.90797335988378, 
    long:-97.18029499053956,
    confirmationVote: ['1','2'],
    resolvedVote: [],
  },
  ]);

  console.log(tickets)

  process.exit();

})();