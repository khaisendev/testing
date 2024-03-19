// TAB INNST
document.addEventListener("DOMContentLoaded", function() {
  openTab(null, 'tab-one');
});
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("installation__content-info");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.querySelector("." + tabName).style.display = "block";
  var tablinks = document.querySelectorAll('.installation__nav-step');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active-tab');
  }
  if (evt) {
    evt.currentTarget.classList.add('active-tab');
  } else {
    document.querySelector('.installation__nav-step').classList.add('active-tab');
  }
}

// TAB DOWNLOAD
const tabs = document.querySelectorAll(".download__nav-step");
const tabs_item = document.querySelectorAll(".download__content-info");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    tabs_item.forEach((content) => {
      content.classList.remove("active");
    });
    tabs_item[index].classList.add("active");
  });
});