package controllers

import (
	"net/http"
	"strconv"

	"github.com/JosseMontano/estateInTheCloud/database"
	"github.com/JosseMontano/estateInTheCloud/models"
	"github.com/gofiber/fiber/v2"
)

func AddFavorite(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	userId, _ := strconv.ParseUint(data["user_id"], 10, 32)
	REId, _ := strconv.ParseUint(data["real_estate_id"], 10, 32)

	favoriteRE := models.FavoriteRealEstate{
		RealEstateId: uint(REId),
		UserId:       uint(userId),
	}

	database.DB.Create(&favoriteRE)
	c.Status(200)
	return c.JSON(fiber.Map{
		"message": "Guardado correctamente",
		"data":    favoriteRE,
	})
}

type ListFav struct {
	FavoritoId   int    `json:"favorito_id"`
	UserId       int    `json:"user_id"`
	RealEstateId int    `json:"real_estate_id"`
	Email        string `json:"email"`
	Title        string `json:"title"`
	Description  string `json:"description"`
	Url          string `json:"url"`
}

func GetFavoritesRE(c *fiber.Ctx) error {
	id := c.Params("user_id")
	var favorites []ListFav
	database.DB.Raw(`
	select DISTINCT on (fav.id) fav.id as favorito_id, fav.user_id, fav.real_estate_id,
	u.email,
	re.title, re.description, 
	pho.url
	from favorite_real_estates fav 
	JOIN users u ON fav.user_id=u.id
	JOIN real_estates re ON fav.real_estate_id = re.id
	JOIN real_estates_photos rep ON rep.real_estate_id = re.id
	JOIN photos pho on pho.id = rep.photo_id
	where u.id = 
	` + id).Scan(&favorites)

	c.Status(200)
	return c.JSON(favorites)
}

func DeleteFavorite(c *fiber.Ctx) error{
	idParam := c.Params("id")
	id, _ := strconv.Atoi(idParam)

	var favorite models.FavoriteRealEstate
	database.DB.First(&favorite, id)

	database.DB.Delete(&favorite)
	
	c.Status(http.StatusOK)
	return c.JSON(fiber.Map{
		"message": "Se quito de favoritos",
		"data":    &favorite,
	})
}

