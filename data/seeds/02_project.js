
exports.seed = async function(knex) {
  await knex("project").insert([
    {name:"Landing page", description: "Used in online marketing, their sole purpose is to offer an on-site visitor with all the necessary information regarding a product, service or an offer, and explain the advantages as well as the context of use to convince them to enter the conversion funnel.",completed: false},
    {name:"Single page application", description: " a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages", completed: false}
  ])
};
