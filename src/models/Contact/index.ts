export default class Contact {
  icon: string;
  link?: string;
  title?: string;

  constructor(data: {icon: string; link?: string; title?: string}) {
    this.icon = data.icon;
    this.link = data.link;
    this.title = data.title;
  }
}
