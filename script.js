function select(link) {
  const item = link.parentNode;
  const tabs = item.parentNode;
  const index = Array.prototype.indexOf.call(tabs.children, item);
  const items = tabs.querySelectorAll(".tab-item");

  tabs.style.setProperty("--index", index + 1);
  items.forEach((item) => item.classList.remove("active"));
  item.classList.add("active");
}

const items = document.querySelectorAll(".item-link");
const randomItem = items[Math.round(Math.random() * (items.length - 1))];

select(randomItem);
