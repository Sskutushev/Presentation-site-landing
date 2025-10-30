describe('DexSafe Wallet Pro Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads all sections of the landing page', () => {
    // Check that key sections are visible
    cy.get('[data-testid="hero-section"]').should('be.visible');
    cy.get('[data-testid="problem-section"]').should('be.visible');
    cy.get('[data-testid="solution-section"]').should('be.visible');
    cy.get('[data-testid="upa-section"]').should('be.visible');
    cy.get('[data-testid="features-section"]').should('be.visible');
    cy.get('[data-testid="status-section"]').should('be.visible');
    cy.get('[data-testid="roadmap-section"]').should('be.visible');
    cy.get('[data-testid="contact-section"]').should('be.visible');
  });

  it('navigation links work correctly', () => {
    // Test navigation to different sections
    cy.contains('Проблема').click();
    cy.url().should('include', '#problem');

    cy.contains('Решение').click();
    cy.url().should('include', '#solution');

    cy.contains('UPA Engine').click();
    cy.url().should('include', '#upa');

    cy.contains('Статус').click();
    cy.url().should('include', '#status');

    cy.contains('Roadmap').click();
    cy.url().should('include', '#roadmap');

    cy.contains('Контакт').click();
    cy.url().should('include', '#contact');
  });

  it('displays correctly on mobile resolution', () => {
    cy.viewport('iphone-6');

    // Check that mobile menu button is visible
    cy.get('button').should('be.visible');

    // Test mobile navigation
    cy.get('button').click(); // Open mobile menu
    cy.contains('Проблема').should('be.visible');
    cy.contains('Решение').should('be.visible');
  });

  it('buttons are functional', () => {
    // Test primary button in hero section
    cy.contains('Узнать больше').should('be.visible').click();

    // Test secondary button in hero section
    cy.contains('Запустить бота').should('be.visible');
  });
});
