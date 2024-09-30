import { Module } from '@nestjs/common';
import { InfraModule } from '@infra/infra.module';

/*
  Decorator é tudo que tem o @. 
  Conceito: Função que adiciona comportamento extra a classes, métodos ou propriedades. Eles são usados para marcar e configurar componentes, 
  como rotas (@Get(), @Post()), validações (@Body(), @Param()), ou injeções de dependência (@Injectable()).

  Definir o tipo da rota dentro do Controller como @Get() ou @Post() é uma forma de definir o tipo de requisição que a rota irá aceitar.
  O @Get() é um decorator que define que a rota aceitará requisições do tipo GET. Passar a rota @Get(/hello-world)
*/

/*
  Service: 
  Basicamente pode ser qualquer classe que não seja um Controller ou um Module.
*/

/**
 Injectable é uma classe que pode ser injetada em outras classes como dependência. 
 Isso é feito usando o decorator @Injectable(), permitindo que o Nest gerencie a criação e a injeção de instâncias automaticamente.

  Inversão de dependência é um princípio onde uma classe não cria suas próprias dependências, mas as recebe de fora, 
  permitindo maior flexibilidade e testes fáceis. No NestJS, isso é feito por meio do sistema de injeção de dependências.

  import { Injectable } from '@nestjs/common';

  @Injectable()
  export class CatsService {
    getCats(): string[] {
      return ['cat1', 'cat2', 'cat3'];
    }
  }

  import { Controller, Get } from '@nestjs/common';
  import { CatsService } from './cats.service';

  @Controller('cats')
  export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getAllCats(): string[] {
      return this.catsService.getCats();
    }
  }

  Ao invés do CatsController criar uma instância de CatsService, ele recebe uma instância de CatsService no construtor.
 */

  

  @Module({
    imports: [InfraModule],
  })
  export class AppModule {}
