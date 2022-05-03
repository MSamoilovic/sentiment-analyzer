import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import Lexicon from '../../shared/models/word';
import { LexiconService } from 'src/app/shared/services/lexicon.service';


enum SentimentRating {
  'Nice' = 0.4,
  'Excellent' = 0.8,
  'Modest' = 0,
  'Horrible' = -0.8,
  'Ugly' = -0.5,
}

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.scss'],
})
export class LexiconComponent implements OnInit, AfterViewInit {

  @Input()
  lexiconData: Lexicon[]

  dataSource = new MatTableDataSource<Lexicon>();
  displayedColumns: string[] = ['Word', 'Rating', 'Action'];
  ratings = SentimentRating;
  sentimentLabels: string[] = [];
  keys = this.mapEnum();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable, { static: false }) lexiconTable: MatTable<any>;

  constructor(private dialog: MatDialog, private lexiconService: LexiconService) {}

  ngOnInit(): void {

    this.dataSource.data = this.lexiconData;

    this.dataSource.data.sort((a, b) =>
      a.Word.toLowerCase().localeCompare(b.Word.toLowerCase())
    );

    this.dataSource.filterPredicate = (data, filter) => {
      return data.Rating == parseFloat(filter);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public openDialog(action: string, obj: any) {
    this.dataSource.filter = '';
    obj.action = action;
    obj.keys = this.keys;
    obj.Rating = obj.Rating ? obj.Rating.toString() : '0';
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res == undefined) {
        return;
      }

      switch (res.event) {
        case 'Add':
          this.addNewRow(res.data);
          break;
        case 'Update':
          this.updateRowData(res.data.Id, res.data);
          break;
        case 'Delete':
          this.deleteRowData(res.data);
          break;
        default:
          console.log('Dialog was closed!');
      }
    });
  }

  mapEnum() {
    return Object.entries(this.ratings)
      .map(([key, value]) => ({ rating: key, value: value.toString() }))
      .filter((f) => isNaN(Number(f.rating)));
  }

  applyFilter(val: string): void {
    this.dataSource.filter = val.trim().toLowerCase();
  }

  displayRating(rating: number): string {
    let ratingObj = this.keys.filter((x) => Number(x.value) == rating);
    return ratingObj[0].rating;
  }

  addNewRow(res: any) {
    let newRow: Lexicon = {
      Id: this.dataSource.data.length + 1,
      Word: res.Word,
      Rating: parseFloat(res.Rating),
    };
    this.dataSource.data = this.lexiconService.saveLexiconData(newRow, this.dataSource.data);
    this.dataSource._updateChangeSubscription();
    
  }

  updateRowData(id: any, res: any) {  

    this.dataSource.data = this.lexiconService.updateLexiconData(id, res, this.dataSource.data);
    this.dataSource._updateChangeSubscription();
  }

  deleteRowData(res: any) {
    this.dataSource.data = this.lexiconService.deleteLexiconData(res, this.dataSource.data);
    this.dataSource._updateChangeSubscription();
  }
}
