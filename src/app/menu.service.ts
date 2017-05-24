import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {

    menuItems:string[];
    constructor(){
        this.menuItems = ["Home", "Products", "Photos", "Contacts", "Help", "Helpdesk"];
    }

    getItems(){
        return this.menuItems;
    }

}