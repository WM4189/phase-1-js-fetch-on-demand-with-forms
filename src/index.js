const init = () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputVal = document.getElementById('searchByID').value
    // console.log(e.target.children[1].value)
    // console.log(e.target.searchByID.value)
    // console.log(document.querySelector('input#searchByID').value)
    form.reset()

    fetch(`http://localhost:3000/movies/${inputVal}`)
    .then(res => res.json())
    .then(data => { 
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
        title.textContent = data.title
        summary.textContent = data.summary
        // console.log(data)
    }) 
    // .catch(err => alert(err)) 
  })
}
document.addEventListener('DOMContentLoaded', init)

