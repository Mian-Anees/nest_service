import { ProductInputType, ProductOutputType } from './types/product.types';
import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  create(createProductDto: ProductInputType): ProductOutputType {
    return createProductDto;
  }

  findAll() {
    return `product added`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
