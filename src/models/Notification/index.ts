export default class Notification {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  galleries: string[];

  constructor(
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    galleries: string[],
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.galleries = galleries;
  }
}

export const notifications: Notification[] = [
  new Notification(
    1,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    2,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    3,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    4,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    5,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    6,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    7,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    8,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    9,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
  new Notification(
    10,
    'Lipstick Classic Red',
    'Lorem ipsum dolor sit amet consectetur. Mattis tortor sed risus arcu. Urna elementum diam egestas neque suspendisse. ',
    'https://primary.jwwb.nl/public/z/v/x/temp-kdqogeuvuogtgzwcbsmk/wjna50/air-jordan-4-retro-university-blue-1-10001.png',
    [
      'https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:best/v1575961299/uploads/wysiwyg/y15brwltpatfmeo28qsd',
      'https://www.thenorthstreet.in/cdn/shop/files/PLP_Banner_Air_Jordan_Mobile.jpg?v=1674293803&width=3840',
      'https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/3:2/w_1737,h_1158,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png',
    ],
  ),
];
