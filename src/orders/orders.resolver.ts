import { Args, Query, Resolver } from '@nestjs/graphql';
import { Order } from './entities/order.entity';

const orders = [
    {
        _id: '663c5f95ddcbc2c182b61756',
        products: [{ _id: '663c5f95ddcbc2c182b61757', quantity: 2 }, { _id: '663c66785873cda6aaaf2028', quantity: 1 }],
        total_amount: 50,
        order_date: new Date(),
        status: 'pending',
    },
    {
        _id: '663d03ad85cfc5914e32049e',
        products: [{ _id: '663d03ad85cfc5914e32049f', quantity: 1 }, { _id: '663d03db85cfc5914e3204a1', quantity: 1 }],
        total_amount: 30,
        order_date: new Date(),
        status: 'pending',
    },
    {
        _id: '663d8f816aea046f25fd31c3',
        products: [{ _id: '663d8f816aea046f25fd31c4', quantity: 1 }, { _id: '66431da883a94b7f43f6a7b9', quantity: 1 }],
        total_amount: 30,
        order_date: new Date(),
        status: 'pending',
    },
]

@Resolver(() => Order)
export class OrdersResolver {
    @Query(() => [Order], { name: 'orders' })
    findAll() {
        return orders;
    }

    @Query(() => Order, { name: 'order' })
    findOne(@Args('id') id: string) {
        return orders.find(order => order._id === id);
    }
}
