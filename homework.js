//Do my homework
// Bài 1: Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng sau thành một chuỗi.
// myColor = ["Red", "Green", "White", "Black"];
// Đầu ra mong đợi :
// "Red, Green, White, Black"
// "Red + Green + White + Black"
// myColor = ["Red", "Green", "White", "Black"]
// a = myColor.join(",")
//  console.log(a);
// b = myColor.join("+")
// console.log(b);
//
//

// Bài 2: Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch ngang (-) vào giữa hai số chẵn. 
// Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là 0-2-5-4-6-8.
// let n = prompt("nhập dãy số đầu vào").split("")
// a = n.join("-")
// console.log(a);
//

//Bài 3: Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào và hoán đổi trường hợp của mỗi ký tự. 
// Ví dụ: nếu bạn nhập 'The Quick Brown Fox', đầu ra phải là 'tHE qUICK bROWN fOX'.
//
//

// Bài 4: Viết kịch bản yêu cầu người dùng nhập một dãy số,
//  Các số được phân tách bằng dấu phẩy, 
//  tính tổng các số và hiển thị cho người dùng
// let n = prompt("nhập một dãy số vào đây").split(",")
// let b = 0
// for(i = 0; i <= n.length - 1; i = i +1){
//     b = b + Number(n[i])
// }alert(`The sum of them is ${b}`);
//


//
//Bài 5:Viết script yêu cầu người dùng nhập một dãy số, 
// các số được phân tách bằng dấu phẩy, 
// tìm số nhỏ nhất và đăng xuất cho người dùng
// let n = prompt("nhập một dãy số vào đây").split(",");
// let min = Number(n[0]);
// for(i= 0; i<= n.length - 1; i = i + 1){
//     if(min >= Number(n[i]) ){
//         min = Number(n[i])
//     }
// }alert(`Số nhỏ nhất là ${min}`)

// let a = 0 biên tích lũy cộng dồn
//
//Bài 6: push theem. shift xoa dau , pop cuois unshift them dau mang,  pop Xoa cuoi push them cuoi 
// Tạo một mảng chứa ít nhất 5 số, 
// sau đó yêu cầu người dùng nhập một số,
//  thực hiện tìm kiếm để tìm số trong mảng, nếu số được tìm thấy,
//   hãy cho người dùng biết rằng với chỉ số của nó trong mảng, nếu không, 
//   cũng nói với họ như vậy
//  let number = [1, 5, 15, 32, 65]
// let n = Number(prompt("nhập vào 1 số "))
// if(number.indexOf(n) !== -1){
//     console.log(`Chỉ số Index của nó trong mảng là ${number.indexOf(n)}`);
// }else{
//     console.log("Bạn nhập sai thông tin");
// }




// bài 7:Bài 7: Bạn là một người chăn cừu sở hữu một đàn cừu. Mỗi con cừu trong đàn của bạn có kích thước khác nhau:
// 7.1. Tạo một mảng để thể hiện kích thước đàn của bạn và ghi lại tất cả kích thước đàn của bạn, đầu ra màn hình dự kiến:
// 7.2. Cuối mỗi tháng, bạn phải chọn một và chỉ một con cừu để xén lông và do đó bạn muốn chọn con lớn nhất để tối đa hóa lợi nhuận của mình. 
// Thêm tập lệnh để tìm kiếm những con cừu lớn nhất trong danh sách của bạn:
// Hint: Google ‘JS Array find max’
// 7.3. Sau khi cạo lông, kích thước của nó sẽ trở về kích thước mặc định, là 8.
// Hint: Google ‘JS Array indexOf
// 7.4. Trong tháng tiếp theo, MỌI con cừu trong đàn của bạn lớn lên, kích thước của chúng tăng thêm 50. Đăng xuất chúng
// 7.5. Tìm con cừu lớn nhất hiện tại và cạo lông nó
// 7.6. Hãy làm điều này trong 3 tháng (hoặc bao lâu tùy thích)
// (Sử dụng vòng lặp để thực hiện)
// 7.7. Sau ngày ngày xén lông cừu, bạn trở nên buồn chán. 
// Bạn muốn bán đàn của mình để đi du lịch khắp thế giới. Để có thương mại công bằng,
// bây giờ bạn phải tính toán tổng kích thước đàn cừu của bạn và 
//sau đó là số tiền dự kiến bạn có thể nhận được từ việc bán đàn của mình, trước khi đưa ra thị trường. 
//Viết một chương trình để tính tổng kích thước đàn cừu của bạn cũng như số tiền bạn sẽ có.
// Đầu ra bảng điều khiển mong đợi:
dancuu = [3, 7, 28, 46, 5, 30, 6, 23];
alert(`Xin chào đây là kích thước đàn cừu của tôi [${dancuu}]`)
//7.2
let max = dancuu[0]
for (let i = 0; i <= dancuu.length - 1; i++) {
    if (max < Number(dancuu[i])) {
        max = Number(dancuu[i])
    }
} alert(`Con cừu lớn nhất của tôi có kích thước${max}, hãy cạo nó`)
//C2
let a = Math.max.apply(null, dancuu)
alert(`Con cừu lớn nhất của tôi có kích thước${a}, hãy cạo nó`);
//7.3
dancuu[3] = (8)
alert(`Sau khi cạo lông đây là đàn cừu của tôi[${dancuu}]`)
//
//7.4
let number = (prompt("nhập kích thước tăng thêm 50 ")).split(",")
for (i = 0; i <= number.length - 1; i++) {
    tang = Number(dancuu[i]) + Number(number)
}
alert(`Đã 1 tháng trôi qua đàn cừu của tôi đã lớn đây là kích thước của chúng [${tang}]`)
//7.5
let b = Math.max.apply(null, dancuu)
alert(`Bây giờ con cừu lớn nhất của tôi có kích thước ${b}`)


//Bài 8:
// let Str = prompt("nhập vào 1 chuỗi").split(",")
// let b = []
// for(i = 0; i<= Str.length - 1; i++){
//     b = b + (`<${Str[i]}>`)
// }
// alert(b)
//
//

// Bài 9:
// let number = prompt("nhập 1 dãy số").split(",");
// let a =[]
// for(i = 0; i<= number.length - 1; i++){
//     if(Number(number[i]) % 2 === 1){
//        a.push(Number(number[i]))
//     }
// }alert(a)