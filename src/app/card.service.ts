import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Card } from './card.model';  

 @Injectable({  
  providedIn: 'root'  
})  
  
export class CardService {  
  url = 'http://localhost:53193/Api/Card';  
  constructor(private http: HttpClient) { }  
  getAllCard(): Observable<Card[]> {  
    return this.http.get<Card[]>(this.url + '/CardDetails');  
  }  
  getCardById(CardId: string): Observable<Card> {  
    return this.http.get<Card>(this.url + '/GetCardDetailsById/' + CardId);  
  }  
  createCard(Card: Card): Observable<Card> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Card>(this.url + '/InsertCardDetails/',  
    Card, httpOptions);  
  }  
  updateCard(Card: Card): Observable<Card> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Card>(this.url + '/UpdateCardDetails/',  
    Card, httpOptions);  
  }  
  deleteCardById(Cardid: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteCardDetails?id=' +Cardid,  
 httpOptions);  
  }  
}  