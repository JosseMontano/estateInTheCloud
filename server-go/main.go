package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/JosseMontano/estateInTheCloud/database"
	"github.com/JosseMontano/estateInTheCloud/routes"
)

func main() {

	database.Connect()

	app := fiber.New()

	routes.Setup(app)

	app.Listen(":8000")
}