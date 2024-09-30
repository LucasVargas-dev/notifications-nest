/**
Defina uma interface para criar um objeto, mas deixe as subclasses decidirem qual classe instanciar. 
O Factory Method permite que uma classe adie a instanciação para subclasses.

Resumindo, o padrão Factory Method dispõe de uma classe abstrata ou uma interface que “realiza a criação do objeto”, 
porém a decisão de que classe concreta será instaciada é de suas subclasses.

// Abstrair criação de objetos.
 */

import {Notification,NotificationProtocol} from '@src/app/entities/notification/notification';
import { validNotification } from '@test/mocks/notification-mocks';

// Partial faz com que todas as propriedades sejam opcionais ou undefined
type Override = Partial<NotificationProtocol>;
  
// prefixar com make para indicar que é uma factory 
export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    ...validNotification,
    ...override,
  });
}

export function makeMultipleNotification(
  override: Override = {}, // campos a sobrepor
  quantity = 1,
  callback,
): void {
  for (let index = 1; index <= quantity; index++) {
    const notification = new Notification({
      ...validNotification,
      ...override,
    });

    if (callback) callback(notification);
  }
}