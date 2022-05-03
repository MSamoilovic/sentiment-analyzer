import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-file-dialog',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.scss']
})
export class FileDialogComponent implements OnInit {

  fileName:string = '';
  filePreview:any; 

  constructor(public dialogRef: MatDialogRef<FileDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }


  onFileSelected(e:any) {
    const file: File = e.target.files[0];
    
    if(file) {
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.filePreview = reader.result;
      }

      reader.readAsText(file);
    }
  }

  doAction() {
    this.dialogRef.close({data: this.filePreview});
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
