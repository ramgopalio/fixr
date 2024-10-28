// Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date-input').setAttribute('min', today);

        // Validate that CAPTCHA is completed before form submission
        function validateForm() {
          const recaptchaResponse = grecaptcha.getResponse();
          if (recaptchaResponse.length === 0) {
            alert("Please complete the CAPTCHA before submitting.");
            return false; // Prevent form submission if CAPTCHA is not completed
          }

          // Check if all required fields are filled
          const inputs = document.querySelectorAll('input[required], textarea[required]');
          for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
              alert('Please fill in all required fields.');
              return false;
            }
          }

          // If all fields and CAPTCHA are valid, submit the form
          return true;
        }