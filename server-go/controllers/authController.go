package controllers

import (
	"github.com/JosseMontano/estateInTheCloud/models"
	"github.com/gofiber/fiber/v2"
)

func Register(c *fiber.Ctx) error {
	user := models.User{}
	return c.JSON(user)
}
