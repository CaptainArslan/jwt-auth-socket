var notificationSound = new Audio('/notification-1.mp3');


function playNotificationSound() {
    notificationSound.play();
}

// Attach event listener to the playSoundButton
document.getElementById('playSoundButton').addEventListener('click', function () {
    console.log('click trigger');
    playNotificationSound();
});

$(document).ready(function () {
    setTimeout(() => {
        playSoundButton.dispatchEvent(new Event('click'));
        playNotificationSound();
    }, 5000);
});

// Define a function to wait for the element to be loaded
function waitForElement(selector) {
    return new Promise((resolve, reject) => {
        const observer = new MutationObserver(mutations => {
            const element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}


function loadingStart(title) {
    // if (!Swal.isLoading()) {
    return Swal.fire({
        title: title ? title : "Loading",
        // closeOnEsc: false,
        timerProgressBar: false,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
    });
    // }
}

function loadingStop() {
    if (Swal.isLoading()) {
        Swal.close();
    }
}

function showMessage(title, text, icon = 'info', timer = null, allowOutsideClick = false) {
    return Swal.fire({
        icon: icon,
        title: title || 'Alert',
        text: text,
        timer: timer,
        allowOutsideClick: allowOutsideClick
    });
}
