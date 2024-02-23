window.addEventListener("online", function () {
    toastr.success("Connected to the internet")
    if (Swal) {
        Swal.close();
    }
});

window.addEventListener("offline", function () {
    Swal.fire({
        icon: 'error',
        title: 'No internet connection',
        timerProgressBar: false,
        allowOutsideClick: false,
        showConfirmButton: false,
    });
})
