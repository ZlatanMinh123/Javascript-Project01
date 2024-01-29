// Chương trình LẤY, THÊM, SỬA, XÓA khóa học Course

var courseApi = "http://localhost:3000/courses";
var createBtn = document.querySelector("#create");
function start() {
    getCourses(renderCourses);
    handleCreateForm()
}
start();


// =========================================== FUNCTION =============================================
// Tạo hàm LẤY Courses
function getCourses(callback) {
    fetch(courseApi)
        .then(function (res) {
            return res.json();
        })
        .then(callback);
}

// Tạo hàm Render Course ra ngoài trình duyệt
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls = courses.map(function (course) {
        return ` 

                <li class="course-item-${course.id}">
                    <div class="course-name">
                        <h4> ${course.name} </h4>
                    </div>
                    <p> ${course.desc} </p>
                    <div class="course-action">
                        <button onclick="handleDeleteCourse('${course.id}')"> Xóa </button>
                        <button onclick="editCourse('${course.id}')"> Sửa </button>
                    </div>
                </li>
   
        `;
    });

    listCoursesBlock.innerHTML = htmls.join("");
}

// Tạo hàm để xử lý Form:
// 1, Ghi nhớ dữ liệu trong 2 ô name và desc, sau đó gửi lên sever
// 2, Tạo sự kiện khi bấm vào nút create
function handleCreateForm() {
    createBtn.textContent = "CREATE";
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var desc = document.querySelector('input[name="desc"]').value;

        var formData = {
            name: name,
            desc: desc,
        };
        createCourse(formData, function(){
            getCourses(renderCourses);
            resetForm();
        });
    };
}

// Tạo hàm Tạo khóa học
function createCourse(data, callback) {
    // Hoạt động giống phương thức POST
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
// Gửi dữ liệu đến sever và nhận về kq(khóa học mới tạo)
    fetch(courseApi, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback); // kq đc lưu vào hàm callback
}

// Tạo hàm Xóa khóa học
function handleDeleteCourse(id) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    };
    fetch(courseApi+'/'+id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-'+id)
            if (courseItem) {
                courseItem.remove();
            }
        });
}

// Tạo hàm Sửa khóa học 
function editCourse(id) {
    fetch(courseApi+'/'+id) 
        .then(function(response) {
            return response.json();
        })
        .then(function(course) {
            document.querySelector('input[name="name"]').value = course.name;
            document.querySelector('input[name="desc"]').value = course.desc;
        });

    createBtn.textContent = "SAVE";
    createBtn.onclick = function() {
        var updatedName = document.querySelector('input[name="name"]').value;
        var updatedDesc = document.querySelector('input[name="desc"]').value

        var formDataEdit = {
            name: updatedName,
            desc: updatedDesc
        }

        updateCourse(id, formDataEdit, function(){
            getCourses(renderCourses);
            resetForm();
        })
        
    }
}

// Tạo hàm update lại khóa học
function updateCourse(id, data, callback) {
    var options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(courseApi+'/'+id, options) 
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}

// Tạo hàm reset lại Form
function resetForm() {
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="desc"]').value = '';
    handleCreateForm();
}
