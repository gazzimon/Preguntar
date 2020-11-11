window.onload = sendApiRequest();
//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=22&type=multiple`
  );
  console.log(response);

  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#category").innerHTML = "Categoria: " + data.results[0].category
  document.querySelector("#difficulty").innerHTML = "Dificultad: " + data.results[0].difficulty
  document.querySelector("#question").innerHTML = "Pregunta: " + data.results[0].question
  document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
  document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers
  document.querySelector("#answer3").innerHTML = data.results[1].incorrect_answers
  document.querySelector("#answer4").innerHTML = data.results[2].incorrect_answers
}
