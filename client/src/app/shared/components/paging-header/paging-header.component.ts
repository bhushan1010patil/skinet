import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrl: './paging-header.component.scss',
})
export class PagingHeaderComponent implements OnInit {
  
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() totalCount: number;

  constructor() {}

  ngOnInit(): void {
    console.log('In PagingHeaderComponent class:');
    console.log('pageNumber: ' + this.pageNumber);
    console.log('pageSize: ' + this.pageSize);
    console.log('totalCount: ' + this.totalCount);
  }
}
