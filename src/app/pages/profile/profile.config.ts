
// profileForm = this.fb.group({
//   name: [this.authService.user()?.name],
//   address: [this.authService.user()?.address],
//   age: [this.authService.user()?.age],
//   gender: [this.authService.user()?.gender],
//   phone_number: [this.authService.user()?.phone_number],
// });

export enum ControlProfileForm {
  NAME = 'name',
  ADDRESS = 'address',
  AGE = 'age',
  GENDER = 'gender',
  PHONE_NUMBER = 'phone_number'
}
