package controllers

import (
	"github.com/JosseMontano/estateInTheCloud/database"
	"github.com/JosseMontano/estateInTheCloud/models"
	"github.com/gofiber/fiber/v2"
)

func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user []models.User
	database.DB.Where("id = ?", id).Find(&user)
	c.Status(200)
	return c.JSON(user)
}

func GetUserData(c *fiber.Ctx) error {
	id := c.Params("id")
	var user []models.User
	database.DB.Where("id = ?", id).Find(&user)
	c.Status(200)
	return c.JSON(fiber.Map{
		"data":user,
	})
}

func GetUsers(c *fiber.Ctx) error {
	var users []models.User
	database.DB.Find(&users)
	c.Status(200)
	return c.JSON(users)
}

func DisableUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User
	database.DB.Where("id = ?", id).Find(&user)
	database.DB.Model(&user).Update("available", false)
	c.Status(200)
	return c.JSON(fiber.Map{
		"message":"User disabled",
		"data":user,
	})
}

func EnableUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User
	database.DB.Where("id = ?", id).Find(&user)
	database.DB.Model(&user).Update("available", true)
	c.Status(200)
	return c.JSON(fiber.Map{
		"message":"User enabled",
		"data":user,
	})
}


