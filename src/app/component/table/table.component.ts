import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { PopupComponent } from 'src/app/modal/popup/popup.component';
import { TableApiService } from 'src/app/service/table-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSource: MatTableDataSource<any>
  displayColumns: string[] = ['title', 'url', 'created_at', 'author']

  constructor(
    public tableApi: TableApiService,
    public matdia: MatDialog
  ) {
    this.tableApi.fetchData().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<any>(res.hits)
      console.log(this.dataSource)
    })

  }
  rowClick(tableData) {
    this.matdia.open(PopupComponent, {
      width: '500px',
      height: '500px',
      data: { tableData }
    })
  }

  ngOnInit() {
  }
  search(event) {
    const filter = (event.target as HTMLInputElement).value
    this.dataSource.filter = filter.trim().toLowerCase()
  }

}
