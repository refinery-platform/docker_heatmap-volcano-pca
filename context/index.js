(function () {
  window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert(errorMsg
        + '\n\n' + url
        + ' (' + lineNumber + ':' + column + ')');
  };

  requirejs.config({
    baseUrl: "", // Same directory
    map: {
        "*": {
            "d3": "d3.min"
        }
    },
  });

  require(['heatmap_scatterplot', 'd3'], function (heatmap_scatterplot, d3) {
    var data_uri = "data/fake-data.tsv";
    d3.tsv(data_uri, function (error, matrix) {
      if (error) throw error;
      d3.select('#container')
          .data([matrix])
          .call(heatmap_scatterplot());
    });
  });
})();