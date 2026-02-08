import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestUser } from 'src/entities/testUserEntity';
import { TestUserService } from 'src/services/test-user/test-user.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
        type: 'sqlite',
        database: './database/gitflow.sqlite',
        entities: [TestUser],
        synchronize: true
    }),
    ],
    controllers: [],
    providers: [TestUserService]
})
export class DatabaseModuleModule {

}

