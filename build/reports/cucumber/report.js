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
  "duration": 21390121800,
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
  "duration": 16756615400,
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
