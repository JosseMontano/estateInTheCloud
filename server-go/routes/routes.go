package routes

import (
	"github.com/JosseMontano/estateInTheCloud/controllers"
	"github.com/JosseMontano/estateInTheCloud/middleware"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World 👋!")
	})

	//======================= AUTH =======================

	app.Post("/api/signup", controllers.Register)
	app.Post("/api/signin", controllers.SingIn)
	app.Post("/api/sendCodeGmail", controllers.SendCodeToGmail)
	app.Post("/api/changePassword", controllers.ChangePassword)
	app.Post("/api/loginGoogle", controllers.LoginGoogle)
	app.Get("/api/me", controllers.User)

	app.Use(middleware.ValidateJwt)

	//======================= USER =======================
	app.Get("/api/getUserComplete/:id", controllers.GetUser)
	app.Get("/api/getUserCompleteData/:id", controllers.GetUserData)
	app.Get("/api/getUsers", controllers.GetUsers)
	app.Get("/api/disableUser/:id", controllers.DisableUser)
	app.Get("/api/enableUser/:id", controllers.EnableUser)

	//======================= AUTH =======================
	
	app.Post("/api/logout", controllers.Logout)

	//======================= REAL ESTATE =======================
	app.Get("/api/allRealEstate", controllers.AllRE)
	app.Get("/api/typeRealEstate", controllers.AllTypeRE)
	app.Get("/api/estateMostRecent", controllers.MostRecentRE)
	app.Get("/api/estateRecommendedByUser", controllers.UserRecommend)
	app.Get("/api/realEstate/:id", controllers.RealEstate)
	app.Get("/api/realEstateByType/:type", controllers.RealEstateByType)

	//======================= Question =======================
	
	app.Get("/api/question/:idReal_Estate", controllers.GetQuestion)
	app.Post("/api/question", controllers.CreateQuestion)
	app.Delete("/api/question/:id", controllers.DeleteQuestion)
	app.Get("/api/questions", controllers.GetAllQuestions)
	//======================= Photo =======================
	app.Get("/api/photo/:id", controllers.GetPhoto)

	//======================= Favorite =======================
	app.Post("/api/favorite-real-estate", controllers.AddFavorite)
	app.Get("/api/favorite-real-estate/:user_id", controllers.GetFavoritesRE)
	app.Delete("/api/favorite-real-estate/:id", controllers.DeleteFavorite)

	//======================= IA =======================
	app.Get("/api/filter-intelligent/:user_id", controllers.FilterIntelligente)

	app.Post("/api/realEstate", controllers.CreateRE)

}
