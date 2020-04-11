export class Card{
    public Id : number;
    public CardName : string;
    public Description : string;
    public Price : number

    constructor (id: number, cardname : string, description : string, price : number){
        this.Id = id;
        this.CardName = cardname;
        this.Description = description;
        this.Price = price
    }
}