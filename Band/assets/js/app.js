// Đóng/mở mobile menu
var header = document.getElementById("header");
var mobileMenu = document.querySelector(".mobile-menu-btn");
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

//Tự động đóng khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

//--------------------------------------------------------------------------
// Hiệu ứng side show
var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-show");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}

//--------------------------------------------------------------------------
// Modal
const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
const payBtn = document.querySelector(".js-pay-btn");

//hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
  modal.classList.add("open");
}

//hàm ẩn modal mua vé (gỡ bỏ class open của modal)
function hideBuyTickets() {
  modal.classList.remove("open");
}

//lặp qua từng thẻ button có chứa class js-buy-ticket và nghe hành vi click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}

//Nghe hành vi click vào button close
modalClose.addEventListener("click", hideBuyTickets);

//Nghe hành vi click vào modal
modal.addEventListener("click", hideBuyTickets);

//Nghe hành vi click ở ngoài modal
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

//Nghe hành vi click vào button pay
// payBtn.addEventListener('click', hideBuyTickets)
