
const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
      const response = await fetch('/api/user/login', {
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
    // } catch (err) {
    //   console.error(err);
    //   alert('Failed to log in');
    // }
  }
};
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};
document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

