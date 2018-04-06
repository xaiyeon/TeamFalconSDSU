// tslint:disable-next-line:class-name
export class hardwarePart {
  public title: string;
  public quantity: number;
  public subtitle: string;
  public image: string;
  public secondTitle: string;
  public price: number;
  public specs: string;
  public why: string;
  public modalName: string;
  public modalTitle: string;
  public modalImage: string;
  public modelDescription: string;
  public modalTemplate: string;

  constructor(
    title: string,
    quantity: number,
    subtitle: string,
    image: string,
    secondTitle: string,
    price: number,
    specs: string,
    why: string,
    modalName: string,
    modalTitle: string,
    modalImage: string,
    modalDescription: string,
    modalTemplate: string
  ) {
    this.title = title;
    this.quantity = quantity;
    this.subtitle = subtitle;
    this.image = image;
    this.secondTitle = secondTitle;
    this.price = price;
    this.specs = specs;
    this.why = why;
    this.modalName = modalName;
    this.modalTitle = modalTitle;
    this.modalImage = modalImage;
    this.modelDescription = modalDescription;
    this.modalTemplate = modalTemplate;
  }

}
