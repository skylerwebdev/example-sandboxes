
const brokenSelector = document.querySelector('content-area')
const contentArea = document.querySelector('.content-area')
const contentAreas = document.querySelectorAll('.content-area')

console.log('brokenSelector', brokenSelector)
console.log('contentArea', contentArea)
console.log('contentAreas', contentAreas)
console.log('contentAreas Array', Array.from(contentAreas))


// 1. Create an <li>
// 2. Set the content
// 3. Add to .work-list


const blockchainItem = document.createElement('li')
blockchainItem.textContent = 'Blockchain DApps'
const workList = document.querySelector('.work-list')

workList.appendChild(blockchainItem)
