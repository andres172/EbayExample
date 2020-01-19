$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Ebay",
  "description": "",
  "id": "ebay",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Ebay"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "EBAY - BUSQUEDA DE PRODUCTO",
  "description": "",
  "id": "ebay;ebay---busqueda-de-producto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "EBAY - Ingreso a la página EBAY",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "EBAY - Ingreso el nombre del producto del \"\u003cproducto\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "EBAY - Clic en el boton Buscar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "EBAY - Seleccionar la marca PUMA",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "EBAY - Seleccionar estado Nuevo con Defectos",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "EBAY - Se imprime el numero de resultados de la busqueda",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "EBAY - Seleccionar producto por precio orden ascendente",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "EBAY - Se imprime los cinco primeros productos",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ebay;ebay---busqueda-de-producto;",
  "rows": [
    {
      "cells": [
        "producto"
      ],
      "line": 15,
      "id": "ebay;ebay---busqueda-de-producto;;1"
    },
    {
      "cells": [
        "shoes"
      ],
      "line": 16,
      "id": "ebay;ebay---busqueda-de-producto;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12351250800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "EBAY - BUSQUEDA DE PRODUCTO",
  "description": "",
  "id": "ebay;ebay---busqueda-de-producto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Ebay"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "EBAY - Ingreso a la página EBAY",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "EBAY - Ingreso el nombre del producto del \"shoes\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "EBAY - Clic en el boton Buscar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "EBAY - Seleccionar la marca PUMA",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "EBAY - Seleccionar estado Nuevo con Defectos",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "EBAY - Se imprime el numero de resultados de la busqueda",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "EBAY - Seleccionar producto por precio orden ascendente",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "EBAY - Se imprime los cinco primeros productos",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.ingresoALaPaginaEbay()"
});
formatter.result({
  "duration": 19619196200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 43
    }
  ],
  "location": "LoginStep.Ebay_Ingreso_nombre_producto(String)"
});
formatter.result({
  "duration": 19347780900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.Clic_en_el_boton_Inicio_Sesion()"
});
formatter.result({
  "duration": 8744341700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.Clic_en_el_boton_marca_puma()"
});
formatter.result({
  "duration": 15581492900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.Clic_en_el_stado_nuevo_con_defectos()"
});
formatter.result({
  "duration": 7945265300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.Imprimir_resultados()"
});
formatter.result({
  "duration": 12912298000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.Seleccionar_Producto_Orden_Ascendente_Precio()"
});
formatter.result({
  "duration": 5062811800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.Imprimir_cinco_primeros_productos()"
});
formatter.result({
  "duration": 11782666100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027srp-river-results\u0027]/ul/li[4]/div/div[2]/div[3]/div[1]/span/span\"}\n  (Session info: chrome\u003d79.0.3945.117)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027ANDRES-PC\u0027, ip: \u0027192.168.1.62\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.117, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ANDRES\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:55531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e4f93a853621d13d2a1bbdc29d4dd27b\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027srp-river-results\u0027]/ul/li[4]/div/div[2]/div[3]/div[1]/span/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat Steps.LoginStep.Imprimir_cinco_primeros_productos(LoginStep.java:78)\r\n\tat ✽.And EBAY - Se imprime los cinco primeros productos(Login.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 400100,
  "status": "passed"
});
});