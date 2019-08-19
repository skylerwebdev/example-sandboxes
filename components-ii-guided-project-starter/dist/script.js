/*
1. iterate over a list of data received from a server
2. creating a set of components
3. adding them to the DOM
*/

// select the main dom node to attach our dynamic content
const entry = document.querySelector('.entry')

// https://dog.ceo/api/breed/terrier/images
const breed = 'hound'

// const promise = axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`)
// ❌ console.log(promise) //
// ✅ Reading the value of a promise, use .then:
axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`)
  .then(data => {
    // 1. (see above)
    // Handles Success: here's where we get the results from server
    console.log('3 random doggos:', data)
    const images = data.data.message
    images.forEach(imageUrl => {
      // 2. (see above)
      const element = createDogCard(imageUrl, breed)
      // 3. (see above)
      entry.appendChild(element)
    })
  })
  .catch(error => {
    // Handles failure:
    console.log('The dogs API is currently down, try again later', error)
  })


// Manual test, before wiring in the Async/GET request:
// const terrier = createDogCard('https://images.dog.ceo/breeds/terrier-american/n02093428_10164.jpg', 'terrier')
// entry.appendChild(terrier)


/*
creates and returns DOM node
*/
function createDogCard(imageUrl, breed) {
  // create the elements
  const card = document.createElement('div')
  const img = document.createElement('img')
  const title = document.createElement('h3')
  
  // set the styles
  card.classList.add('dog-card')
  img.classList.add('dog-image')
  
  // set the content
  img.src = imageUrl
  title.textContent = `Breed: ${breed}`
  
  // put together
  card.appendChild(img)
  card.appendChild(title)
  return card
}