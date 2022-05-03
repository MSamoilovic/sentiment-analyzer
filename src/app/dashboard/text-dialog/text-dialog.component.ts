import { Component, ElementRef, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-text-dialog',
  templateUrl: './text-dialog.component.html',
  styleUrls: ['./text-dialog.component.scss']
})
export class TextDialogComponent implements OnInit {

  @ViewChild('textDialogInput', {static: false}) textInput: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<TextDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  doAction() {
    this.dialogRef.close({data: this.textInput.nativeElement.value})

  }

  closeDialog() {
    this.dialogRef.close();

  }
}
