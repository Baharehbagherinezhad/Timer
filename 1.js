// فایل 1.js

let timerInterval;

document.getElementById("start").addEventListener("click", function() {
    // گرفتن مقدار ورودی و تبدیل به عدد
    const inputValue = document.getElementById("seconds").value.trim();
    const seconds = Number(inputValue);

    // بررسی ورودی
    if (!inputValue || isNaN(seconds) || seconds <= 0) {
        alert("لطفاً یک عدد مثبت وارد کنید!");
        return;
    }

    // متوقف کردن تایمر قبلی اگر فعال باشد
    if (timerInterval) clearInterval(timerInterval);

    // مقدار اولیه برای شمارش معکوس
    let remaining = seconds;

    // شروع شمارش معکوس
    timerInterval = setInterval(function() {
        document.getElementById("timer").textContent = `زمان باقی مانده: ${remaining} ثانیه`;
        remaining--;

        if (remaining < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").textContent = "زمان به اتمام رسید!";
        }
    }, 1000);
});


