class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  renderDogHtml() {
    const { name, avatar, age, bio } = this;

    return `
        <img class="dog-img" src="${avatar}" />
          <div class="dog-description">
            <h2>${name}, ${age}</h2>
            <p>${bio}</p>
          </div>
          <img class="badge like" id="badge-like" src="images/badge-like.png" />
          <img class="badge nope" id="badge-nope" src="images/badge-nope.png" />
          `;
  }
}

export default Dog;
