import { displayGallery } from './gallery-display.js'

export function deleteItem () {
  document.querySelector('#modal-gallery').addEventListener('click', (event) => {
    if (event.target.id === 'delete-button') {
      const figure = event.target.parentNode.parentNode
      const { id } = figure
      const token = localStorage.getItem('token')
      const container = document.getElementById('image-container')

      fetch(`https://p7-prod-api.matouba-portfolio.fr/api/works/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

        .then((response) => figure.remove())
        .catch((error) => console.error(error))

      container.innerHTML = ''
      displayGallery()
    }
  })
}
