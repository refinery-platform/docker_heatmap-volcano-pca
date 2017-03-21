(function () {
  window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert(errorMsg
        + '\n\n' + url
        + ' (' + lineNumber + ':' + column + ')');
  };

  requirejs.config({
    "baseUrl": "" // Same directory
  });

  require(['heatmap_scatterplot', 'd3.min'], function (heatmap_scatterplot, d3) {
    // TODO: read data from disk
    var matrix = [['gene', 'cond-a', 'cond-b', 'cond-c', 'cond-d']];
    for (var i = 0; i < 40000; ++i) {
      var a = Math.asin((Math.random() - 0.5) * 2);
      var b = Math.asin((Math.random() - 0.5) * 2);
      var c = 0.5 * a + b + 0.1 * (Math.random() - 0.5);
      var d = a + 0.5 * b + 0.1 * (Math.random() - 0.5);
      matrix.push(["gene-" + i, a, b, c, d]);
    }
    var data_uri = "data:text/tab-separated-values," + encodeURIComponent(
      matrix.map(function (row) {
        return row.join("\t")
    }).join("\n"));
    d3.tsv(data_uri, function (error, matrix) {
      if (error) throw error;
      d3.select('#container')
          .data([matrix])
          .call(heatmap_scatterplot());
    });
  });
})();