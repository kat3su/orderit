export class ProductOption {
  title: string;
  image?: string;
  value: any;

  constructor(data?: any) {
    if (data) {

      this.updateSelfData(['title', 'image', 'value'], data);
    }
  }

  updateSelfData(fields, data) {
    fields.map(field => {
      if (data[field]) {
        this[field] = data[field];
      }
    });
  }
}
