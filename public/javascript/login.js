
function signupRedirect(event) {
  event.preventDefault();

  console.log("works")
  window.location.href = '/login';


}

function loginRedirect(event) {
  event.preventDefault();
  window.location.href = '/login';

}



async function loginHandler(event) {
  event.preventDefault();
  const email = document.querySelector('#emailLogin').value.trim();
  const password = document.querySelector('#passwordLogin').value.trim();
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

async function signupHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#usernameSignup').value.trim();
  const email = document.querySelector('#emailSignup').value.trim();
  const password = document.querySelector('#passwordSignup').value.trim();
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    // check the response status
    if (response.ok) {
      console.log('success');
    } else {
      alert(response.statusText);
    }
  }
}


document.getElementById('signupButton').addEventListener('click', signupRedirect);
document.getElementById('loginButton').addEventListener('click', loginRedirect);
document.querySelector('.signupForm').addEventListener('submit', signupHandler);
document.querySelector('.loginForm').addEventListener('submit', loginHandler);
