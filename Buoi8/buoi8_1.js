// khai báo biến
var i = 1; // Khai báo biến i và gán giá trị 1 nhưng khi khai báo lại biến lặp thì nó vẫn nhận nhưng không lỗi
let a = 1; // Khai báo biến a và gán giá trị 1
const b = 5;
console.log(i);

// Các TOÁN TỬ
let x = 10;
let y = 5;
// Toán tử số học
console.log(x ** y);

// Toán tử so sánh
console.log(x == y); // So sánh giá trị
console.log(x === y); // So sánh giá trị và kiểu dữ liệu
console.log(x != y); // So sánh giá trị
console.log(x !== y); // So sánh giá trị và kiểu dữ liệu

// CÁC KIỂU DỮ LIỆU TRONG JAVASCRIPT

// Kiểu dữ liệu nguyên thủy
let name = "John"; // Kiểu dữ liệu chuỗi
console.log(typeof name);
let age = 30; // Kiểu dữ liệu số
console.log(typeof age);
let isStudent = true; // Kiểu dữ liệu boolean
console.log(typeof isStudent);
let undefinedVariable; // Kiểu dữ liệu undefined
console.log(typeof undefinedVariable);
let nullVariable = null; // Kiểu dữ liệu null
console.log(typeof nullVariable);
// Kiểu dữ liệu phức tạp
let person = { name: "Bob", age: 25 }; // Kiểu dữ liệu đối tượng
console.log(typeof person);
let numbers = [1, 2, 3, 4, 5]; // Kiểu dữ liệu mảng
console.log(typeof numbers);
function greet() {
  console.log("Hello!");
} // Kiểu dữ liệu hàm
console.log(typeof greet);

// Kiểu dữ liệu đặc biệt
let symbol = Symbol("unique"); // Kiểu dữ liệu symbol
let bigInt = 1234567890123456789012345678901234567890n; // Kiểu dữ liệu BigInt
console.log(typeof symbol);
console.log(typeof bigInt);

console.log("aaaa" + i);
console.log(`aaaa ${i}`);
