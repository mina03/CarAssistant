import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
    selector: 'product-details',
    template: `<h2>Product Details for {{product.Id}}`
})
export class ProductDetailsComponent implements OnInit {
    productId:string;
    constructor(private activatedroute:ActivatedRoute) { 
        
    }

    ngOnInit() { 

        // Service calls here
        // we ned to fetch the product id
        // RESTful call to get details for this productId

        // one time
        //this.productId = this.activatedroute.snapshot.params['id'];

        // Subscribe method of observables
        this.activatedroute.params.subscribe(params=>{
            this.productId = params['id'];
        });
    }
}