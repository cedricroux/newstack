var searchArticle = function (query) {

  var newsAPI = 'https://newsapi.org/v1/articles?source=';
  var resultURL = newsAPI + query;

  $.getJSON(resultURL, {
    apiKey: '70d6d73107bc49d5b97429305f965be8',
  }).done(function (results) {
    console.log(results);
    _(results.articles).each(function (ra) {
      console.log(ra);
      // var ra = results.articles[0].title;
      var $p = $('<p>');
      $p.text(ra.title);
      $p.appendTo('#articlesFeed');
    });
    // console.log(result);
  });

};

$(document).ready(function () {

  $('#search').on('submit', function (e) {
    e.preventDefault();
    var query = $('#query').val();
    $('#articles').empty(); // Remove the previous search results.
    searchArticle(query);
  });

});
