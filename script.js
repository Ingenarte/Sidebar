function updateIndicator() {
  const menuWrapper = document.querySelector(".menu-wrapper");
  const indicator = document.querySelector(".indicator");

  const menuWrapperHeight = menuWrapper.clientHeight;
  const indicatorHeight = indicator.clientHeight;

  const scrollPercentage =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);

  const newTop = scrollPercentage * (menuWrapperHeight - indicatorHeight);
  indicator.style.top = newTop + "px";

  const ballCenter = newTop + indicatorHeight / 2;

  const menuItems = document.querySelectorAll(".menu li");

  let activeLi = null;
  let minDistance = Infinity;

  menuItems.forEach((li) => {
    const liCenter = li.offsetTop + li.clientHeight / 2;
    const distance = Math.abs(liCenter - ballCenter);

    if (distance < minDistance) {
      minDistance = distance;
      activeLi = li;
    }
  });

  menuItems.forEach((li) => li.classList.remove("active"));

  if (activeLi) {
    activeLi.classList.add("active");
  }
}

//Event listeners

document.addEventListener("scroll", updateIndicator);
window.addEventListener("load", updateIndicator);
