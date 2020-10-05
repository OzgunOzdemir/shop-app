import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CategoryRepository } from './category.repository';
import { ProductRepository } from './product.repository';
import { RestService } from './rest.service';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository'

@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, ProductRepository, CategoryRepository, Cart, Order, OrderRepository]
})

export class ModelModule {}