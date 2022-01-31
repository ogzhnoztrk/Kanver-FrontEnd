import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import {Contact} from 'src/app/models/contact/contact';
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css'],
})
export class ComplaintComponent implements OnInit {

  contacts: Contact[];
  complaintAddForm: FormGroup;
  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private complaintService: ComplaintService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllContact();
    this.createComplaintAddForm();
  }

  createComplaintAddForm() {
    this.complaintAddForm = this.formBuilder.group({
      complaintContent: ['', Validators.required],
      complaintSubject: ['', Validators.required],
      email: ['', Validators.required],
      fullName: ['', Validators.required],
    });
  }

  add() {
    if (this.complaintAddForm.valid) {
      let complaintContent = Object.assign({}, this.complaintAddForm.value);
      this.complaintService.add(complaintContent).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.Errors.lenghth > 0) {
            for (let i = 0; i < responseError.error.Errors.lenghth; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Form eksik', 'Dikkat');
    }
  }

  getAllContact(){
    this.contactService.getAnnouncements().subscribe(resp => {
      this.contacts = resp.data
      console.log(this.contacts)
    })
  }
}
