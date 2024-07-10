import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolderDetailesRoutingModule } from './folder-detailes-routing.module';
import { FolderDetailesComponent } from './folder-detailes.component';
import {SharedModule} from './../../theme/shared/shared.module'

import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import {DataTablesModule} from 'angular-datatables';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [FolderDetailesComponent],
  imports: [
    CommonModule,
    FolderDetailesRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    DataTablesModule,
    NgbTooltipModule
  ],
  providers: [
    DatePipe // Add DatePipe here
  ],
})
export class FolderDetailesModule { }
