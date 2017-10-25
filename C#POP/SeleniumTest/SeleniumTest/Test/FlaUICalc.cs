using System;
using FlaUI.Core;
using FlaUI.UIA3;
using FlaUI.Core.AutomationElements;
using FlaUI.Core.AutomationElements.Infrastructure;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace SeleniumTest.Test
{
    [TestClass]
    public class FlaUICalc
    {
        public object Find { get; private set; }

        [TestMethod]
        public void FlaUICalcTest()
        {
            var app = Application.LaunchStoreApp("Microsoft.WindowsCalculator_8wekyb3d8bbwe!App");
            app.WaitWhileMainHandleIsMissing();

            using (var automation = new UIA3Automation())
            {
                var window = app.GetMainWindow(automation);

                Button bMenu = window.FindFirstDescendant(cf => cf.ByName("Menu")).AsButton();
                System.Threading.Thread.Sleep(1000);
                bMenu.Click();

                Tree listMenu = window.FindFirstDescendant(cf => cf.ByName("Lista rozwijana trybów")).AsTree();
                listMenu.FindFirstDescendant(cf => cf.ByName("Naukowy Kalkulator")).AsButton().Click();

                window.FindFirstDescendant(cf => cf.ByName("Jeden")).AsButton().Click();
                window.FindFirstDescendant(cf => cf.ByName("Plus")).AsButton().Click();
                window.FindFirstDescendant(cf => cf.ByName("Dwa")).AsButton().Click();
                window.FindFirstDescendant(cf => cf.ByName("Równa się")).AsButton().Click();

                //check result
                var resultElement = window.FindFirstDescendant(cf => cf.ByAutomationId("CalculatorResults"));
                var resultValue = resultElement.Properties.Name;

                Assert.AreEqual("Wyświetlana wartość to 3", resultValue);
            }

            app.Close();
        }
    }
}
