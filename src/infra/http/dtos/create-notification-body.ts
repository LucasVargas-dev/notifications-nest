/*
DTO = Data Transfer Object
DTOs are used to define the shape of the data that is sent to the server.
This is a CreateNotificationBody DTO that defines the shape of the data that is sent to the server when creating a notification.

Pattern para referenciar objetos que carregam dados de uma camada para outra mas que não possuem comportamentos. Só carregam dados.
*/

import { IsNotEmpty, IsUUID, Length } from '@nestjs/class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 50)
  category: string;

  @IsNotEmpty()
  @Length(5, 255)
  content: string;
}