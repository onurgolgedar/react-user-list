window.addEventListener("load", init);

const element_total = document.querySelector("#total");
const element_pagination_list = document.querySelector("#pagination-list");
const element_contact_list = document.querySelector(".contact-list");
const pageSize = 10;
let pageCount;

function init() {
  element_total.innerHTML = users.length;
  pageCount = Math.ceil(users.length / pageSize);

  element_pagination_list.innerHTML = "";
  for (var i = 0; i < pageCount; i++)
    element_pagination_list.innerHTML += `<li><a id="pageButton${i + 1}">${i + 1}</a></li>`;

  const pageButtons = Array.from(document.querySelectorAll("#pagination-list li"));
  pageButtons.forEach((element) => {
    element.addEventListener("click", clicked);
  });

  page_load(1);
}

function clicked(e) {
  element_contact_list.innerHTML = "";
  page_load(Number(e.target.innerHTML));
}

// Page starts from 1
function page_load(page) {
  var startIndex = (page - 1) * pageSize;
  for (var i = startIndex; i < startIndex + pageSize; i++) {
    var user = users[i];
    joined = new Date(user.registered.date).toLocaleDateString("en-US");
    element_contact_list.innerHTML += `
    <li class="contact-item cf">
        <div class="contact-details">
            <img
            class="avatar"
            src="${user.picture.thumbnail}"
            />
            <h3>${
              user.name.title + " " + user.name.first + " " + user.name.last
            }</h3>
            <span class="email">${user.email}</span>
        </div>
        <div class="joined-details">
            <span class="date">Joined ${joined}</span>
        </div>
    </li>`;
  }
}
