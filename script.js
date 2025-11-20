let people = [];

fetch("data/participants.json")
  .then(response => response.json())
  .then(data => {
    people = data;

    // Populate dropdown
    const dropdown = document.getElementById("nameDropdown");
    people.forEach(p => {
      let option = document.createElement("option");
      option.value = p.name;
      option.textContent = p.name;
      dropdown.appendChild(option);
    });
  });

function showCertificate() {
  const name = document.getElementById("nameDropdown").value;
  const phone = document.getElementById("phoneInput").value.trim();
  const box = document.getElementById("certificateBox");

  const person = people.find(p => p.name === name && p.phone === phone);

  if (person) {
    box.style.display = "block";
    box.innerHTML = `
      <h3>Certificate for ${person.name}</h3>
      <a href="${person.cert}" target="_blank" style="font-size:18px; color:#0057b3;">Open Certificate</a>
    `;
  } else {
    box.style.display = "block";
    box.innerHTML = `<p style='color:red;'>Name or Mobile number is incorrect.</p>`;
  }
}
