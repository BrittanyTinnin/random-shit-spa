$(document).ready(function () {
  // NUMBER-FACTS
  const URL = 'http://numbersapi.com/random/trivia';

  $('#quoteBtn').click(function () {
    $.ajax({
      url: URL,
      type: 'GET',
      success: function (data) {
        $('#number-facts-home').text(data);
      },
      error: function (e) {
        console.log(`Error ${e}`);
      },
    });
  });

  // JOKE
  const jokeURL = 'https://api.chucknorris.io/jokes/random';

  $('#jokeBtn').click(function () {
    $.ajax({
      url: jokeURL,
      type: 'GET',
      success: function (data) {
        console.log('success', data);
        // console.log('test', data.contents.jokes);
        // let jokes = data.contents.jokes;
        // $('#joke-input').text(data);
        // $.each(jokes, function (i, j) {
        //   console.log('joke', j.joke.text);
        //   $('#joke-input').text(j.joke.text);
        $('#joke-input').text(data.value);
        // });
      },
      error: function (e) {
        console.log(`Error ${e}`);
      },
    });
  });

  // LOTTERY
  const lotteryURL = 'https://api.chucknorris.io/jokes/random';

  $('#lotteryBtn').click(function () {
    console.log('random number: ' + Math.floor(Math.random() * 69));
    $('#lottoOne').text(Math.floor(Math.random() * 69));
    $('#lottoTwo').text(Math.floor(Math.random() * 69));
    $('#lottoThree').text(Math.floor(Math.random() * 69));
    $('#lottoFour').text(Math.floor(Math.random() * 69));
    $('#lottoFive').text(Math.floor(Math.random() * 69));
    $('#power-ball').text(Math.floor(Math.random() * 26));
  });

  // NASA
  let searchTerm = '';

  const youtubeURL = `https://www.googleapis.com/youtube/v3/search?maxResults=5&q=${searchTerm}&key=${ENV[API_KEY]}`;

  $('#nasaBtn').click(function () {
    $.ajax({
      url: youtubeURL,
      type: 'GET',
      success: function (data) {
        console.log(data);
        console.log(process.env.API_KEY);
      },
      error: function (e) {
        console.log(`Error ${e}`);
      },
    });
  });
});
