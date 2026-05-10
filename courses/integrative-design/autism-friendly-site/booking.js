/* ============================================================
   ZenPetals — Booking Form
   Handles: blur validation, confirmation screen, success state.
   No external libraries. No time limits. No CAPTCHA.
   ============================================================ */


  'use strict';

  /* ----------------------------------------------------------
     Service label map (value → human-readable)
  ---------------------------------------------------------- */
  const SERVICE_LABELS = {
    'massage-therapy':   'Massage Therapy',
    'aromatherapy':      'Aromatherapy',
    'relaxation-facial': 'Relaxation Facial',
  };

  /* ----------------------------------------------------------
     Set the minimum date on the date picker to 2 days from today
  ---------------------------------------------------------- */
  function setMinDate() {
    const dateInput = document.getElementById('date');
    if (!dateInput) return;
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 2);
    dateInput.min = minDate.toISOString().split('T')[0];
  }

  /* ----------------------------------------------------------
     Error message helpers (Rule 11)
     Pattern: What happened · Why · What to do next.
  ---------------------------------------------------------- */
  function showError(input, errorEl, message) {
    errorEl.textContent = '⚠ Error: ' + message;
    errorEl.classList.add('is-visible');
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input, errorEl) {
    errorEl.textContent = '';
    errorEl.classList.remove('is-visible');
    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
  }

  /* Variant for radio groups — no single input element */
  function showRadioError(errorEl, message) {
    errorEl.textContent = '⚠ Error: ' + message;
    errorEl.classList.add('is-visible');
  }

  function clearRadioError(errorEl) {
    errorEl.textContent = '';
    errorEl.classList.remove('is-visible');
  }

  /* ----------------------------------------------------------
     Validation rules (Rule 11 error messages)
  ---------------------------------------------------------- */
  function validateFullName(value) {
    if (!value.trim()) {
      return 'We need your full name to confirm the booking. Please fill in this field.';
    }
    if (value.trim().split(/\s+/).length < 2) {
      return 'Please enter both your first and last name.';
    }
    return null;
  }

  function validateEmail(value) {
    if (!value.trim()) {
      return 'We need your email address to send your confirmation. Please fill in this field.';
    }
    // Simple RFC-compliant check — no auto-formatting while typing
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value.trim())) {
      return 'Please enter a valid email address. It should look like: name@example.com.';
    }
    return null;
  }

  function validateDate(value, minDateStr) {
    if (!value) {
      return 'Please choose a date for your appointment. Choose a date at least 2 days from today.';
    }
    if (value < minDateStr) {
      return 'Please choose a date at least 2 days from today.';
    }
    return null;
  }

  function validateService() {
    const checked = document.querySelector('input[name="service"]:checked');
    if (!checked) {
      return 'Please choose a service. Select one of the three options above.';
    }
    return null;
  }

  function validateTime() {
    const checked = document.querySelector('input[name="time"]:checked');
    if (!checked) {
      return 'Please choose a time for your appointment. Select one of the five time slots above.';
    }
    return null;
  }

  /* ----------------------------------------------------------
     Blur handlers — validate when user leaves a field (Rule 12)
     Not on every keystroke.
  ---------------------------------------------------------- */
  function attachBlurValidation() {
    const nameInput  = document.getElementById('full-name');
    const nameError  = document.getElementById('full-name-error');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const dateInput  = document.getElementById('date');
    const dateError  = document.getElementById('date-error');

    nameInput.addEventListener('blur', function () {
      const msg = validateFullName(this.value);
      msg ? showError(this, nameError, msg) : clearError(this, nameError);
    });

    emailInput.addEventListener('blur', function () {
      const msg = validateEmail(this.value);
      msg ? showError(this, emailError, msg) : clearError(this, emailError);
    });

    dateInput.addEventListener('blur', function () {
      const msg = validateDate(this.value, this.min);
      msg ? showError(this, dateError, msg) : clearError(this, dateError);
    });

    // Service radios — validate when any radio in the group is changed
    document.querySelectorAll('input[name="service"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        clearRadioError(document.getElementById('service-error'));
      });
    });

    // Time radios
    document.querySelectorAll('input[name="time"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        clearRadioError(document.getElementById('time-error'));
      });
    });
  }

  /* ----------------------------------------------------------
     Full form validation — runs on "Review My Booking" click.
     Returns true if all required fields are valid.
  ---------------------------------------------------------- */
  function validateAll() {
    let valid = true;

    const nameInput  = document.getElementById('full-name');
    const nameError  = document.getElementById('full-name-error');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const dateInput  = document.getElementById('date');
    const dateError  = document.getElementById('date-error');
    const serviceErr = document.getElementById('service-error');
    const timeErr    = document.getElementById('time-error');

    const nameMsg = validateFullName(nameInput.value);
    if (nameMsg) { showError(nameInput, nameError, nameMsg); valid = false; }
    else { clearError(nameInput, nameError); }

    const emailMsg = validateEmail(emailInput.value);
    if (emailMsg) { showError(emailInput, emailError, emailMsg); valid = false; }
    else { clearError(emailInput, emailError); }

    const dateMsg = validateDate(dateInput.value, dateInput.min);
    if (dateMsg) { showError(dateInput, dateError, dateMsg); valid = false; }
    else { clearError(dateInput, dateError); }

    const serviceMsg = validateService();
    if (serviceMsg) { showRadioError(serviceErr, serviceMsg); valid = false; }
    else { clearRadioError(serviceErr); }

    const timeMsg = validateTime();
    if (timeMsg) { showRadioError(timeErr, timeMsg); valid = false; }
    else { clearRadioError(timeErr); }

    return valid;
  }

  /* ----------------------------------------------------------
     Format date value (YYYY-MM-DD) → readable string
  ---------------------------------------------------------- */
  function formatDate(isoStr) {
    if (!isoStr) return '—';
    const [year, month, day] = isoStr.split('-');
    const months = [
      'January','February','March','April','May','June',
      'July','August','September','October','November','December'
    ];
    return day + ' ' + months[parseInt(month, 10) - 1] + ' ' + year;
  }

  /* ----------------------------------------------------------
     Populate the confirmation summary table
  ---------------------------------------------------------- */
  function populateSummary() {
    const name    = document.getElementById('full-name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const phone   = document.getElementById('phone').value.trim();
    const service = document.querySelector('input[name="service"]:checked');
    const date    = document.getElementById('date').value;
    const time    = document.querySelector('input[name="time"]:checked');
    const notes   = document.getElementById('notes').value.trim();

    document.getElementById('summary-name').textContent    = name || '—';
    document.getElementById('summary-email').textContent   = email || '—';
    document.getElementById('summary-phone').textContent   = phone || 'Not provided';
    document.getElementById('summary-service').textContent = service
      ? SERVICE_LABELS[service.value] || service.value
      : '—';
    document.getElementById('summary-date').textContent    = formatDate(date);
    document.getElementById('summary-time').textContent    = time ? time.value : '—';
    document.getElementById('summary-notes').textContent   = notes || 'None';
  }

  /* ----------------------------------------------------------
     Screen transitions:
       form → confirmation → success
       confirmation → form (Go Back and Edit)
  ---------------------------------------------------------- */
  function showConfirmation() {
    document.getElementById('booking-form-section').style.display = 'none';
    document.getElementById('confirmation-screen').classList.add('is-visible');
    document.getElementById('confirm-heading').focus();
  }

  function showForm() {
    document.getElementById('confirmation-screen').classList.remove('is-visible');
    document.getElementById('booking-form-section').style.display = '';
    document.getElementById('full-name').focus();
  }

  function showSuccess() {
    const email = document.getElementById('email').value.trim();
    document.getElementById('success-text').textContent =
      'Your booking is confirmed. We will send a confirmation to ' +
      email + ' within 24 hours.';

    document.getElementById('confirmation-screen').classList.remove('is-visible');
    document.getElementById('success-message').classList.add('is-visible');
    document.getElementById('success-heading').focus();
  }

  /* ----------------------------------------------------------
     Focus the first invalid field after failed validation
  ---------------------------------------------------------- */
  function focusFirstError() {
    const firstError = document.querySelector('.form-input.is-invalid, .field-error.is-visible');
    if (firstError) {
      if (firstError.classList.contains('form-input')) {
        firstError.focus();
      } else {
        // For radio groups, move to the error message so screen reader reads it
        firstError.focus();
      }
    }
  }

  /* ----------------------------------------------------------
     Init — attach all events after DOM is ready
  ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded',  () => {

    setMinDate();
    attachBlurValidation();

    // "Review My Booking" — validate then show confirmation
    document.getElementById('booking-form').addEventListener('submit',  (e) => {
      e.preventDefault();
      if (validateAll()) {
        populateSummary();
        showConfirmation();
      } else {
        focusFirstError();
      }
    });

    // "Go Back and Edit" — return to form with data preserved
    document.getElementById('btn-edit').addEventListener('click', showForm);

    // "Confirm Booking" — show success message
    document.getElementById('btn-confirm').addEventListener('click', showSuccess);

  });

