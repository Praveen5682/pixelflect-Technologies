const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const loading = contactForm.querySelector(".loading");
  const errorMessage = contactForm.querySelector(".error-message");
  const sentMessage = contactForm.querySelector(".sent-message");

  loading.style.display = "block";
  errorMessage.style.display = "none";
  sentMessage.style.display = "none";

  const templateParams = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    mobile: contactForm.mobile.value,
    message: contactForm.message.value,
    time: new Date().toLocaleString(),
  };

  emailjs.send("service_a0o93p4", "template_msujydm", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      loading.style.display = "none";
      sentMessage.style.display = "block";
      contactForm.reset();
    },
    function (error) {
      console.log("FAILED...", error);
      loading.style.display = "none";
      errorMessage.innerText = "Oops! Something went wrong. Please try again.";
      errorMessage.style.display = "block";
    }
  );
});
