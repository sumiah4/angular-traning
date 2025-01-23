import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  @Input() isHighlight = false;

  constructor(private element:ElementRef, private renderer: Renderer2){alert('doooo');}

  ngOnChanges(): void {
    alert('jjj');
    const color = this.isHighlight ? 'yellow' : 'gray';
    this.renderer.setStyle(this.element.nativeElement, 'color', color);
  }

}
