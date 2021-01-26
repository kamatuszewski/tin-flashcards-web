import { EToastr } from '../enums/toastr.enum';

export interface IToastr {
  text: string;
  type: EToastr,
}
