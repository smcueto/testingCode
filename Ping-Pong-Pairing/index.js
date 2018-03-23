function Add(numInput) {
  if (numInput === '') {
    return 0;
  }
  //.split, makes input able to pass two arguments
  combine = numInput.split(',');
  var total = 0;
  for (let num of combine) {
    //parse float makes string to interger
     total += parseFloat(num);
   };
   return total;
}


// describe ("Add", function() {
//   it("should return 0 if string", function() {
//     expect(Add('')).toBe(0);
//   });
//
//   it("should return the sum 3", function() {
//     expect(Add('1, 2')).toBe(3);
//   });
//
//   it("should return sum if two numbers", function() {
//     expect(Add('0, 2')).toBe(2);
//   });
// });
