import { Replace } from '@utils/helpers/Replace';
import { Content } from '@app/entities/notification/validation/content';
import { randomUUID } from 'node:crypto';

export interface NotificationProtocol {
  content: Content;
  recipientId: string;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProtocol;

  constructor(
    props: Replace<NotificationProtocol, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? `${randomUUID()}`;
    this.props = {
      ...props, // todas as props dentro
      createdAt: props.createdAt ?? new Date(), // se for informado, beleza. Do contrário insere data atual
    };
  }

  public get id(): string {
    return this._id;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public cancel() {
    return (this.props.canceledAt = new Date());
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}