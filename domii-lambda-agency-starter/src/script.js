
function showMouseEvent(event) {
  const debugClientX = document.querySelector('.clientX')
  const debugClientY = document.querySelector('.clientY')
  const debugTarget = document.querySelector('.target')
  debugClientX.textContent = event.clientX
  debugClientY.textContent = event.clientY
  debugTarget.textContent = `${event.target.tagName} .${event.target.className}`
}
function showScrollEvent(event) {
  console.log('scroll', Object.keys(event))
  // const debugClientX = document.querySelector('.clientX')
  // const debugClientY = document.querySelector('.clientY')
  // const debugTarget = document.querySelector('.target')
  // debugClientX.textContent = event.clientX
  // debugClientY.textContent = event.clientY
  // debugTarget.textContent = `${event.target.tagName} .${event.target.className}`
}

// document.body.addEventListener('mousemove', event => {
//   console.log('mousemove', event)
//   showMouseEvent(event)
//   if (event.target.tagName === 'IMG') {
//     const {clientX, clientY, x, y, target} = event
//     // console.log(clientX, clientY, x, y, target.tagName)
//   }
// })

// window.addEventListener('scroll', event => {
//   console.log('scroll', window.scrollY)
//   // showScrollEvent(event)
  
// })


const header = document.querySelector('header')
const nav = document.querySelector('nav')
const subTitle = document.querySelector('h2.services-header')

nav.addEventListener('click', event => {
  console.log('NAV.CLICK', event.target.tagName)
  if (event.target.tagName === 'A') {
    const titleText = event.target.textContent
    subTitle.textContent = titleText
    // event.stopPropagation()
    event.preventDefault()
    
  }
})
header.addEventListener('click', event => {
  console.log('HEADER.CLICK', event.path)
  subTitle.textContent = 'HEADER CLICKED!'
  event.stopPropagation()
})
