import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CategoryRepository } from './category.repository';
import { ProductRepository } from './product.repository';
import { RestService } from './rest.service';
import { Cart } from './cart.model'

@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, ProductRepository, CategoryRepository, Cart]
})

export class ModelModule {}