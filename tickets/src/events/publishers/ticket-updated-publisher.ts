import { Publisher, Subjects, TicketUpdatedEvent } from '@thticketsms/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
