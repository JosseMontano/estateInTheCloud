package models

import (
    "gorm.io/gorm"
)
type Question struct {
	gorm.Model
	Id       uint   `json:"id"`
	Question string `json:"question" validate:"required,min=3,max=32"`
}
