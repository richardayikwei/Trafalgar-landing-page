
(function (elem) {
  function loadjsfile(filename) {
    var fileref = document.createElement("script");
    var date = new Date();
    fileref.setAttribute("type", "text/javascript");

    fileref.onload = fileref.onreadystatechange = function () {
      var jobWidget = new freshTeam.JobWidget(
        elem,
        "https://kofa.freshteam.com"
      );
    };
    fileref.setAttribute("src", filename + "?t=" + date.valueOf());
    if (typeof fileref != undefined) {
      document.getElementsByTagName("head")[0].appendChild(fileref);
    }
  }

  function loadcssfile(filename) {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("href", filename);
    if (typeof fileref != "undefined") {
      document.getElementsByTagName("head")[0].appendChild(fileref);
    }
  }

  loadcssfile("https://assets1.freshteam.com/assets/job_widget.css");
  loadjsfile("https://assets1.freshteam.com/assets/job_widget.js");
})("freshteam-widget");
