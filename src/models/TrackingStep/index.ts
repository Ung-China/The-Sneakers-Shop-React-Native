import {SvgProps} from 'react-native-svg';

export default class TrackingStep {
  id: number;
  date: number | null;
  icon: React.FC<SvgProps>;
  title: string;
  description: string;

  constructor(
    id: number,
    date: number | null,
    icon: React.FC<SvgProps>,
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
