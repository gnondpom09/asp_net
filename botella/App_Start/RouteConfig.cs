using System.Web.Mvc;
using System.Web.Routing;

namespace botella
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // page Accueil
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
            // page Biography
            routes.MapRoute(
                name: "Biograhy",
                url: "{controller}/{action}",
                defaults: new { controller = "Bio", action = "Biographie" }
            );
        }
    }
}
