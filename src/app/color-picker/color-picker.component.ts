import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ColorPickerService, Rgba } from 'ngx-color-picker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  @ViewChild('colorInput', { static: true }) colorInput: ElementRef<HTMLElement>

  @Input() color = '#ffffffff';

  constructor(private colorService: ColorPickerService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onColorPickerChange() {
    console.log(`Color is: ${this.color}`);
  }

  onColorPickerOpen() {
    console.log(` - Opening with color: ${this.color}`);
    // const inputElement = this.colorInput?.nativeElement?.getElementsByClassName('hex-text')?.[0]?.getElementsByTagName('input')?.[0];
    // if (inputElement) {
    //   console.log(inputElement);
    //   inputElement.value = this.color;
    // }
    // console.log('Color picker service translated');

    const currentColor = this.color;
    this.color = '#ffffffff';
    this.changeDetector.detectChanges();
    this.color = currentColor;
  }
}
