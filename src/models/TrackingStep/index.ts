export default class TrackingStep {
  id: number;
  date: number | null;
  icon: any;
  title: string;
  description: string;

  constructor(
    id: number,
    date: number | null,
    icon: any,
    title: string,
    description: string,
  ) {
    this.id = id;
    this.date = date;
    this.icon = icon;
    this.title = title;
    this.description = description;
  }
}
