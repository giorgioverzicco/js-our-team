// OLD CODE
// const members = [
//   {
//     fullName: "Wayne Barnett",
//     role: "Founder & CEO",
//     image: "img/wayne-barnett-founder-ceo.jpg",
//   },
//   {
//     fullName: "Angela Caroll",
//     role: "Chief Editor",
//     image: "img/angela-caroll-chief-editor.jpg",
//   },
//   {
//     fullName: "Walter Gordon",
//     role: "Office Manager",
//     image: "img/walter-gordon-office-manager.jpg",
//   },
//   {
//     fullName: "Angela Lopez",
//     role: "Social Media Manager",
//     image: "img/angela-lopez-social-media-manager.jpg",
//   },
//   {
//     fullName: "Scott Estrada",
//     role: "Developer",
//     image: "img/scott-estrada-developer.jpg",
//   },
//   {
//     fullName: "Barbara Ramos",
//     role: "Graphic Designer",
//     image: "img/barbara-ramos-graphic-designer.jpg",
//   },
// ];

// const teamContainer = document.querySelector(".team-container");
// for (let i = 0; i < members.length; i++) {
//   const member = members[i];

// const card = `
// <div class="team-card">
//   <div class="card-image">
//     <img
//       src="${member.image}"
//       alt="${member.fullName}"
//     />
//   </div>
//   <div class="card-text">
//     <h3>${member.fullName}</h3>
//     <p>${member.role}</p>
//   </div>
// </div>
// `;

// teamContainer.innerHTML += card;
// }

// NEW CODE
function isValidName(name) {
  let regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regex.test(name);
}

const teamContainer = document.querySelector(".team-container");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const imageInput = document.getElementById("image");
const addMemberBtn = document.getElementById("addMemberButton");

addMemberBtn.addEventListener("click", function () {
  if (!isValidName(nameInput.value) || !roleInput.value || !imageInput.value) return;

  const card = `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${imageInput.value}"
        alt="${nameInput.value}"
      />
    </div>
    <div class="card-text">
      <h3>${nameInput.value}</h3>
      <p>${roleInput.value}</p>
    </div>
  </div>
  `;

  imageInput.value = "";
  nameInput.value = "";
  roleInput.value = "";

  teamContainer.innerHTML += card;
});
