function loadScripts() {
  var scripts = [
    "consts.js",
    "event_listeners.js",
    "task_element_events.js"
  ];

  scripts.forEach(function(script) {
    var scriptElement = document.createElement("script");
    scriptElement.src = "js/scripts/" + script;
    document.body.appendChild(scriptElement);
  });
}

window.onload = loadScripts;