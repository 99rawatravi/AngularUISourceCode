import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';
import { CardService } from '../card.service';  
import { Card } from '../card.model'

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {  
  dataSaved = false;  
  cardForm: any;  
  allcards: Observable<Card[]>;  
  cardIdUpdate = null;  
  massage = null;  
  
  constructor(private formbulider: FormBuilder, private cardService :CardService) { }  
  
  ngOnInit() {  
    this.cardForm = this.formbulider.group({  
      Id: ['', [Validators.required]],  
      Name: ['', [Validators.required]],  
      Description: ['', [Validators.required]],  
      Price: ['', [Validators.required]] 
    });  
    this.loadAllCards();  
  }  
  loadAllCards() {  
    this.allcards = this.cardService.getAllCard();  
  }  
  onFormSubmit() {  
    this.dataSaved = false;  
    const card = this.cardForm.value;  
    this.CreateCarde(card);  
    this.cardForm.reset();  
  }  
  loadCardToEdit(cardId: string) {  
    this.cardService.getCardById(cardId).subscribe(card=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.cardIdUpdate = card.Id;  
      this.cardForm.controls['Id'].setValue(card.Id);  
     this.cardForm.controls['Name'].setValue(card.CardName);  
      this.cardForm.controls['Description'].setValue(card.Description);  
      this.cardForm.controls['Price'].setValue(card.Price); 
    });  
  
  }  
  CreateCarde(card: Card) {  
    if (this.cardIdUpdate == null) {  
      this.cardService.createCard(card).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.loadAllCards();  
          this.cardIdUpdate = null;  
          this.cardForm.reset();  
        }  
      );  
    } else {  
      card.Id = this.cardIdUpdate;  
      this.cardService.updateCard(card).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.loadAllCards();  
        this.cardIdUpdate = null;  
        this.cardForm.reset();  
      });  
    }  
  }   
  deleteEmployee(employeeId: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.cardService.deleteCardById(employeeId).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllCards();  
      this.cardIdUpdate = null;  
      this.cardForm.reset();  
  
    });  
  }  
}  
  resetForm() {  
    this.cardForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
  }  
}  
