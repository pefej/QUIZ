import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect: boolean = false;

  constructor(private ef: ElementRef, private render: Renderer2) { }
  @HostListener('click') answer() {
    if (this.isCorrect) {
      this.render.setStyle(this.ef.nativeElement, 'background-color', 'green');
      this.render.setStyle(this.ef.nativeElement, 'color', 'white');
      this.render.setStyle(this.ef.nativeElement, 'border', '2px solid grey');
    } else {
      this.render.setStyle(this.ef.nativeElement, 'background-color', 'red');
      this.render.setStyle(this.ef.nativeElement, 'color', 'white');
      this.render.setStyle(this.ef.nativeElement, 'border', '2px solid grey');
    }
  }

}
