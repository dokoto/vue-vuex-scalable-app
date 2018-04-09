/*
 * PARA DEPURAR:
 * - Se añade ".debug()" al final de algun cy.[].
 * - Ejecutamos $> npm run e2e-local
 * - F12
 * - Ejecutamos el spec que deseamos depurar
 * - Y nos parara en el codigo de cypress, buscamos con CTRL+P
 *   nuestro fichero test/e2e/speces/login.js
 * - Ponemos un break-point y "pa lante"
 */
const user = {
  name: `mogambo-${Date.now()}`,
  email: 'mogambo@cool.com',
  password: '123456'
};

describe('Register a new user and finish session', () => {
  it('Successfully load login page', () => {
    cy.visit('/');
    cy.get('.signup').should('contain', 'Registrarse');
  });

  it('Successfully registrer a test user', () => {
    cy.get('.signup').click();

    cy.get('.signup').should('contain', 'Autenticarse');
    cy.get('input[name=username]').type(user.name);
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.password);
    cy.get('form').submit();
  });

  it('Successfully load home page', () => {
    cy.url().should('include', '/home');
    cy.get('.logout').should('contain', 'Terminar session');
  });

  it('Finish the session', () => {
    cy.get('a.logout').click();
  });

  it('Reload and checkout we are on Login page', () => {
    cy.reload();
    cy.get('.signup').should('contain', 'Registrarse');
  });
});

describe('Login with an existing user and finish session', () => {
  it('We aready on Login page', () => {
    cy.get('.signup').should('contain', 'Registrarse');
  });

  it('Successfully loging a test user', () => {
    cy.get('input[name=username]').type(user.name);
    cy.get('input[name=password]').type(user.password);
    cy.get('form').submit();
  });

  it('Successfully load home page', () => {
    cy.url().should('include', '/home');
    cy.get('.logout').should('contain', 'Terminar session');
  });

  it('Finish the session', () => {
    cy.get('a.logout').click();
  });

  it('Reload and checkout we are on Login page', () => {
    cy.reload();
    cy.get('.signup').should('contain', 'Registrarse');
  });
});


describe('Try to register without data', () => {
  it('Successfully load login page', () => {
    cy.visit('/');
    cy.get('.signup').should('contain', 'Registrarse');
  });

  it('Go to register and submit without data', () => {
    cy.get('.signup').click();

    cy.get('.signup').should('contain', 'Autenticarse');
    cy.get('input[name=username]').type(user.name);
    cy.get('input[name=password]').type(user.password);
    cy.get('form').submit();
  });

  it('Check get an error message', () => {
    cy.get('.error-text').should('be.visible');
  });
});

describe('Try to register without email mandatory field', () => {
  it('Successfully load login page', () => {
    cy.visit('/');
    cy.get('.signup').should('contain', 'Registrarse');
  });

  it('Go to register and submit without data', () => {
    cy.get('.signup').click();

    cy.get('.signup').should('contain', 'Autenticarse');
    cy.get('input[name=username]').type(user.name);
    cy.get('input[name=password]').type(user.password);
    cy.get('form').submit();
  });

  it('Check get an error message', () => {
    cy.get('.error-text').should('be.visible');
  });
});

describe('Try to register with an existing user', () => {
  it('Successfully load login page', () => {
    cy.visit('/');
    cy.get('.signup').should('contain', 'Registrarse');
  });

  it('Go to register and submit without data', () => {
    cy.get('.signup').click();

    cy.get('.signup').should('contain', 'Autenticarse');
    cy.get('input[name=username]').type(user.name);
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.password);
    cy.get('form').submit();
  });

  it('Check get an error message', () => {
    cy.get('.error-text').should('be.visible');
  });
});

describe('Login with an wrong user and get an error', () => {
  it('Successfully load login page', () => {
    cy.visit('/');
    cy.get('.signup').should('contain', 'Registrarse');
  });

  it('Failed loging a test user', () => {
    cy.get('input[name=username]').type(`${user.name}-bad`);
    cy.get('input[name=password]').type(user.password);
    cy.get('form').submit();
  });

  it('Check get an error message', () => {
    cy.get('.error-text').should('be.visible');
  });
});

describe('Login with an wrong password', () => {
  it('Successfully load login page', () => {
    cy.visit('/');
    cy.get('.signup').should('contain', 'Registrarse');
  });

  it('Failed loging a test user', () => {
    cy.get('input[name=username]').type(`${user.name}`);
    cy.get('input[name=password]').type(`${user.password}-bad`);
    cy.get('form').submit();
  });

  it('Check get an error message', () => {
    cy.get('.error-text').should('be.visible');
  });
});
