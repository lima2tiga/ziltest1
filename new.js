function RedeemBox(hour, minute, second, millisecond) {
    var now = new Date();
    var targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, second, millisecond);

    var timeRemaining = targetTime.getTime() - now.getTime();

    if (timeRemaining > 0) {
        setTimeout(function() {
            var element = document.querySelector('.stardust-toggle-toggle');
            if (element) {
                element.click();
                var redeemTime = new Date(); // Get the current time when the action is actually executed
                console.log("Redeem at : " + redeemTime.getHours() + ":" + redeemTime.getMinutes() + ":" + redeemTime.getSeconds() + ":" + redeemTime.getMilliseconds());
            }
        }, timeRemaining);
    } else {
        console.log("Target time has already passed.");
    }
}

RedeemBox(20, 36, 0, 0);
