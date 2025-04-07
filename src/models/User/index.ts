export default class User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  image: string;
  token: string;
  constructor(
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    image: string,
    token: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.image = image;
    this.token = token;
  }
}
