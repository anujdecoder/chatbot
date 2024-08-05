import React from 'react';
import Sent from '../../src/components/Messages/Sent';
import { Message } from '../../src/types/messages';

describe('Sent message behavior', () => {
  it('should render the message', () => {
    const message: Message = {
      id: 'message-1',
      body: 'Hello! How are you?',
    };
    cy.mount(<Sent message={message} onEdit={() => {}} onDelete={() => {}} index={0} />);
    cy.get('div[tabindex="0"]').should('have.text', message.body);
    cy.screenshot();
  });
});
