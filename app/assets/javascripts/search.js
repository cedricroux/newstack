var searchArticle = function (query) {

  var newsAPI = 'https://newsapi.org/v1/articles?source=';
  var url = newsAPI + query;

  $.getJSON(url, {
    apiKey: '70d6d73107bc49d5b97429305f965be8',
  }).done(function (results) {
    _(results.articles[0].title).each(function (a) {
      var $p = $('<p>', {src: results});
      $p.appendTo('#articles');
    });
  });

};

$(document).ready(function () {

  $('#search').on('submit', function (e) {
    e.preventDefault(); // This form is going nowhere.
    var query = $('#query').val();
    $('#articles').empty(); // Remove the previous search results.
    searchArticle(query);
  });

});
