var validIPAddress = function (queryIP) {
  if (!queryIP.match(/(\w|\d)+(\.|\:)(\w|\d)+/g)) return "Neither";
  console.log();
  // IPv4 Regex
  ip4Regex = /(1\d{1,2}|2[0-4]\d|25[0-5]|[1-9]{1,2}|\d)/g;
  let expectedIP4Address = queryIP.match(ip4Regex)?.join(".");

  // IPv6 Regex
  ip6Regex = /([0-9]|[a-f]|[A-F]){1,4}/g;
  let expectedIP6Address = queryIP.match(ip6Regex)?.join(":");

  if (
    expectedIP4Address == queryIP &&
    expectedIP4Address.match(/\./g).length == 3
  )
    return "IPv4";
  if (
    expectedIP6Address == queryIP &&
    expectedIP6Address.match(/\:/g).length == 7
  )
    return "IPv6";
  return "Neither";
};

console.log(validIPAddress("172.16.254.1"));
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("256.256.256.256"));

console.log(validIPAddress("192.168.1.0"));
console.log(validIPAddress("192.168.1.1"));
console.log(validIPAddress("192.168.01.1"));
console.log(validIPAddress("192.168.1.00"));
console.log(validIPAddress("192.168@1.1"));

console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
console.log(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("2001:0db8:85a3::8A2E:037j:7334"));
console.log(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334"));

console.log(validIPAddress("f:f:f:f:f:f:f:f"));
console.log(validIPAddress("12.12.12.12.12"));
console.log(validIPAddress("ss:"));
