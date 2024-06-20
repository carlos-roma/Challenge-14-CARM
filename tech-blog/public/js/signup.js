const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      console.log('Sending signup data:', { username, password });  // Log the data being sent
  
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('Signup successful');  // Log success
        document.location.replace('/');
      } else {
        console.log('Signup failed');  // Log failure
        alert('Failed to sign up.');
      }
    }
  };
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
  