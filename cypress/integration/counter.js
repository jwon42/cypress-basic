describe('counter tests', () => {
  let plusButtonClassName = '.plus-button';
  let minusButtonClassName = '.minus-button';

	it('1. check minus button', () => {
		cy.visit('/');
    checkCounterButton(cy, minusButtonClassName, '9');
    checkCounterButton(cy, minusButtonClassName, '8');
	});

	it('2. check plus button', () => {
		cy.reload();
    checkCounterButton(cy, plusButtonClassName, '11');
    checkCounterButton(cy, plusButtonClassName, '12');
	});

  it('3. check min value', () => {
    cy.reload();
    checkCounterButton(cy, minusButtonClassName, '9');
    checkCounterButton(cy, minusButtonClassName, '8');
    checkCounterButton(cy, minusButtonClassName, '8');
    checkCounterButton(cy, minusButtonClassName, '8');
  })

  it('4. check max value', () => {
    cy.reload();
    checkCounterButton(cy, plusButtonClassName, '11');
    checkCounterButton(cy, plusButtonClassName, '12');
    checkCounterButton(cy, plusButtonClassName, '12');
    checkCounterButton(cy, plusButtonClassName, '12');
  })

});

const checkCounterButton = (cy, buttonClassName, expectedResult) => {
  cy.get(buttonClassName).click().get('.count-display').should('value', expectedResult);
}