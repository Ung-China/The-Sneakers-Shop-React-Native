export default class OrderStatus {
  status: string;
  timeStamp: string;

  constructor(data: {status: string; timestamp: string}) {
    this.status = data.status;
    this.timeStamp = data.timestamp;
  }
}
