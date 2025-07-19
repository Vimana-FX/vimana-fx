import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  successMsg: string | null = null;
  errorMsg: string | null = null;
  supportEmail: string = 'vimanafx@gmail.com';
  address: string = '80/1, Malleshpalya, Bangalore, Karnataka 560075';

  onSubmit(form: any): void {
    if (form.valid) {
      this.successMsg = 'Thank you! Your message has been sent.';
      this.errorMsg = null;
      form.resetForm();
    } else {
      this.successMsg = null;
      this.errorMsg = 'Please fill all fields correctly before submitting.';
    }
  }
}
