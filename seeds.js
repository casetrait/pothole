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
        confirmationVote: ['6341ca2bc688364cb6cb7a66'],
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
        resolvedVote: ['6341ca2bc688364cb6cb7a66'],
    },
    {
        reporter: '6341ca2bc688364cb6cb7a66',
        title: 'Single lane due to snow', 
        category: 'Snow', 
        description:'Right lane non-existant; too much snow', 
        lat:49.882297557358726, 
        long:-97.15400934219362,
        confirmationVote: ['6341ca2bc688364cb6cb7a66'],
        resolvedVote: ['6341ca2bc688364cb6cb7a66'],
    },
  ]);

  console.log(tickets)

  process.exit();

})();