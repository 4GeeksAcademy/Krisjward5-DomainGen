window.onload = function() {
  let pronoun = ["the", "our", "coveted"];
  let adj = ["tiny", "large", "medium", "bad"];
  let noun = ["drummer", "bassethound", "ghoul", "wizard"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let div = document.createElement(`div`);
        div.innerText = `
        ${pronoun[p]}${adj[a]}${noun[n]}.com
        ${pronoun[p]}${adj[a]}${noun[n]}.gov
        ${pronoun[p]}${adj[a]}${noun[n]}.us
        ${pronoun[p]}${adj[a]}${noun[n]}.org
        `;
        document.body.appendChild(div);
      }
    }
  }
};

//document.addEventListener("DOMContentLoaded", function() {
// let pronoun = ["the", "our", "coveted"];
//   let adj = ["tiny", "large", "medium", "bad"];
//   let noun = ["drummer", "bassethound", "ghoul", "wizard"];
//   let domain = [".com", ".gov", ".net"];

//   function genDom(pronoun, adj, noun, domain) {
//     let domains = [];
//     for (let p of pronoun) {
//       for (let a of adj) {
//         for (let n of noun) {
//           for (let d of domain) {
//             domains.push(p + a + n + d);
//           }
//         }
//       }
//     }
//     return domains;
//   }

//   function displayGenerated(domains) {
//     const domainNames = document.getElementById("Generated");
//     if (!domainNames) {
//       console.error("Element with id 'Generated' not found.");
//       return;
//     }
//     domains.forEach(website => {
//       let li = document.createElement("li");
//       li.textContent = website;
//       domainNames.appendChild(li);
//     });
//   }

//   let generatedDomains = genDom(pronoun, adj, noun, domain);
//   console.log(generatedDomains); // Debugging statement
//   displayGenerated(generatedDomains);
// });
