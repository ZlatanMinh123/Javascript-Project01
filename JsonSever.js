//   Thêm/sửa/xóa khóa học với Fetch và REST API

var courseApi = "http://localhost:3000/courses";

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

// ===========================   Function  =======================================
// getCourses
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

//============================= createCourse ===========================
function createCourse(data, callback) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(courseApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// ====================  handleDeleteCourse =============================
function handleDeleteCourse(id) {
    // Xóa dữ liệu trong database
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(courseApi + "/" + id, options)
        .then(function (response) {
            return response.json();
        })
        // Xóa dữ liệu trên trình duyệt
        .then(function () {
            // console.log("Xóa thành công, phản hồi từ sever: ", data);
            var courseItem = document.querySelector(".course-item-" + id);
            if (courseItem) {
                // Nếu tồn tại
                courseItem.remove();
            }
        });
}

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

function resetForm() {
    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="desc"]').value = "";
    handleCreateForm();
    // var createBtn = document.querySelector("#create");
    // createBtn.textContent = "Create";
}

function updateCourse(id, data, callback) {
    var options = {
        method: "PUT", // Hoặc "PATCH" tùy thuộc vào API
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(courseApi + "/" + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// renderCourses
function renderCourses(courses) {
    // Lấy ra thẻ ul
    var listCoursesBlock = document.querySelector("#list-courses");

    // - Tạo biến htmls chứa các giá trị trả về mà mảng courses lặp qua:
    var htmls = courses.map(function (course) {
        return `                
        <li class="course-item-${course.id}">
            <h4> ${course.name} </h4>
            <p> ${course.desc} </p>               
            <button onclick="handleDeleteCourse('${course.id}')"> Xóa </button>
            <button onclick="editCourse('${course.id}')"> Sửa </button>
        </li>
        `;
    });
    // Đưa tất cả thẻ trên vào trong thẻ ul
    listCoursesBlock.innerHTML = htmls.join("");
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

