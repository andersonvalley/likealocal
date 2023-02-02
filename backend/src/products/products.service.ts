import { Injectable } from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((item) => item.id === id);
  }

  create(productDto: createProductDto) {
    this.products.push({
      ...productDto,
      id: new Date().toString(),
    });
  }
}
