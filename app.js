const members = [
  {
    fullName: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    fullName: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg",
  },
  {
    fullName: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg",
  },
  {
    fullName: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    fullName: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg",
  },
  {
    fullName: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg",
  },
];

const teamContainer = document.querySelector(".team-container");
for (let i = 0; i < members.length; i++) {
  const member = members[i];

  const card = `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${member.image}"
        alt="${member.fullName}"
      />
    </div>
    <div class="card-text">
      <h3>${member.fullName}</h3>
      <p>${member.role}</p>
    </div>
  </div>
  `;

  teamContainer.innerHTML += card;
}
