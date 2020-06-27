
exports.seed = async function(knex) {
  await knex("resource").insert([
    {name: "Computer",description: "Coding weapon"},
    {name: "Visual Studio Code", description: "Coding tool"},
    {name: "Coffee", description: "Productivity secret"},
    {name: "Full stack web developer", description: "an engineer who can handle all the work of databases, servers, systems engineering, and clients."},
    {name: "Atom", description: "Another coding tool"},
    {name: "Front end developer", description: "who convert data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data."}
  ])
};
