 package models

 type User struct {
	Id uint
	UserName string 
	CellphoneNumber string
	Email string `gorm:"unique"`
	Password string
	Qualification int
	IdPhoto int 
 }