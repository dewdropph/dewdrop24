document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.mainbox'); // Use the correct selector
    const submitButton = document.getElementById('submitButton');
    const requiredFields = form.querySelectorAll('[required]');
    const selectFields = form.querySelectorAll('select');
    function checkFormValidity() {
        let allValid = true;
        requiredFields.forEach(function (field) {
            if (!field.validity.valid) {
                allValid = false;
            }
        });
        selectFields.forEach(function (select) {
            if (select.value === 'option') {
                allValid = false;
            }
            else if(select.value !== 'option1'){
                submitButton.disabled = !allValid;
            }
        });
        return allValid;
    }

    requiredFields.forEach(function (field) {
        field.addEventListener('input', checkFormValidity);
    });

    selectFields.forEach(function (select) {
        select.addEventListener('change', checkFormValidity);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (checkFormValidity()) {
            window.location.href = 'successfulOrder.html';
        }
    });
    checkFormValidity();
});