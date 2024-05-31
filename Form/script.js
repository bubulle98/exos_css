const NEW_TASK = document.querySelector("input[type='submit']");
const RESET = document.querySelector("input[type='reset']");
const NAME = document.getElementById("nom");
const DESCRIPTION = document.getElementById("description");
const START_DATE = document.getElementById("startDate");
const END_DATE = document.getElementById("endDate");
const RESPONSABLE = document.getElementById("responsable");
const URGENT = document.getElementById("urgent");
const TASKS_TABLE = document.querySelector("table");

let today = new Date().toISOString().split("T")[0];
START_DATE.setAttribute("min", today);
END_DATE.setAttribute("min", today);

NEW_TASK.addEventListener("click", (event) => {
  event.preventDefault();
  if (!NAME.checkValidity()) {
    alert("NOM PAS OK");
  }

  if (new Date(END_DATE.value) < new Date(START_DATE.value)) {
    alert(
      "Attention, la date limite est antérieure à la date de début. Il faut la modifier."
    );
  } else {
    if (
      NAME.value &&
      DESCRIPTION.value &&
      START_DATE.value &&
      RESPONSABLE.value
    ) {
      const ROW = document.createElement("tr");
      ROW.innerHTML = `
        <td>${NAME.value}</td>
        <td>${DESCRIPTION.value}</td>
        <td>${START_DATE.value}</td>
		    <td>${END_DATE.value || "/"}</td>
		    <td>${RESPONSABLE.value}</td>
		    <td>${URGENT.checked ? "Oui" : "Non"}</td>`;

      TASKS_TABLE.appendChild(ROW);

      if (URGENT.checked === true) {
        ROW.style.color = "#7A0018";
      }

      //   NAME.value = "";
      //   DESCRIPTION.value = "";
      //   START_DATE.value = "";
      //   RESPONSABLE.value = "";
      //   END_DATE.value = "";
      //   URGENT.checked = false;

      document.forms[0].reset();
    } else {
      if (!NAME.value) alert("Il manque le nom de la tâche");
      if (!DESCRIPTION.value) alert("Il manque la description de la tâche");
      if (!START_DATE.value) alert("Il manque la date de début de la tâche");
      if (!RESPONSABLE.value) alert("Il manque le responsable de la tâche");
    }
  }
});
