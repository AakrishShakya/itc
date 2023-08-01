using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using itc_mvc.Models;

namespace itc_mvc.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {

        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
       public IActionResult main()
    {
        return View();
    }
         public IActionResult product()
    {
        return View();
    }

         public IActionResult aboutus()
    {
        return View();
    }

             public IActionResult contactus()
    {
        return View();
    }

            public IActionResult wishlist()
    {
        return View();
    }
           public IActionResult finalproduct()
    {
        return View();
    }
  
           public IActionResult quotation()
    {
        return View();
    }
}
