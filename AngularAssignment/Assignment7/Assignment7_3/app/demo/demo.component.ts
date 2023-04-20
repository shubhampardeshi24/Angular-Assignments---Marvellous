import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public message :string = "Marvellous infosystem"
  public onSubmit() : string {
    this.message = "Educating for better tomorrow";
    return this.message
  }
 
}
