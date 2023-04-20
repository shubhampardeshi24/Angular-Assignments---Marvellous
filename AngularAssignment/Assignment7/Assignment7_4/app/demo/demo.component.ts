import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public button1 : String = "marvellous infosystem";


  public toLower() : String{
    this.button1 = this.button1.toLowerCase();
    return this.button1;
  }
 
  public toUpper() : String{
    this.button1 = this.button1.toUpperCase();
    return this.button1;
  }

}
