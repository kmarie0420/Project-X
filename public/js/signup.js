document.addEventListener("DOMContentLoaded", function() {
    const signupFormHandler = async (event) => {
      event.preventDefault();
    
      const name = document.querySelector('#username-signup').value.trim();
      const password = document.querySelector('#password-signup').value.trim();
    
      if (name && password) {
        try {
          const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
          });
    
          console.log(response);
    
          if (response.ok) {
            document.location.replace('/profile');
          } else {
            const data = await response.json();
            alert(data.message || response.statusText);
          }
        } catch (err) {
          console.error(err);
          alert('Failed to sign up');
        }
      }
    };
    
    document
      .querySelector('.signup-form')
      .addEventListener('submit', signupFormHandler);
  });