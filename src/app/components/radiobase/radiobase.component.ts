import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RadiobaseService } from 'src/app/services/radiobase.service';



@Component({
  selector: 'app-radiobase',
  templateUrl: './radiobase.component.html',
  styleUrls: ['./radiobase.component.css']
})
export class RadiobaseComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<[]>;

  displayedColumns: string[] = [];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private radiobaseService: RadiobaseService) {

  }

  ngOnInit(): void {
    this.radiobaseService.getData().subscribe(r => {
      console.log('');
      this.displayedColumns = r.headers;
      this.columnsToDisplay = this.displayedColumns.slice();
      this.dataSource = new MatTableDataSource(r.rows);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}


