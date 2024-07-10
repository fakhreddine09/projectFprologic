import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AddAndUpdateContractComponent } from './contractMang/add-and-update-contract/add-and-update-contract.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { AffecteTeamsComponent } from './contractMang/affecte-teams/affecte-teams.component';
import { DataTablesModule } from 'angular-datatables';

import { AffecteTeamsModule } from './contractMang/affecte-teams/affecte-teams.module';
import { AddFilesToContractModule } from './contractMang/add-files-to-contract/add-files-to-contract.module';
import { AddClientModule } from './add-client/add-client.module';
import { AddUpdateSitesComponent } from './contractMang/add-update-sites/add-update-sites.component';
import { AddUpdateEquipemontComponent } from './contractMang/add-update-equipemont/add-update-equipemont.component';
import { AddCustomerManagementComponent } from './contractMang/add-customer-management/add-customer-management.component';
import { AddUpdateEquipemontSofetComponent } from './contractMang/add-update-equipemont-sofet/add-update-equipemont-sofet.component';
import { AddUpdateSupportComponent } from './support/add-update-support/add-update-support.component';
import { AddUpdatevisitPrevComponent } from './contractMang/add-updatevisit-prev/add-updatevisit-prev.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AjouterEtmodifierVisiteComponent } from './MangFolders/ajouter-etmodifier-visite/ajouter-etmodifier-visite.component';
import { AddUpdateFoldersModule } from './MangFolders/add-update-folders/add-update-folders.module';
import { ImpoertListEquipmentHaredComponent } from './contractMang/impoert-list-equipment-hared/impoert-list-equipment-hared.component';
import { ImpoertListEquipmentSoftComponent } from './contractMang/impoert-list-equipment-soft/impoert-list-equipment-soft.component';
import { InfoClanderModule } from './contractMang/info-clander/info-clander.module';
import { CustomerAddAffectComponent } from './contractMang/customer-add-affect/customer-add-affect.component';
import { CustomerAffectOledComponent } from './contractMang/customer-affect-oled/customer-affect-oled.component';

@NgModule({
  declarations: [
    AddAndUpdateContractComponent,
    AddUpdateSitesComponent, 
    AddUpdateEquipemontComponent,
    AddCustomerManagementComponent,
    AddUpdateEquipemontSofetComponent,
    AddUpdateSupportComponent,
    AddUpdatevisitPrevComponent,
    AjouterEtmodifierVisiteComponent,
    ImpoertListEquipmentHaredComponent,
    ImpoertListEquipmentSoftComponent,
    CustomerAddAffectComponent,
    CustomerAffectOledComponent,
    ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    AffecteTeamsModule,
    AddFilesToContractModule,
    InfoClanderModule,
    AddClientModule,
    NgbDatepickerModule,
    AddUpdateFoldersModule,
  ],
  exports: [
    AddAndUpdateContractComponent // Export if it needs to be used in other modules
  ]
})
export class ComponentsModule { }
