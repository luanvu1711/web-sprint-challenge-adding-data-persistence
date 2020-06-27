
exports.seed = async function(knex) {
  await knex("task").insert([
    {description: "Learning HTML", notes:"A markup language", completed: false, project_id: 1},
    {description: "Learning CSS", notes: "A style sheet language", completed: false, project_id: 1},
    {description: "Learning Javascript", notes: "A porgraming language", completed: false, project_id: 1},
    {description: "Learning ReacJs", notes:" an open-source JavaScript library for building user interfaces", completed: true, project_id: 2},
    {description: "Downloading Visual Studio Code", notes: "Coding Sofware", completed: false, project_id: 2},
    {description: "Downloading Atom", notes: "Another Coding Software", completed: true, project_id: 1},
    {description: "Downloading Insomnia", notes: "API Design platform and REST client", completed: false, project_id: 2},
    {description: "Downloading SQLite", notes: "A relational database management system", completed: true, project_id: 2}
  ])
};
