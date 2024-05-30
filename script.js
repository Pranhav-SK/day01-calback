// Countdown function with callback
function countdown(num, callback) {
    if (num === 0) {
        callback();
    } else {
        setTimeout(function() {
            document.getElementById('countdown').innerText = num;
            countdown(num - 1, callback);
        }, 1000);
    }
}

// Display countdown from 10 to 1
countdown(10, function() {
    // Display "Happy Independence Day" after countdown
    setTimeout(function() {
        document.getElementById('countdown').innerText = "Happy Independence Day";
    }, 1000);
});

