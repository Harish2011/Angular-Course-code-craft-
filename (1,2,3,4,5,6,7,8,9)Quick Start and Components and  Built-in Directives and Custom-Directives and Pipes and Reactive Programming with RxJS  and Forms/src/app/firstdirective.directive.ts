import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';


@Directive({
  selector: '[appFirstdirective]'
})
export class FirstdirectiveDirective {

  constructor(private el :ElementRef) { 
    el.nativeElement.style.color="white"
    el.nativeElement.style.backgroundColor="gray"
    el.nativeElement.style.fontSize="30px"
  }

  

}
