let height = undefined;
let result;

function heightFind(height) {
  return height ?? "Height is not defined";
}

result = heightFind();

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
