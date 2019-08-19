import React from "react";

//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

export default function ArticleCard(props) {
  console.log("ArticleCard", props);
  const { article, category } = props;

  return (
    <div className="card" data-category={category || "none"}>
      <div className="headline">{article.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={article.authorPhoto} alt="author" />
        </div>
        <span>By {article.authorName}</span>
      </div>
    </div>
  );
  // const card = document.createElement("div");
  // const headline = document.createElement("div");
  // const authorContainer = document.createElement("div");
  // const authorImageContainer = document.createElement("div");
  // const authorImage = document.createElement("img");
  // const authorName = document.createElement("span");

  // card.classList.add("card");
  // card.dataset.category = category || "none";

  // headline.classList.add("headline");
  // headline.textContent = article.headline;

  // authorContainer.classList.add("author");
  // authorImageContainer.classList.add("img-container");
  // authorImage.src = article.authorPhoto;
  // authorName.textContent = `By ${article.authorName}`;

  // authorContainer.appendChild(authorImageContainer);
  // authorImageContainer.appendChild(authorImage);
  // authorContainer.appendChild(authorName);

  // card.appendChild(headline);
  // card.appendChild(authorContainer);

  // return card;
}
