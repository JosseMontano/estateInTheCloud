package controllers

import (
	"github.com/JosseMontano/estateInTheCloud/database"
	"github.com/JosseMontano/estateInTheCloud/models"
	"github.com/gofiber/fiber/v2"
)

func GetQuestion(c *fiber.Ctx) error {
	id := c.Params("idReal_Estate")
	var questions []models.Question
	database.DB.Raw(`select * from questions q where q.id NOT IN (
	select aq.id_question as idQuestion 
	from answers_questions aq, answers a 
	where aq.id_answer=a.id and a.id_real_estate=` + id + `)`).Scan(&questions)
	c.Status(200)
	return c.JSON(questions)
}

func GetAllQuestions(c *fiber.Ctx) error {
	var questions []models.Question
	database.DB.Find(&questions)
	c.Status(200)
	return c.JSON(questions)
}

func CreateQuestion(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	questions := models.Question{
		Question: data["question"],
	}

	database.DB.Create(&questions)
	c.Status(200)
	return c.JSON(fiber.Map{
		"action": true,
	})
}

func DeleteQuestion(c *fiber.Ctx) error {
    id := c.Params("id")
    // First, delete related records in the answers_questions table
    if err := database.DB.Where("id_question = ?", id).Delete(&models.AnswersQuestion{}).Error; err != nil {
        return c.Status(500).JSON(fiber.Map{"error": "Failed to delete related answers"})
    }
    // Then, delete the question itself
    if err := database.DB.Where("id = ?", id).Delete(&models.Question{}).Error; err != nil {
        return c.Status(500).JSON(fiber.Map{"error": "Failed to delete question"})
    }
    c.Status(200)
    return c.JSON(fiber.Map{
        "message": "Question deleted",
    })
}
