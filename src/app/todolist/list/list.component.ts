import { Component, Input } from '@angular/core'

@Component({

    selector:'app-list',
    templateUrl:'./list.component.html',
    styleUrls:['./list.component.css']
})


export class ListComponent{
@Input() childstring:string;
localitem:string;
parselist:string[];

Refresh(){

    this.parselist=JSON.parse(localStorage.getItem("localitems"));
    //  if(this.parselist!=null)
    //  this.additem=this.parselist;
       }

  Update(){
    this.parselist=JSON.parse(localStorage.getItem("localitems"));
  }

  
  Delete(i){
    // this.additem.splice(i,1);
    // localStorage.setItem("localitems", JSON.stringify(this.additem));
    // this.parselist=JSON.parse(localStorage.getItem("localitems"));
    this.Update();
  }


}

