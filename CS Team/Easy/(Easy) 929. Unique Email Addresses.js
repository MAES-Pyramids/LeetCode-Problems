// Solving Problem using pure Regex patterns
// var numUniqueEmails = function (emails) {
//   let unique = new Set();
//   emails.forEach((element) => {
//     mail = element.toLowerCase();
//     plusRegex = /([+])(.*)(?=[@])/g;
//     dotRegex = /(\w*)([.])(.*)(?=[@])/g;

//     //remove plus
//     mail = mail.replace(plusRegex, "");

//     //remove dot
//     while (mail.match(/(.*)(?=[@])/)[0].includes(".")) {
//       mail = mail.replace(dotRegex, "$1$3");
//     }

//     // push to set
//     unique.add(mail);
//   });
//   return unique.size;
// };

// Solving Problem with help of split and join methods an also Regex pattern
var numUniqueEmails = function (emails) {
  let unique = new Set();
  emails.forEach((element) => {
    let [local, domain] = element.toLowerCase().split("@");
    // remove plus and dot
    local = local.replace(/\.+|([+].*)/g, "");
    // join local and domain
    mail = local + "@" + domain;
    // push to set
    unique.add(mail);
  });
  return unique.size;
};
console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
