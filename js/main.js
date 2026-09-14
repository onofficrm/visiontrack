(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-faq]").forEach(function (item) {
    var button = item.querySelector("button");
    if (!button) return;
    button.addEventListener("click", function () {
      item.classList.toggle("is-open");
    });
  });

  var form = document.querySelector("[data-consult-form]");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = form.querySelector("[name=name]").value.trim();
    var phone = form.querySelector("[name=phone]").value.trim();
    var topic = form.querySelector("[name=topic]").value;
    var message = form.querySelector("[name=message]").value.trim();
    var status = form.querySelector("[data-form-status]");
    var summary =
      "부천개인파산 상담 요청\n이름: " +
      name +
      "\n연락처: " +
      phone +
      "\n구분: " +
      topic +
      "\n내용: " +
      message;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(summary).catch(function () {});
    }

    status.textContent = "상담 내용이 복사되었습니다. 전화 또는 카카오톡으로 보내 주세요.";
    window.location.href = "https://pf.kakao.com/_tZbTn/chat";
  });
})();
