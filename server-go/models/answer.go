package models

type Answer struct {
	Id       uint   `json:"id"`
	Answer string `json:"answer" validate:"required,min=3,max=32"`
	
}
