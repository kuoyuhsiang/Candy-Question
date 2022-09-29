function convertToArray(x) {
    return Array.from(String(x), (x) => Number(x));
  }
  function IDLogicTest(id) {
    let idArr = convertToArray(id);
    let logic = [1, 2, 1, 2, 1, 2, 4, 1];
    let afterLogicMultiplyArr = idArr
      .map((value, index) => idArr[index] * logic[index], 0)
      .join("");
    let sum = convertToArray(afterLogicMultiplyArr).reduce(
      (acc, cv) => acc + cv , 0);
    if (idArr[6] == 7) {
      if (sum % 5 == 0) {
        return true;
      }
    } else if (idArr[6] !== 7) {
      if ((sum - 9) % 5 == 0 || (sum - 10) % 5 == 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  console.log(isValidVatNumber('88117125')) // true
  console.log(isValidVatNumber('53212539')) // true
  console.log(isValidVatNumber('88117126')) // false