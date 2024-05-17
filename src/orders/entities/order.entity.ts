import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Order {
    @Field()
    total_amount: number;

    @Field()
    order_date: Date;

    @Field()
    status: string;
}
