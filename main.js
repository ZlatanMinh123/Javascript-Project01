/* var DC = 'email';

* var myInfo = {
*     name: 'Minh dep trai',
*     age: '24',
*     address: '38A Nguyen Khoai, Thanh Hoa',
*     [DC]: 'minhcacto@gmail.com',
*     getName: function() {
*         return this.name;
*     }
* };

* console.log(myInfo.getName());
 console.log(myInfo.DC); */

// // ============================= MẢNG =============================
// var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];
// document.write("Giá trị của phần tử thứ ba là: " + mobile[2]);

// TOÁN TỬ SO SÁNH
/*  So sánh === là vừa so sánh về giá trị lẫn kiểu dữ liệu
*   Còn == chỉ so sánh về giá trị

var abc = 10;
console.log(abc === 10);
*/

// ============================= VÒNG LẶP FOR =============================

// var arr = ['a', 'b', 'c', 'd', 'e'];
// for(var i=0; i<=arr.length; i++) {
//     console.log(arr[i]);
// }

//============================ VÒNG LẶP FOR...IN, FOR...OF ============================
// =========== For in ===========

// - Cách lấy key-value
/* var person = {
     name: "Minh",
     age: 24,
     salary: 1000,
 };

 var arr = ["a", "b"];

 for (var key in person) {
     console.log(key);
 }
*/

// - Cách lấy giá trị trong key-value
// var person = {
//     name: "Minh",
//     age: 24,
//     salary: 1000,
// };

// var arr = ["a", "b"];

// for (var key in person) {
//     console.log(person[key]);
// }

// // =========== For of ===========
// var arr = ["a", "b"];

// for (var item of arr) {
//     console.log(item);
// }

// =========== 2 vòng lặp ===========
// for (var i=0; i<10; i++) {
//     for (var j=0; j<5; j++) {
//         console.log('j= ', j);
//     }
//     console.log('=================== i= ', i);
// }

// ============================= SỬ DỤNG HÀM (FUNCTION) TRONG JS =============================
// // VD1
// function print(hocvien){
//     console.log('Định mệnh ' + hocvien)
// }

// print('Hùng');
// print('Lâm');

// let text = "How are you doing today?";
// const myArray = text.split(" fsdggh");

// console.log(myArray);

// ========================== BÀI TẬP VỀ STRING =============================
/*var greeting = 'Xin chào các bạn mình là Minh đẹp trai, Minh khoai to, Minh reachkid';

var result = greeting.replace(/Minh/g, 'MINH');
console.log(result);

greeting.toUpperCase
*/

// ========================== BÀI TẬP VỀ ARRAY =============================
/*  Bài 1: sắp xếp mảng
    var array = [1, 9, 2, 8, 6, 15];

    var newArr = array.sort(function (item1, item2) {
        if (item1 > item2) {
            return 1;
        }

        if (item1 < item2) {
            return -1;
        }

        if (item1 = item2) {
            return 0;
        }
    });

    console.log(newArr);
*/

/* Bài 2:
var persons = [
    {
        name: "Minh",
        class: "Learn To Fuck",
        dateJoin: "05-02-2022",
        age: 24,
    },

    {
        name: "Hùng",
        class: "Learn To Fuck",
        dateJoin: "15-06-2022",
        age: 21,
    },

    {
        name: "Cường",
        class: "Learn To Fuck",
        dateJoin: "02-01-2022",
        age: 28,
    },
];

function convertDateToString(dateString) {
    var arrDate = dateString.split("-");
    var date = arrDate[2] + "-" + arrDate[1] + "-" + arrDate[0];

    return new Date(date);
}

var newArr = persons.filter(function(item) {
    var date = convertDateToString(item.dateJoin);

    return date.getMonth() < 2;
});

console.log(newArr);
*/

/*
var person = [
    {
        name: "Tuấn Minh",
        job: "Dev",
    },

    {
        name: "QA",
        job: "Tester",
    },
];

for (let i = 0; i < person.length; i++) {
    let item = person[i];

    console.log(item.name + " có job là " + item.job);
}
*/

/* ====== Viết hàm bên trong sự kiện onclick ==========

function gioiThieu() {
    alert("Xin chào tôi là Minh Đẹp Trai");
};
*/

// function sum(a, b) {
//     return a + b;
// }
// var result = sum(20, 10);
// console.log("result = " + result);

// ========================================================================================
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {

//     var total = flatOutput.concat(depthItem);
//     console.table({
//         "Biến tích trữ": flatOutput,
//         "phần tử mảng: ": depthItem,
//         "Mảng tích trữ: ": total,
//     });
//     return total;
// }, []);

// console.log(flatArray);

// =======================================================================================
var users = [
    {
        id: 1,
        name: "Tuấn Minh",
    },
    {
        id: 2,
        name: "Quỳnh Anh",
    },
    {
        id: 3,
        name: "Hưng Phốc",
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Nay ở nhà nấu cơm rửa bát quét nhà nhé",
    },
    {
        id: 2,
        user_id: 2,
        content: "Vâng thưa anh yêu (^-^)",
    },
    {
        id: 3,
        user_id: 3,
        content: "Có cl",
    },
];

// Hàm lấy ra ND từ Comment
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
                    // th số
            resolve(comments); 
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (valueF) {
            return userIds.includes(valueF.id);
        });
        // - Hàm filter lọc các phần tử của mảng users
        // - Biến userIds nếu có các giá trị trùng với id trong mảng user đang lọc
        //      sẽ được lưu vào biến result
        setTimeout(function () {
            resolve(result); 
        }, 1000);
    });
}

getComments()        // đ số
    .then(function (comments2) {
        // Tạo biến userIds lưu trữ user_id trong mảng comments
        var userIds2 = comments2.map(function (valueM) {
            return valueM.user_id; // [1 ,2 ,4]
        });
        // Trả về logic của hàm getUsersByIds()
        return getUsersByIds(userIds2) // [1, 2]

        .then(function (userIds2) {
            return {
                USERS: userIds2,
                COMMENTS: comments2,
            };
        });
    })

    .then(function (data) {

    //    Lấy ra thẻ ul
       var commentBlock = document.getElementById('comment-block');
       var html = '';
       data.COMMENTS.forEach(function(comment){ // chọc vào mảng comments, lấy ra các giá trị 
            var totalUser = data.USERS.find(function(user){ // chọc vào mảng users, lấy các giá trị thỏa mãn: các id (-) users trùng với các user_id trong comment. Sau đó lưu vào biến user
                return user.id === comment.user_id;
            })
            if(totalUser) {
                html += `<li> <b>${totalUser.name}: </b>${comment.content}</li>`;
            }
            else {
                html += 'Người dùng không xác định: ' + comment.content
            }
       });
       commentBlock.innerHTML = html;
    });






// editCourse
function editCourse(id) {
    fetch(courseApi + "/" + id)
        .then(function (response) {
            return response.json();
        })
        // course lúc này là 1 mảng chứa khóa học đang muốn chỉnh sửa
        .then(function (course) {
            document.querySelector('input[name="name"]').value = course.name;
            document.querySelector('input[name="desc"]').value = course.desc;
        });

    var createBtn = document.querySelector("#create");
    createBtn.textContent = "Save";

    createBtn.onclick = function () {
        var updatedName = document.querySelector('input[name="name"]').value;
        var updatedDesc = document.querySelector('input[name="desc"]').value;
    
        var data = {
            name: updatedName,
            desc: updatedDesc,
        };
    
        updateCourse(id, data, function () {
            // Sau khi cập nhật, lấy lại danh sách khóa học và reset form
            getCourses(renderCourses);
            resetForm();
        });
    };
}


// handleCreateForm
function handleCreateForm() {
    // Lấy ra nút button Create
    var createBtn = document.querySelector("#create");
    createBtn.textContent = 'Create';

    // Sự kiện xảy ra khi bấm vào nút Create
    createBtn.onclick = function() {
        // Lấy ra giá trị mà ta nhập trong thẻ input name
        var name = document.querySelector('input[name="name"]').value;
        // Lấy ra giá trị mà ta nhập trong thẻ input desc
        var desc = document.querySelector('input[name="desc"]').value;
       
        var formData = {
            name: name,
            desc: desc,
        };
        createCourse(formData, function () {
            getCourses(renderCourses);
            resetForm();
        });
       };
}