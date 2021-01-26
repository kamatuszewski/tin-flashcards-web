import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EToastr } from '../../enums/toastr.enum';
import { IToastr } from '../../interfaces/toastr.interface';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  public EToastr: typeof EToastr = EToastr;
  private toastr$: Observable<IToastr | null>;

  constructor(private toastrService: ToastrService) {}

  public close(): void {
    this.toastrService.closeToaster();
  }

  public ngOnInit(): void {
    this.toastr$ = this.toastrService.selectToastr();
  }
}
