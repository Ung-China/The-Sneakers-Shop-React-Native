export default class User {
  uid: string;
  name: string;
  email: string;
  phoneNumber: string;
  image: string;
  password?: string;
  constructor(
    uid: string,
    name: string,
    email: string,
    phoneNumber: string,
    image: string,
    password?: string,
  ) {
    this.uid = uid;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.image = image;
    this.password = password;
  }
}
