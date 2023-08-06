const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const sleep_Duration = parseInt(document.querySelector('#sleep-duration').value.trim());
  const wakeup_Count = parseInt(document.querySelector('#wakeup-count').value.trim());
  const heart_Rate = parseInt(document.querySelector('#heart-rate').value.trim());
  const heartrate_Variability = parseInt(document.querySelector('#heartrate-variability').value.trim());
  const respiration = parseInt(document.querySelector('#respiration').value.trim());
  const snoring = document.querySelector('#snoring').checked; // boolean
  const time_Sleeping = parseInt(document.querySelector('#time-sleeping').value.trim());
  const sleep_Interruptions = parseInt(document.querySelector('#sleep-interruptions').value.trim());
  const body_Temperature = parseFloat(document.querySelector('#body-temperature').value.trim());

  const response = await fetch(`/api/sleep`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      sleep_Duration,
      wakeup_Count,
      heart_Rate,
      heartrate_Variability,
      respiration,
      snoring,
      time_Sleeping,
      sleep_Interruptions,
      body_Temperature
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to create sleep entry');
  }
};

document
  .querySelector('.new-sleep-form')
  .addEventListener('submit', newFormHandler);



