const emailDOM = document.getElementById('email-input')
const passwordDOM = document.getElementById('password-input')
const formLogin = document.getElementById('form-login')
localStorage.setItem('user', false)

formLogin.addEventListener('submit', (event) => {
  event.preventDefault()

  const email = emailDOM.value
  const password = passwordDOM.value
  const data = { email, password }

  fetch('https://p7-prod-api.matouba-portfolio.fr/api/users/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.userId) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', true)
        window.location.href = 'index.html'
      } else {
        alert("Erreur dans l'identifiant ou le mot de passe")
      }
    })
    .catch(error => console.error('Error:', error))
})
