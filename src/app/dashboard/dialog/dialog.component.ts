import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  action?: string;
  Word: string;
  Rating: string;
  keys? : {rating: string, value: string}[]
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  action?:string;
  keys?: {rating: string, value: string}[];
  dialogData!: UserData;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {
    this.dialogData = {...data};
    this.action = this.dialogData.action;
    this.keys = this.dialogData.keys;
  }

  ngOnInit(): void {
    
  }

  doAction() {
    this.dialogRef.close({event: this.action, data: this.dialogData})
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }

  eventSelection(e:Event) {
    console.log(e);
    
  }
}
