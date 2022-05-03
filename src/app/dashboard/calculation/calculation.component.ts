import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';
import Lexicon from 'src/app/shared/models/word';
import { CalculatorService } from 'src/app/shared/services/calculator.service';
import { FileDialogComponent } from '../file-dialog/file-dialog.component';
import { TextDialogComponent } from '../text-dialog/text-dialog.component';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  dataToAnalyze:string = '';
  score:number = 0;
  @Input()
  lexiconData: Lexicon[];
  @ViewChild('textAnalyzerInput', {static: false}) textAnalyzerInput: ElementRef;


  constructor(private dialog: MatDialog, private calculatorService: CalculatorService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
  }

  openTextDialog() {
   const textDialogRef = this.dialog.open(TextDialogComponent, {
     width: '600px',
     autoFocus: true
   })

   textDialogRef.afterClosed().subscribe(res => this.dataToAnalyze = res.data);
  }

  openFileDialog() {
    const fileDialogRef = this.dialog.open(FileDialogComponent, {
      width: '300px'
    })

    fileDialogRef.afterClosed().subscribe(res => this.dataToAnalyze = res.data);
  }

  clearAnalyzerData() {
    this.dataToAnalyze = '';
    this.score = 0;
  }

  analyzeData(data: SafeHtml) {
   let analysisData =  this.calculatorService.analyzeData(data, this.lexiconData);
  
   this.dataToAnalyze = analysisData.text;
   this.score = analysisData.score;
  }
}
