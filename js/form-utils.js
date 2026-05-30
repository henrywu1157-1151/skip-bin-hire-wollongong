// form-utils.js
document.addEventListener("DOMContentLoaded", () => {
  // 找到所有 type="date" 的 input
  const dateInputs = document.querySelectorAll('input[type="date"]');

  if (!dateInputs.length) return;

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // 月份从0开始
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  dateInputs.forEach((input) => {
    // 设置最小日期
    input.setAttribute("min", minDate);

    // 如果用户手动修改，确保不小于今天
    input.addEventListener("input", () => {
      if (input.value < minDate) {
        input.value = minDate;
      }
    });
  });
});
