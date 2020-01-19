package Steps;

import Base.BaseUtil;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.Locatable;
import org.openqa.selenium.interactions.internal.Coordinates;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import pages.LoginPage;

import java.util.ArrayList;
import java.util.List;

public class LoginStep extends BaseUtil {

    private BaseUtil base;

    public LoginStep(BaseUtil base){
        this.base = base;
    }

    //eBAY
    @Given("^EBAY - Ingreso a la página EBAY$")
    public void ingresoALaPaginaEbay() throws Throwable {

        base.Driver.navigate().to("https://www.ebay.com/sch/i.html?_nkw=e-bay");
        base.Driver.manage().window().maximize();

    }


    @And("^EBAY - Clic en el boton Buscar$")
    public void Clic_en_el_boton_Inicio_Sesion() throws Throwable {
        LoginPage page = new LoginPage(base.Driver);
        page.clickBtnBuscar();
    }

    @And("^EBAY - Seleccionar la marca PUMA$")
    public void Clic_en_el_boton_marca_puma() throws Throwable {
        LoginPage page = new LoginPage(base.Driver);
        page.clickChkMarcaPuma();
    }

    @And("^EBAY - Seleccionar estado Nuevo con Defectos")
    public void Clic_en_el_stado_nuevo_con_defectos() throws Throwable {

        LoginPage page = new LoginPage(base.Driver);
        page.clickChkEstadoNuevoConDefectos();
    }

    @And("^EBAY - Se imprime el numero de resultados de la busqueda")
    public void Imprimir_resultados() throws Throwable {

        LoginPage page = new LoginPage(base.Driver);
        page.sleepElement(5000);
        System.out.println("Se obtuvieron: " + page.getTextResultadoBusqueda());
    }

    @And("^EBAY - Se imprime los cinco primeros productos")
    public void Imprimir_cinco_primeros_productos() throws Throwable {
        LoginPage page = new LoginPage(base.Driver);
        page.sleepElement(5000);
        for(int i=1; i<=5; i++){
            if(i<4) {
                System.out.println("Producto: " + base.Driver.findElement(By.xpath("//div[@id='srp-river-results']/ul/li[" + i + "]/div/div[2]/a/h3"))
                + "Precio: " + base.Driver.findElement(By.xpath("//div[@id='srp-river-results']/ul/li[" + i + "]/div/div[2]/div[3]/div[1]/span")));
            }else{
                System.out.println("Producto: " + base.Driver.findElement(By.xpath("//div[@id='srp-river-results']/ul/li[" + i + "]/div/div[2]/a/h3"))
                + "Precio: " +base.Driver.findElement(By.xpath("//div[@id='srp-river-results']/ul/li[" + i + "]/div/div[2]/div[3]/div[1]/span/span")));
            }
        }
    }

    @And("^EBAY - Seleccionar producto por precio orden ascendente$")
    public void Seleccionar_Producto_Orden_Ascendente_Precio() throws Throwable {
        Actions action = new Actions(base.Driver);
        action.moveToElement(base.Driver.findElement(By.xpath("//div[text()='Mejor resultado']"))).build().perform();

        LoginPage page = new LoginPage(base.Driver);
        page.clickBtnPrecioAscendente();
    }


    @When("^EBAY - Ingreso el nombre del producto del \"([^\"]*)\"$")
    public void Ebay_Ingreso_nombre_producto(String producto) throws Throwable{
        LoginPage page = new LoginPage(base.Driver);
        page.borrarTxtBusqueda();
        page.ingresarBusqueda(producto);
    }

}
