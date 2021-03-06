import { User } from '../models/user.model';
import { Result } from '../models/result.model';
import { AccountService } from '../services/account.service';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contratcs';
import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';

// localhost:3000/customer
@Controller('v1/customers')
export class CustomerController {
    constructor(private readonly accountService: AccountService) { }

    @Get()
    get() {

        return new Result(null, true, [], null);
    }

    @Get(':document')
    getById(@Param('document') document) {

        return new Result(null, true, {}, null);
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    async post(@Body() model: CreateCustomerDto) {

        const user = await this.accountService.create(new User(model.document, model.password, true));
        return new Result('Cliente criado com sucesso!', true, user, null);
    }

    @Put(':document')
    put(@Param('document') document, @Body() body) {

        return new Result('Cliente alterado com sucesso!', true, body, null);
    }

    @Delete(':document')
    delete(@Param('document') document) {

        return new Result('Cliente removido com sucesso!', true, null, null);
    }
}
