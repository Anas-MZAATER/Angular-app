// import {Component, OnInit} from '@angular/core';
//
// @Component({
//   selector: 'app-products',
//   standalone: false,
//   templateUrl: './products.html',
//   styleUrl: './products.css'
// })
// export class Products implements OnInit {
//   public products :products[] =[
//     {"id":1,"name":"ecran","price":1200},
//     {"id":2,"name":"Iphone","price":5000},
//     {"id":3,"name":"souris optique","price":30},
//     {"id":4,"name":"imprimant","price":4500}
//   ];
//   Constructor(){
//   }
//   ngOnInit(): void {
//     // throw new Error('Method not implemented.');
//   }
//
//
// }
// export interface products {
//   id: number;
//   name: string;
//   price: number;
// }
//=================================2eme methode===================
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  public products :any;
  public keyword : string = "";
  Constructor(){
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.products =[
      {"id":1,"name":"ecran","price":1200},
      {"id":2,"name":"Iphone","price":5000},
      {"id":3,"name":"souris optique","price":30},
      {"id":4,"name":"imprimant","price":4500}
    ];
  }


  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1)
  }

  search() {
    console.log(this.keyword)
    let result : any=[];
    for(let p of this.products){
      if (p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    //========or by filter==============
    // this.products.filter(p => p.name?.toString().toLowerCase().includes(this.keyword.toLowerCase()))
    this.products = result;
  }
}
