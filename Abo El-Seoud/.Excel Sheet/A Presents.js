function FindValue(array) {
  let giftsSender = array;
  let giftsReceivers = [...array].sort();

  let map = new Map();
  for (let i = 0; i < giftsSender.length; i++) {
    map.set(giftsSender[i], giftsReceivers[i]);
  }
  const mapEntries = [...map.entries()].sort((a, b) => a[0] - b[0]);
  console.log(mapEntries.map((element) => element[1]).join(" "));
}
FindValue([2, 3, 4, 1]);
FindValue([1, 3, 2]);
FindValue([1, 2]);
