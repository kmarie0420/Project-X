const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#sleep').value.trim();
  const needed_funding = document.querySelector('#sleep-funding').value.trim();
  const description = document.querySelector('#sleep-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/sleep`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/sleep/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-sleep-form')
  .addEventListener('submit', newFormHandler);

//document
 // .querySelector('.sleep-list')
  //.addEventListener('click', delButtonHandler);

  
