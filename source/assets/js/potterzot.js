initGA = function() {
  // initialize google analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)
    }
    ,i[r].l=1*new Date();a=s.createElement(o)
    ,m=s.getElementsByTagName(o)[0];
    
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-2451740-1', 'auto');
  ga('send', 'pageview');
}


makeFooter = function(settings) {
  // just add the elements from the footer section
  var container = d3.select("div.container");

  // Sections
  d3.keys(settings.sections).forEach(function(rowkey) {
    row = settings.sections[rowkey];
    // Add the links at the bottom
    var links = container.append('div')
      .attr('class', 'row links');

    d3.keys(row).forEach(function(key) {
      var section = row[key];

      var secDiv = links.append('div')
        .attr('class', 'col-lg-'+section.colwidth)

      var secTitle = secDiv.append('h5')
        .text(key);

      var secList = secDiv.append('ul')
        .attr('class', 'non-indent');

      secList.selectAll('li')
        .data(section.links)
        .enter().append('li')
          .attr('class', 'list')
          .style('list-style', 'none')
          .append('a')
            .attr('class', 'gray')
            .attr('href', function(d) { return d.link; })
            .text(function(d) { return d.text; });
    });
  });

  // add copyright
  var foot = container.append("div")
    .attr("class", "row footer");
  foot.append('p')
      .attr('class', 'text-center non-indent')
      .html(settings.copy);

}

makeHeader = function(settings) {
  // create the site name link
  d3.select("div.navbar-header").append("a")
    .attr("class", "navbar-brand color0")
    .attr("href", settings.siteLocation)
    .text(settings.siteName);

  // create the links on the right side
  var list = d3.select("ul.nav");
  settings.links.forEach(function(link) {
    list.append('li').append('a')
      .attr("class", "color0")
      .attr("href", link.href)
      .text(link.text);
  });

}

makeHtml = function(content) {
  //adds an html file as content
  var container = d3.select("div.container");

  var contentdiv = container.append("div")
    .attr("class", "content")
    .attr("id", "content");

  var cdiv = document.getElementById("content");
  cdiv.innerHTML = content;
}

makeJumbo = function(settings) {
  // just add each of hte elements. Pretty generic
  var container = d3.select("div.container");
  var jumbo = container.select("div.jumbotron");
  if(jumbo[0][0]===null) {
    var jumbo = container.insert("div")
      .attr("class", "jumbotron")
      .append("div");
  }

  settings.elements.forEach(function(j) { 
    var ele = jumbo.append(j.name);
    j.attrs.forEach(function(attr) { 
      ele.attr(attr.key, attr.value) 
    }); 
    ele.text(j.text);
  });
}

makeJumboPage = function(settings) {
  //make a page with a jumbotron
  if(settings.jumbo) makeJumbo(settings.jumbo);
  if(settings.sections) makeSections(settings.sections);
}

makeMarkdown = function(content) {
  //processes a markdown to html and adds it as content
  var container = d3.select("div.container");

  var contentdiv = container.append("div")
    .attr("class", "content")
    .html(markdown.toHTML(content));

}

makePage = function(config) {
  var app = {};

  // Activate Google Analytics
  initGA();

  // get the settings from the file
  $.ajax('/config/default.json' , {
    async: false
    , success: function(res) { app.settings = $.extend({}, res); }
    , error: function(e) { console.log(e); }
  });
  $.ajax(config.cfile , {
    async: false
    , success: function(res) { app.settings = $.extend(app.settings, res); }
    , error: function(e) { console.log(e); }
  });
  
  // Page Header
  if(app.settings.header) makeHeader(app.settings.header);
  
  // Page Content
  switch(app.settings.type) {
    case "jumbo":
      makeJumboPage(app.settings);
      break;
    case "text":
    case "html":
    case "md":
      makeTextPage(app.settings);
      break;
    default:
      makeTextPage(app.settings);
  }

  // Page Footer
  if(app.settings.footer) makeFooter(app.settings.footer);

  // Bring in any additional javascript
  if(app.settings.jsFiles) {
  
  }

  window.app = app;
}

makeSections = function(sections) {
  // add each section according to a 3 column format
  var container = d3.select("div.container");
  
  var row = container.append("div").attr("class", "row");
  // three columns
  var cols = [];
  cols.push(row.append("div").attr("class", "col-lg-4"));
  cols.push(row.append("div").attr("class", "col-lg-4"));
  cols.push(row.append("div").attr("class", "col-lg-4"));

  // add each section to the right column
  sections.forEach(function(section, i) { 
    var col = cols[i%3];
    var link = col.append("a")
      .attr("class", "thumbnail link-plain color0")
      .attr("href", section.href);
 
    link.append("h4")
      .attr("class", "text-center")
      .text(section.title);

    if(section.text) link.append("p")
      .text(section.text);

    if(section.img) link.append("img")
      .attr("src", section.img);
  }); 
}

makeText = function(content) {
  //add a text file as content
  //adds a <p> between each line break
  var container = d3.select("div.container");
  
  var contentdiv = container.append("div")
    .attr("class", "content");

  // add a new paragraph for each newline
  content.split("\n").forEach(function(para) { 
    contentdiv.append("p")
      .attr("class", "indent")
      .text(para);
  });
}

makeTextPage = function(settings) {
  //make a page that is text. Generally a story or a data visualization page
  var container = d3.select("div.container")
 
  // create the page title
  if(settings.title) {
    var pageTitle = container.append("div")
      .attr("class", "page");

    pageTitle.append("h1")
      .attr("class", "text-center")
      .text(settings.title);
  }

  // create any additional elements
  if(settings.elements) {
    settings.elements.forEach(function(e) { 
      var pageTitle = pageTitle || container.append("div").attr("class", 'page');
      var ele = pageTitle.append(e.name);
      e.attrs.forEach(function(attr) { 
        ele.attr(attr.key, attr.value) 
      });
      (e.text) 
        ? ele.text(e.text)
        : ele.html(e.html);
    });
  }
  
  // get the content file
  $.ajax(settings.filename, {
    async: false
    , success: function(res) { content = res; }
    , error: function(e) { console.log(e.error()); }
  });
  
  if(settings.type==="text") {
    makeText(content);
  }
  else if (settings.type=="html") {
    makeHtml(content);
  }
  else if (settings.type=="md") {
    makeMarkdown(content);
  }
}





