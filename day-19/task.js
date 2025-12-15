const navBar = document.querySelector(".tab-headers");

function tabToTab(tabNumber) {
  const tab = [...navBar.children];
  tab.forEach((elem) => {
    elem.classList.remove("active");
  });

  const currentTab = document.querySelector(`[data-tab="${tabNumber}"]`);
  currentTab.classList.add("active");

  const tabContent = document.querySelector(".tab-contents");
  const content = tabContent.querySelectorAll(".content");
  content.forEach((elem) => {
    elem.classList.remove("active");
    if (elem.getAttribute("data-tab") === tabNumber) {
      elem.classList.add("active");
    }
  });
}

navBar.addEventListener("click", (event) => {
  const target = event.target;
  tabNumber = target.getAttribute("data-tab");
  tabToTab(tabNumber);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    tabToTab("1");
    document.querySelector('[data-tab="1"]').focus();
  }
  if (e.key === "2") {
    tabToTab("2");
    document.querySelector('[data-tab="1"]').focus();
  }
  if (e.key === "3") {
    tabToTab("3");
    document.querySelector('[data-tab="1"]').focus();
  }
});
