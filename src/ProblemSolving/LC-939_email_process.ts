export const testEmailProcess = () => {
  console.log("email process");

  const emails1 = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ];

  const emails2 = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];

  function numUniqueEmails(emails: string[]): number {
    const uniq: any = {};

    const processEmail = (email: string): string => {
      const splittedEmail = email.split("@");
      let localName = splittedEmail[0];
      let domainName = splittedEmail[1];

      localName = localName.split(".").join("");
      let localNameSplittedForPlus = localName.split("+");

      return localNameSplittedForPlus[0] + "@" + domainName;
    };

    for (let i = 0; i < emails.length; i++) {
      const current = emails[i];

      const processedEmail = processEmail(current);

      uniq[processedEmail] = 1;
    }
    return Object.keys(uniq).length;
  }

  console.log(numUniqueEmails(emails2));

  const processEmail = (email: string): string => {
    const splittedEmail = email.split("@");
    let localName = splittedEmail[0];
    let domainName = splittedEmail[1];

    localName = localName.split(".").join("");
    let localNameSplittedForPlus = localName.split("+");

    return localNameSplittedForPlus[0] + "@" + domainName;
  };

  processEmail("test.ema.il+alex@leetcode.com");
};
