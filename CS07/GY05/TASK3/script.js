// IDE ÍRD A KÓDÓD:
// TODO - 1
// - kérd be az "Új szelvény" felíratú gombot és a legördülő listát
// - a gombra kattintáskor állítsd be mindkettőnek a disabled attribútumot (tehát tiltsd le)

// ===================================================7

function drawLottery(n) {
  const limits = { 5: 90, 6: 45, 7: 35 };
  if (!limits.hasOwnProperty(n)) return [];
  const limit = limits[n];
  let draw = [];
  while (draw.length < n) {
    let rand = Math.floor(Math.random() * limit) + 1;
    if (!draw.includes(rand)) draw.push(rand);
  }
  return draw.sort((u, v) => u - v);
}
