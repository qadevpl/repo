using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Windows.Automation;
using Winium.Cruciatus.Core;
using Winium.Cruciatus.Extensions;

namespace SeleniumTest.Test
{
    //example page: https://github.com/2gis/Winium.Cruciatus
    [TestClass]
    public class WiniumCalc
    {
        [TestInitialize]
        public void Setup()
        {
            
        }

        [TestMethod]
        public void WiniumCalcTest()
        {
            var calc = new Winium.Cruciatus.Application("C:/windows/system32/calc.exe");
            calc.Start();

            var winFinder = By.Name("Kalkulator").AndType(ControlType.Window);
            var win = Winium.Cruciatus.CruciatusFactory.Root.FindElement(winFinder);

            win.FindElementByName("Menu").Click();

            var listMenu = win.FindElementByName("Lista rozwijana trybów").ToListBox();
            listMenu.FindElementByName("Naukowy Kalkulator").Click(); 

            win.FindElementByName("Jeden").Click();
            win.FindElementByName("Plus").Click();
            win.FindElementByName("Dwa").Click();
            win.FindElementByName("Równa się").Click();

            //didn't work
            //calc.Close();
        }
    }
}
