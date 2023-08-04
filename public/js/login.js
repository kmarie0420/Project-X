
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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
      alert('Failed to log in');
    }
  }
};
document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);