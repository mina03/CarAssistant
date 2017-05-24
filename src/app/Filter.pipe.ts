import {Pipe, PipeTransform,Injectable} from '@angular/core';

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field : string, value : string): any[] {  
        if(value===undefined || value==='')
            return items;
        if (!items) return [];        
        return items.filter(it => it[field] == value);
    }
}