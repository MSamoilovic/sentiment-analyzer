import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LexiconComponent } from './lexicon/lexicon.component';
import { CalculationComponent } from './calculation/calculation.component';
import { MatTabsModule } from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TextDialogComponent } from './text-dialog/text-dialog.component';
import { FileDialogComponent } from './file-dialog/file-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { SafeHtmlPipe } from '../shared/pipes/safe-html.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    LexiconComponent,
    CalculationComponent,
    DialogComponent,
    TextDialogComponent,
    FileDialogComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatProgressBarModule,
  ],
  exports: [
    LexiconComponent
  ]
})
export class DashboardModule { }
