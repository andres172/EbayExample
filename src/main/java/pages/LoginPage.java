package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }


    //Ebay Methods
    @FindBy(how = How.XPATH, using = "//*[@id='gh-btn']")
    public WebElement btnBuscar;
    public void clickBtnBuscar(){
        btnBuscar.click();
    }

    @FindBy(how = How.XPATH, using = "//input[@aria-label='PUMA'][@aria-label='PUMA']")
    public WebElement chkboxMarcaPuma;
    public void clickChkMarcaPuma() throws InterruptedException {
        Thread.sleep(5000);
        chkboxMarcaPuma.click();
        Thread.sleep(5000);

    }

    @FindBy(how = How.XPATH, using = "//span[text()='Nuevo con defectos']")
    public WebElement chkboxEstadoNuevoConDefectos;
    public void clickChkEstadoNuevoConDefectos(){
        chkboxEstadoNuevoConDefectos.click();
    }

    @FindBy(how = How.XPATH, using = "//h1[@class='srp-controls__count-heading']")
    public WebElement txtResultadosBusqueda;
    public String getTextResultadoBusqueda(){
        return txtResultadosBusqueda.getText();
    }

    @FindBy(how = How.XPATH, using = "//ul[@class='srp-sort__menu']/li[4]/a")
    public WebElement btnPrecioAscendente;
    public void clickBtnPrecioAscendente(){

        btnPrecioAscendente.click();
    }


    @FindBy(how = How.XPATH, using = "//*[@id='gh-ac']")
    public WebElement txtBoxBusqueda;
    public void borrarTxtBusqueda(){

        txtBoxBusqueda.clear();
    }

    public void ingresarBusqueda(String producto){

        txtBoxBusqueda.sendKeys(producto);
    }

    public void sleepElement(int milisecond) throws InterruptedException {
        Thread.sleep(milisecond);
    }

}


