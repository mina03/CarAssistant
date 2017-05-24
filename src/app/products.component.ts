import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'products',
    template: `<h2>Product Page</h2>
         <a routerLink='men'>Men</a> 
         <a routerLink='women'>Women</a> 
         <a routerLink='kids'>Kids</a>  
         <router-outlet></router-outlet>     
    `
})
export class ProductsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}