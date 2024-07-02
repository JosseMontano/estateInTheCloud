package models

type User struct {
	Id                 uint               `json:"id"`
	UserName           string             `json:"user_name" validate:"required,min=3,max=32"`
	CellphoneNumber    string             `json:"cellphone_number" validate:"required"`
	Email              string             `json:"email" validate:"required,email" gorm:"unique"`
	Password           []byte             `json:"password" validate:"required"`
	Qualification      int                `json:"qualification"`
	UrlPhoto           string             `json:"url_photo"`
	CodeRecuperation   string             `json:"code_recuperation"`
	Role               int                `json:"role" gorm:"default:2"` // 1: admin, 2: user
	Available          bool               `json:"available" gorm:"default:true"`
	FavoriteRealEstate FavoriteRealEstate `json:"favorite_real_estate"`
}

type ErrorResponse struct {
	FailedField string
	Tag         string
	Value       string
}
