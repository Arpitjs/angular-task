import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  products = []
@Input() inputData: any
searchText = ''
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    // console.log('INPT', this.inputData)
    this.products = this.inputData
  }

}
