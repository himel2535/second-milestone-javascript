const heights = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(heights) {
  let smallest = heights[0];
  for (height of heights) {
    let x = height.length;
    let y = smallest.length;
    if (x < y) {
      smallest = height;
    }
  }
  return smallest;
}
const result = smallestName(heights);
console.log(result);
