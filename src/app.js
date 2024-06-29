document.addEventListener("DOMContentLoaded", function() {
  let pronoun = ["the", "our"];
  let adj = ["tiny", "large"];
  let noun = ["drummer", "basset hound"];
  let domain = [".com", ".gov", ".net"];

  function genDom(pronoun, adj, noun, domain) {
    let domains = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let d of domain) {
            domains.push(p + a + n + d);
          }
        }
      }
    }
    return domains;
  }

  function displayGenerated(domains) {
    const domainNames = document.getElementById("Generated");
    if (!domainNames) {
      console.error("Element with id 'Generated' not found.");
      return;
    }
    domains.forEach(website => {
      let li = document.createElement("li");
      li.textContent = website;
      domainNames.appendChild(li);
    });
  }

  let generatedDomains = genDom(pronoun, adj, noun, domain);
  console.log(generatedDomains); // Debugging statement
  displayGenerated(generatedDomains);
});
