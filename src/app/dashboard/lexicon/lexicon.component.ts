import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {DialogComponent} from '../dialog/dialog.component'
import Lexicon from '../../shared/models/word'



const words:Lexicon[] = [
  {
      Word: "Fraud",
      Rating: -0.8
  },
  {
      Word: "Twat",
      Rating: -0.8
  },
  {
      Word: "Hell",
      Rating: -0.8
  },
  {
      Word: "Torture",
      Rating: -0.8
  },
  {
      Word: "Wtf",
      Rating: -0.8
  },
  {
      Word: "Agonised",
      Rating: -0.5
  },
  {
      Word: "Angry",
      Rating: -0.5
  },
  {
      Word: "Arrested",
      Rating: -0.5
  },
  {
      Word: "Bad",
      Rating: -0.5
  },
  {
      Word: "Boring",
      Rating: -0.5
  },
  {
      Word: "Charged",
      Rating: -0.5
  },
  {
      Word: "Cheated",
      Rating: -0.5
  },
  {
      Word: "Conspiracy",
      Rating: -0.5
  },
  {
      Word: "Crisis",
      Rating: -0.5
  },
  {
      Word: "Damage",
      Rating: -0.5
  },
  {
      Word: "Damaged",
      Rating: -0.5
  },
  {
      Word: "Deceiving",
      Rating: -0.5
  },
  {
      Word: "Destroyed",
      Rating: -0.5
  },
  {
      Word: "Disastrous",
      Rating: -0.5
  },
  {
      Word: "Evil",
      Rating: -0.5
  },
  {
      Word: "Fake",
      Rating: -0.5,
  },
  {
      Word: "Fatalities",
      Rating: -0.5
  },
  {
      Word: "Guilty",
      Rating: -0.5
  },
  {
      Word: "Guilt",
      Rating: -0.5
  },
  {
      Word: "Hate",
      Rating: -0.5
  },
  {
      Word: "Hating",
      Rating: -0.5
  },
  {
      Word: "Horrific",
      Rating: -0.5
  },
  {
      Word: "hysterical",
      Rating: -0.5
  },
  {
      Word: "irritating",
      Rating: -0.5
  },
  {
      Word: "killed",
      Rating: -0.5
  },
  {
      Word: "liar",
      Rating: -0.5
  },
  {
      Word: "loser",
      Rating: -0.5
  },
  {
      Word: "mad",
      Rating: -0.5
  },
  {
      Word: "misleading",
      Rating: -0.5
  },
  {
      Word: "murdering",
      Rating: -0.5
  },
  {
      Word: "not-working",
      Rating: -0.5
  },
  {
      Word: "outrage",
      Rating: -0.5
  },
  {
      Word: "panic",
      Rating: -0.5
  },
  {
      Word: "racist",
      Rating: -0.5
  },
  {
      Word: "scandalous",
      Rating: -0.5
  },
  {
      Word: "slavery",
      Rating: -0.5
  },
  {
      Word: "terrible",
      Rating: -0.5
  },
  {
      Word: "terrorize",
      Rating: -0.5
  },
  {
      Word: "trauma",
      Rating: -0.5
  },
  {
      Word: "traumatic",
      Rating: -0.5
  },
  {
      Word: "ugly",
      Rating: -0.5
  },
  {
      Word: "violence",
      Rating: -0.5
  },
  {
      Word: "worst",
      Rating: -0.5
  },
  {
      Word: "irritating",
      Rating: -0.5
  },
  {
      Word: "achieve",
      Rating: 0.4
  },
  {
      Word: "active",
      Rating: 0.4
  },
  {
      Word: "advanced",
      Rating: 0.4
  },
  {
      Word: "agree",
      Rating: 0.4
  },
  {
      Word: "attracted",
      Rating: 0.4
  },
  {
      Word: "achieved",
      Rating: 0.4
  },
  {
      Word: "big",
      Rating: 0.4
  },
  {
      Word: "boost",
      Rating: 0.4
  },
  {
      Word: "bright",
      Rating: 0.4
  },
  {
      Word: "capable",
      Rating: 0.4
  },
  {
      Word: "clears",
      Rating: 0.4
  },
  {
      Word: "Convinced",
      Rating: 0.4
  },
  {
      Word: "Cool",
      Rating: 0.4
  },
  {
      Word: "Decisive",
      Rating: 0.4
  },
  {
      Word: "Dream",
      Rating: 0.4
  },
  {
      Word: "Easy",
      Rating: 0.4
  },
  {
      Word: "Engaged",
      Rating: 0.4
  },
  {
      Word: "Expand",
      Rating: 0.4
  },
  {
      Word: "faith",
      Rating: 0.4
  },
  {
      Word: "forgive",
      Rating: 0.4
  },
  {
      Word: "Free",
      Rating: 0.4
  },
  {
      Word: "God",
      Rating: 0.4
  },
  {
      Word: "Granted",
      Rating: 0.4
  },
  {
      Word: "Greeting",
      Rating: 0.4
  },
  {
      Word: "Growing",
      Rating: 0.4
  },
  {
      Word: "Huge",
      Rating: 0.4
  },
  {
      Word: "Heroes",
      Rating: 0.4
  },
  {
      Word: "Honor",
      Rating: 0.4
  },
  {
      Word: "Immune",
      Rating: 0.4
  },
  {
      Word: "Important",
      Rating: 0.4
  },
  {
      Word: "indestructable",
      Rating: 0.4
  },
  {
      Word: "Increase",
      Rating: 0.4
  },
  {
      Word: "Inovative",
      Rating: 0.4
  },
  {
      Word: "Interesting",
      Rating: 0.4
  },
  {
      Word: "Join",
      Rating: 0.4
  },
  {
      Word: "laugh",
      Rating: 0.4
  },
  {
      Word: "Launched",
      Rating: 0.4
  },
  {
      Word: "Legal",
      Rating: 0.4
  },
  {
      Word: "motivation",
      Rating: 0.4
  },
  {
      Word: "natural",
      Rating: 0.4
  },
  {
      Word: "Pretty",
      Rating: 0.4
  },
  {
      Word: "Promoted",
      Rating: 0.4
  },
  {
      Word: "Protected",
      Rating: 0.4
  },
  {
      Word: "Restored",
      Rating: 0.4
  },
  {
      Word: "relieve",
      Rating: 0.4
  },
  {
      Word: "Reassure",
      Rating: 0.4
  },
  {
      Word: "Safe",
      Rating: 0.4
  },
  {
      Word: "Significant",
      Rating: 0.4
  },
  {
      Word: "Smart",
      Rating: 0.4
  },
  {
      Word: "Solved",
      Rating: 0.4
  },
  {
      Word: "Stimulated",
      Rating: 0.4
  },
  {
      Word: "Supporting",
      Rating: 0.4
  },
  {
      Word: "Strength",
      Rating: 0.4
  },
  {
      Word: "united",
      Rating: 0.4
  },
  {
      Word: "warm",
      Rating: 0.4
  },
  {
      Word: "Welcome",
      Rating: 0.4
  },
  {
      Word: "Wealth",
      Rating: 0.4
  },
  {
      Word: "admire",
      Rating: 0.8
  },
  {
      Word: "adorable",
      Rating: 0.8
  },
  {
      Word: "affection",
      Rating: 0.8
  },
  {
      Word: "amusement",
      Rating: 0.8
  },
  {
      Word: "award",
      Rating: 0.8
  },
  {
      Word: "beautiful",
      Rating: 0.8
  },
  {
      Word: "beloved",
      Rating: 0.8
  },
  {
      Word: "best",
      Rating: 0.8
  },
  {
      Word: "celebration",
      Rating: 0.8
  },
  {
      Word: "Charming",
      Rating: 0.8
  },
  {
      Word: "Classy",
      Rating: 0.8
  },
  {
      Word: "delighted",
      Rating: 0.8
  },
  {
      Word: "devoted",
      Rating: 0.8
  },
  {
      Word: "excellent",
      Rating: 0.8
  },
  {
      Word: "excitement",
      Rating: 0.8
  },
  {
      Word: "exhilarating",
      Rating: 0.8
  },
  {
      Word: "Faithful",
      Rating: 0.8
  },
  {
      Word: "fascinating",
      Rating: 0.8
  },
  {
      Word: "genial",
      Rating: 0.8
  },
  {
      Word: "good",
      Rating: 0.8
  },
  {
      Word: "glamorous",
      Rating: 0.8
  },
  {
      Word: "greatest",
      Rating: 0.8
  },
  {
      Word: "happiness",
      Rating: 0.8
  },
  {
      Word: "happy",
      Rating: 0.8
  },
  {
      Word: "heroic",
      Rating: 0.8
  },
  {
      Word: "impressive",
      Rating: 0.8
  },
  {
      Word: "Inspiring",
      Rating: 0.8
  },
  {
      Word: "Joy",
      Rating: 0.8
  },
  {
      Word: "Love",
      Rating: 0.8
  },
  {
      Word: "Loyal",
      Rating: 0.8
  },
  {
      Word: "Lucky",
      Rating: 0.8
  },
  {
      Word: "merry",
      Rating: 0.8
  },
  {
      Word: "nice",
      Rating: 0.8
  },
  {
      Word: "perfect",
      Rating: 0.8
  },
  {
      Word: "pleasant",
      Rating: 0.8
  },
  {
      Word: "Pleasure",
      Rating: 0.8
  },
  {
      Word: "Popular",
      Rating: 0.8
  },
  {
      Word: "praise",
      Rating: 0.8
  },
  {
      Word: "rigorous",
      Rating: 0.8
  },
  {
      Word: "successful",
      Rating: 0.8
  },
  {
      Word: "super",
      Rating: 0.8
  },
  {
      Word: "vibrant",
      Rating: 0.8
  },
  {
      Word: "visionary",
      Rating: 0.8
  },
  {
      Word: "vital",
      Rating: 0.8
  },
  {
      Word: "wealth",
      Rating: 0.8
  },
  {
      Word: "win",
      Rating: 0.8
  },
  {
      Word: "miracle",
      Rating: 0.8
  },
  {
      Word: "winning",
      Rating: 0.8
  },
  {
    Word: 'Neutral',
    Rating: 0
  }
].sort((a, b) => a.Word.toLowerCase().localeCompare(b.Word.toLowerCase()))

enum SentimentRating {
  'Nice' = 0.4,
  'Excellent'= 0.8,
  'Modest' = 0,
  'Horrible' = -0.8,
  'Ugly' = -0.5
}

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.scss'],
})
export class LexiconComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Lexicon>(words);
  displayedColumns: string[] = ['Word', 'Rating', 'Action'];
  ratings = SentimentRating;
  sentimentLabels: string[] = [];
  keys = this.mapEnum()

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.keys);
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

  public openDialog(action: string, obj: any) {
    obj.action = action;
    obj.keys = this.keys;
    obj.Rating = obj.Rating.toString();
    console.log(obj);
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: obj
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log('Dialog was closed');
      console.log(res);
    })
  }

  mapEnum() {
    return Object.entries(this.ratings).map(([key, value]) => ({rating: key, value: value.toString()})).filter(f => isNaN(Number(f.rating)))
  }

  applyFilter(val: string):void {
    this.dataSource.filter = val;
  }

  displayRating(rating: number): string {
    let ratingObj = this.keys.filter(x => Number(x.value) == rating);
    return ratingObj[0].rating
  }
}
