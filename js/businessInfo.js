const businessInfo = {
  name: "San Jose Plumbing Pros",

  phone: "0417 664 116",
  email: "",

  address: "",
  city: "Wollongong",
  state: "NSW",

  services: [],

  serviceAreas: [],

  hours: {
    monday: "24/7",
    tuesday: "24/7",
    wednesday: "24/7",
    thursday: "24/7",
    friday: "24/7",
    saturday: "24/7",
    sunday: "24/7",
  },
};

function renderBusiness(data) {
  // ① 处理所有文本绑定
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.dataset.bind;
    const value = data[key];

    if (!value) return;

    // 如果是数组（services / serviceAreas）
    if (Array.isArray(value)) {
      el.innerHTML = value.map((item) => `<div>${item}</div>`).join("");
      return;
    }

    el.textContent = value;
  });

  // ② 处理电话点击行为
  document.querySelectorAll("[data-action='tel']").forEach((el) => {
    el.href = "tel:" + data.phone;
  });
}

renderBusiness(businessInfo);
