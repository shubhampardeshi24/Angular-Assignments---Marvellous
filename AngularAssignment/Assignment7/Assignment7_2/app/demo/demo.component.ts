import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {


  public message : string ="";

  fun():string{
    this.message = "Marvellous Infosystem";
    return this.message;
  }
}
