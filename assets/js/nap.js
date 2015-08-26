/* Library: nap.js
 *  Author: Nicholas Potter
 * License: GPL 3
 * Version: 0.0.1
 * 
 * A collection of utilities to ease in working with data and creating js-based graphics. 
 * Requires d3js
 * */

(function() {
    // create the initial object
    var nap = {
        version: "0.0.2"
    };
    
    nap.unique = function(arr) {
      // returns an array containing only unique values
      var o = {}, i, l = arr.length, r = [];
      for(i=0; i<l;i+=1) o[arr[i]] = arr[i];
      for(i in o) r.push(o[i]);
      return r;
    }

    nap.table = function(options) {
      // creates a table
      // get the columns. If no columns, then set them equal to the keys of the first object
      options.data = options.data || [];
      options.columns = options.columns || d3.keys(options.data[0]);
      options.ele = options.ele || 'body';

      // table element and create the table
      var tblele = d3.select(options.ele);
      var tbl = tblele.append('table');
      if(options.attrs) {
        for(attr in options.attrs) { 
          tbl.attr(attr, options.attrs[attr]);
        }
      }

      // table header
      if (options.header!==false) {
        var head = tbl.append('thead');
        var rows = head.selectAll('tr')
          .attr('class', 'nap')
          .data(options.columns)
          .enter().append('th')
            .attr('class', 'nap')
            .text(function(d) { return d; });
      }
      
      // table body
      var body = tbl.append('body');
      var rows = body.selectAll('tr')
        .data(options.data);

      rowsEnter = rows.enter().append('tr');
      
      cells = rowsEnter.selectAll('td')
        .data(function(row) { 
          return options.columns.map(function(col) {
            var v = (row[col]['format']===undefined)
              ? row[col]['value']
              : d3.format(row[col]['format'])(row[col]['value']);
            return {column: col, value: v}
          });
        })
        .enter().append('td')
        .attr('class', function(d) { return d.column; })
        .text(function(d) { return d.value; });
    
    }


    // add the library to the window
    window.nap = nap;
})();




