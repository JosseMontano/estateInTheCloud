package models

import (
    "gorm.io/gorm"
)

type AnswersQuestion struct {
    gorm.Model
    AnswerID   uint `json:"id_answer" gorm:"not null"`
	Answer    Answer `json:"answer" gorm:"foreignKey:AnswerID"`
    QuestionID uint `json:"id_question" gorm:"not null"`
	Question  Question `json:"question" gorm:"foreignKey:QuestionID"`
}