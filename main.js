const courseList = document.getElementById("course-list");
const courseList2 = document.getElementById("course-list-2");

// 공통 함수로 카드 렌더링
function renderCourses(container, courses) {
  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
      <img src="${course.img}" alt="${course.title}">
      <div class="course-info">
        <div class="course-title">${course.title}</div>
        <div class="course-teacher">${course.teacher}</div>
        <div class="course-price">${course.price.final.toLocaleString()}원</div>
        ${course.rating ? `<div class="course-rating"><img src="../assets/Star.svg" style="width:15px;"> ${course.rating.score} (${course.rating.count})</div>` : ""}
      </div>
    `;

    container.appendChild(card);
  });
}

// 첫 번째 리스트: data.js
renderCourses(courseList, data);

// 두 번째 리스트: data2.js
renderCourses(courseList2, data2);