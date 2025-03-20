import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditUserDto } from '../../../../core/domain/entities/edit.user';
import { UserRepository } from '../../../../core/ports/repositories/user.repository';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  userId: string | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserRepository
  ) {
    this.userForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');

    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(user => {
        if (user) {
          this.userForm.patchValue(user);
        }
      });
    }
  }

  updateUser() {
    if (this.userForm.valid) {
      const updatedUser: EditUserDto = { ...this.userForm.getRawValue() };
      this.userService.updateUser(updatedUser).subscribe(() => {
        alert('Usuario actualizado con éxito');
        this.router.navigate(['/list']);
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
