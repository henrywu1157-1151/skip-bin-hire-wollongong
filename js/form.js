// Submit the quick form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".hero-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // 阻止默认刷新

    const formData = {
      formType: "quickForm",
      name: form.querySelector("#hero-form-name").value,
      whatsapp: form.querySelector("#hero-form-whatsapp").value,
      date: form.querySelector("#hero-form-date").value,
      guests: form.querySelector("#hero-form-guests").value,
    };

    try {
      const res = await fetch("/submit-quick-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Thank you! Your inquiry has been submitted!");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      alert("Oops! Something went wrong.");
    }
  });
});

// Submit the boat complete form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".boat-complete-form");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // 获取多选 destination
    const destinations = Array.from(
      document.querySelectorAll('input[name="destination"]:checked'),
    ).map((el) => el.value);

    if (destinations.length === 0) {
      alert("Please select at least one destination.");
      return;
    }

    const formData = {
      formType: "boatCompleteForm",
      name: form.querySelector("#boat-complete-name").value,
      contact: form.querySelector("#boat-complete-contact").value,
      email: form.querySelector("#boat-complete-email").value,
      guests: form.querySelector("#boat-complete-guests").value,
      date: form.querySelector("#boat-complete-date").value,
      duration: form.querySelector("#boat-complete-duration").value,
      destination: destinations,
      message: form.querySelector("#boat-complete-message").value,
      sourcePage: window.location.pathname + window.location.search,
    };

    try {
      const response = await fetch("/submit-boat-complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you! Your inquiry has been submitted!");
        form.reset();
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(err);
      alert("Oops! Something went wrong.");
    }
  });
});
