import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LexiconComponent } from './lexicon/lexicon.component';
import { CalculationComponent } from './calculation/calculation.component';
import { MatTabsModule } from '@angular/material/tabs'



@NgModule({
  declarations: [
    DashboardComponent,
    LexiconComponent,
    CalculationComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    LexiconComponent
  ]
})
export class DashboardModule { }
