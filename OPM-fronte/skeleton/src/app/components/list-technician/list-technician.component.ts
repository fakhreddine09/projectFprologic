import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../../services/shared.service';
import { BackendService } from './../../services/backend.service';
import { environment } from '../../../environments/environment';
import Observer from '../../services/observer';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Subject } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list-technician',
  templateUrl: './list-technician.component.html',
  styleUrls: ['./list-technician.component.scss']
})
export class ListTechnicianComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  listuset: any = [];
  term: any;

  constructor(
    public sahredserv: SharedService,
    private backendService: BackendService,
    public sharedService: SharedService,
    public router: Router
  ) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6,
      responsive: true,
      dom: 'Bfrtip',
      stateSave: true, // Enable state saving
      // buttons: [
      //   'copy', 'csv', 'excel', 'pdf', 'print'
      // ]
    };
    this.getListUser();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getListUser() {
    this.backendService.get(`${environment.apiUrl}/tech/getlisttechncian`).subscribe(
      new Observer().OBSERVER_GET((response) => {
        this.listuset = response.rows;
        console.log(this.listuset);
        
        this.dtTrigger.next(); // Trigger DataTables after data is received
      })
    );
  }

  onCheckboxChange(id, etat): void {
    this.changeStatCompte(id, etat);
  }

  onCheckboxChange2(id, etat): void {
    this.changeStatCompte(id, etat);
  }

  changeStatCompte(id, etat) {
    const payload = { _id: id, valid: etat };
    this.backendService
      .put(`${environment.apiUrl}/tech/updateStatTech`, payload)
      .subscribe(new Observer(
        this.router, 
        null,
        true,
        true,
        this.sharedService,
        null
      ).OBSERVER_PUT());
  }
}