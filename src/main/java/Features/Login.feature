  @Ebay
  Feature: Ebay

  Scenario Outline: EBAY - BUSQUEDA DE PRODUCTO
    Given EBAY - Ingreso a la página EBAY
    When EBAY - Ingreso el nombre del producto del "<producto>"
    And EBAY - Clic en el boton Buscar
    And EBAY - Seleccionar la marca PUMA
    And EBAY - Seleccionar estado Nuevo con Defectos
    And EBAY - Se imprime el numero de resultados de la busqueda
    And EBAY - Seleccionar producto por precio orden ascendente
    And EBAY - Se imprime los cinco primeros productos

    Examples:
      |producto|
      |shoes|




