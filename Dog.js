class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  renderDogHtml() {
    const { name, avatar, age, bio, hasBeenLiked } = this;

    return `
        <img class="dog-img" src="${avatar}" />
          <div class="dog-description">
            <h2>${name}, ${age}</h2>
            <p>${bio}</p>
          </div>
          <img class="badge" id="badge" src=${
            hasBeenLiked ? "images/badge-like.png" : "images/badge-nope.png"
          } />
          `;
  }
}

export default Dog;
