function digital_root(n) {
  // ...
  const nArray = n.toString().split('')
  var total = 0;
  for (let n of nArray) {
    total += Number(n);
  }
  if (total.toString().length >= 2) {
    const newNumber = total.toString().split('');
    total = 0
    for (let i = 0; i < total.toString().length; i++)

      total += Number(newNumber[i]);
  }
  return total;
}

console.log(digital_root(20))
