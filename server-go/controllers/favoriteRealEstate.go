package controllers

import (
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
	FavoritoId        int     `json:"favorito_id"`
	IdRealEstatePhoto int     `json:"id_real_estate_photo"`
	IdPhoto           int     `json:"id_photo"`
	Url               string  `json:"url"`
	PublicId          string  `json:"public_id"`
	Title             string  `json:"title"`
	Description       string  `json:"description"`
	Email             string  `json:"email"`
	IdUser            int     `json:"id_user"`
	AmountBedroom     int     `json:"amount_bedroom"`
	Price             int     `json:"price"`
	AmountBathroom    int     `json:"amount_bathroom"`
	SquareMeter       float64 `json:"square_meter"`
	Address           string  `json:"address"`
}

func GetFavoritesRE(c *fiber.Ctx) error {
	id := c.Params("user_id")
	var favorites []ListFav
	database.DB.Raw(`select fav.id as favorito_id, fav.user_id, fav.real_estate_id,
	u.email,
	re.title, re.description
	from favorite_real_estates fav JOIN users u 
	ON fav.user_id=u.id JOIN real_estates re ON fav.real_estate_id = re.id
	where u.id =` + id).Scan(&favorites)

	c.Status(200)
	return c.JSON(fiber.Map{
		"data":    favorites,
		"message": "Operation completed successfully",
	})
}
