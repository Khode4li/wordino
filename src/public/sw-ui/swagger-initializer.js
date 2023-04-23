window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  var currentHost = window.location.hostname;
  var currentProtocol = window.location.protocol;
  var currentPort = window.location.port;
  window.ui = SwaggerUIBundle({
    url: currentProtocol+"//"+currentHost+":"+currentPort+"/sw-ui/"+"sw.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
