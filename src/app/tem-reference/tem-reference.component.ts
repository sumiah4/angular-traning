import { Component } from '@angular/core';

@Component({
  selector: 'app-tem-reference',
  standalone: false,
  
  templateUrl: './tem-reference.component.html',
  styleUrl: './tem-reference.component.css'
})
export class TemReferenceComponent {

  paraColor:string = 'black';
  message:string = '';

  html_colors = [
    "aqua", "black", "blue", "fuchsia", "gray", "green", 
    "lime", "maroon", "navy", "olive", "purple", "red", 
    "silver", "teal", "white", "yellow"
]


  updateText(colorInput:HTMLInputElement) {
    //console.log(colorInput.value);
    //data:string = colorInput.value;
    if(this.html_colors.includes(colorInput.value.toLowerCase())) {
      this.paraColor = colorInput.value.toLowerCase();
    } else {
      alert('Enter a Colour');
      const inputBox = document.getElementById("ColourInput") as HTMLInputElement;
      inputBox.focus();
      this.message= 'You can enter colours like aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, yellow';
    }
  }

}
