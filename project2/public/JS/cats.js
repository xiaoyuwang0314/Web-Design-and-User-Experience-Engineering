"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.subscribe-modal');
    const subscribeBtns = document.querySelectorAll('.subscribe-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const form = modal.querySelector('form');

    const emailInput = form.querySelector('.email');
    const confirmEmailInput = form.querySelector('.confirm-email');
    const emailError = form.querySelector('.email + .error-message');
    const confirmError = form.querySelector('.confirm-email + .error-message');

    // open form
    subscribeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.showModal();
            clearErrors();
            form.reset();
        });
    });

    // cancel
    cancelBtn.addEventListener('click', () => {
        modal.close();
    });

    const showError = (errorElement, message) => {
        errorElement.textContent = message;
    };

    const clearError = (errorElement) => {
        errorElement.textContent = '';
    };

    const clearErrors = () => {
        clearError(emailError);
        clearError(confirmError);
    };

    // Validate email field
    const validateEmail = () => {
        const email = emailInput.value.trim();

        // check if empty
        if (email === '') {
            showError(emailError, 'This field is required');
            return false;
        }
        // Then check for @
        if (!email.includes('@')) {
            showError(emailError, 'Email must contain @');
            return false;
        }
        clearError(emailError);
        return true;
    };

    // Validate confirm email field
    const validateConfirmEmail = () => {
        const email = emailInput.value.trim();
        const confirmEmail = confirmEmailInput.value.trim();

        // empty, @
        if (email && email.includes('@')) {
            if (confirmEmail === '') {
                showError(confirmError, 'This field is required');
                return false;
            }
            if (email !== confirmEmail) {
                showError(confirmError, 'Emails must match');
                return false;
            }
        }
        clearError(confirmError);
        return true;
    };

    // Real-time validation
    emailInput.addEventListener('input', () => {
        validateEmail();
        validateConfirmEmail();
    });

    confirmEmailInput.addEventListener('input', () => {
        validateConfirmEmail();
    });

    // submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail();
        const isConfirmValid = validateConfirmEmail();

        if (isEmailValid && isConfirmValid) {
            form.method = 'get';
            form.action = '/subscribe';
            form.submit();
        }
    });
});