const monthSelect = document.querySelector('select[name="month"]');
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

monthSelect.innerHTML = "";
months.forEach(m => {
  const opt = document.createElement("option");
  opt.textContent = m;
  opt.value = m;
  monthSelect.appendChild(opt);
});

const daySelect = document.getElementById('day');
for (let i = 1; i <= 31; i++) {
  const opt = document.createElement('option');
  opt.textContent = i;
  opt.value = i;
  daySelect.appendChild(opt);
}

const yearSelect = document.getElementById('year');
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1900; y--) {
  const opt = document.createElement('option');
  opt.textContent = y;
  opt.value = y;
  yearSelect.appendChild(opt);
}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const monthName = document.querySelector('select[name="month"]').value;
  const day = parseInt(document.querySelector('select[name="day"]').value, 10);
  const year = parseInt(document.querySelector('select[name="year"]').value, 10);

  const month = months.indexOf(monthName);
  const birthDate = new Date(year, month, day);
  const today = new Date();

  const cutoff = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  if (birthDate > cutoff) {
    alert('Вам должно быть 18 лет или больше для доступа.');
    return;
  }

  localStorage.setItem("ageConfirmed", "true");
  window.location.href = './Main.html';
});