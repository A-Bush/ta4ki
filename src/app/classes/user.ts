export class User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dateCreate: Date;
  dateUpdate: Date;

  constructor(id: string, name: string, email: string, phone: string, dateCreate: Date, dateUpdate: Date){
    this._id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.dateCreate = dateCreate;
    this.dateUpdate = dateUpdate;
  }

}
