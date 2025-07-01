const startHour = 7;
const endHour = 22;
const planner = document.getElementById("planner");

function formatHour(hour) {
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:00 ${ampm}`;
}

for (let hour = startHour; hour <= endHour; hour++) {
  const timeBlock = document.createElement("div");
  timeBlock.className = "time-block";

  const label = document.createElement("div");
  label.className = "hour";
  label.textContent = formatHour(hour);

  const input = document.createElement("input");
  input.type = "text";
  input.id = `input-${hour}`;
  input.value = localStorage.getItem(`task-${hour}`) || "";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      input.classList.add("completed");
    } else {
      input.classList.remove("completed");
    }
  });

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.onclick = () => {
    localStorage.setItem(`task-${hour}`, input.value);
    alert("Task saved!");
  };

  timeBlock.append(label, input, checkbox, saveBtn);
  planner.appendChild(timeBlock);
}
