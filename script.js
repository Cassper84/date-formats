const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {

  switch (dateOptionsSelectElement.value) {
    case "standard-time":
        currentDateParagraph.textContent = `${date}`
        break;

    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;

    case "mm-dd-yyyy-h-mm-ss":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
      break;

      case "mm-yyyy-dd":
        currentDateParagraph.textContent = `${month}-${year}-${day}`
        break;

        case "yyyy-dd-mm":
        currentDateParagraph.textContent = `${year}-${day}-${month}`
        break;

        case "dd-yyyy-mm":
            currentDateParagraph.textContent = `${day}-${year}-${month}`
            break;

      default:
      currentDateParagraph.textContent = formattedDate;
    
  }
});
