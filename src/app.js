//console.log("Hola, mundo!");
const pronouns = ["the", "our"];
const adjs = ["great", "big"];
const nouns = ["jogger", "racoon"];
const extensions = [".com", ".es", ".net"];
const generateDomainNames = (pronouns, adjs, nouns, extensions) => {
  const domainNames = [];
  for (const pronoun of pronouns) {
    for (const adj of adjs) {
      for (const noun of nouns) {
        for (const extension of extensions) {
          const domainName = `${pronoun}${adj}${noun}${extension}`;
          domainNames.push(domainName);
        }
      }
    }
  }
  return domainNames;
};
const domainNames = generateDomainNames(pronouns, adjs, nouns, extensions);
for (const domainName of domainNames) {
  console.log(domainName);
}
