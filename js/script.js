// =========================
// 1. EMAIL
// =========================

const form = document.getElementById("email-form");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit-email");
const personalContent = document.getElementById("personal-content");
const emailError = document.getElementById("email-error");

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitButton.addEventListener("click", function () {

    const email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent = "Vui lòng nhập email.";
        return;
    }

    if (!regex.test(email)) {
        emailError.textContent = "Email không hợp lệ.";
        return;
    }

    form.classList.add("hide");
    personalContent.classList.remove("hide");
});


// =========================
// 2. VIEW MORE / VIEW LESS
// =========================

const infoBoxes = document.querySelectorAll("#job-info .info-box");

infoBoxes.forEach(function (box) {

    const title = box.querySelector(".box-title");

    const contents = Array.from(box.children).filter(function (element) {
        return !element.classList.contains("box-title");
    });

    const button = document.createElement("button");

    button.textContent = "View More";
    button.classList.add("view-more");

    title.appendChild(button);

    contents.forEach(function (content) {
        content.classList.add("hide");
    });

    button.addEventListener("click", function () {

        const isHidden = contents[0].classList.contains("hide");

        contents.forEach(function (content) {
            content.classList.toggle("hide");
        });

        button.textContent = isHidden
            ? "View Less"
            : "View More";
    });
});