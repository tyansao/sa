describe("����������� ������ ������������", () => {
    it("�������� �����������", () => {
    cy.visit("https://petstore.swagger.io");
    cy.contains("New User?").click();
    // ���������� ����� ������ ������ ������������
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#username").type("johndoe");
    cy.get("#password").type("password");
    // ������� �� ������ "Register"
    cy.get("#register-button").click();
    // ��������, ��� ����� ������������ ������� ���������������
    cy.contains("Registered Successfully!");
    });
    });
  
    describe("����������� ������������� ������������", () => {
      it("�������� �����������", () => {
      cy.visit("https://petstore.swagger.io");
      // ���� ������ � ������ ������������� ������������
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      // ������� �� ������ "Login"
      cy.get("#login-button").click();
      // ��������, ��� ����������� ������ �������
      cy.contains("PRODUCTS");
      });
      });
  
      describe("���������� ������ � �������", () => {
        it("����� ������� �������� � �������", () => {
        cy.visit("https://petstore.swagger.io");
        // ���� ������ � ������ ������������� ������������
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        // ������� �� ������ "Login"
        cy.get("#login-button").click();
        // ����� ������ � ���������� � �������
        cy.get(".inventory_item")
      });
    });
  
  
  describe('����� ������', () => {
    beforeEach(() => {
    cy.visit('https://petstore.swagger.io')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
    })
    
    it('����� ������������� ������', () => {
    cy.get('.inventory_filter_container .product_sort_container').select('za')
    cy.get('.inventory_item_container .inventory_item:nth-child(1)').contains('Sauce Labs Onesie').should('exist')
    })
    
    it('����� ��������������� ������', () => {
    cy.get('.inventory_filter_container .product_sort_container').select('za')
    cy.get('.inventory_item_container .inventory_item:nth-child(1)').contains('Nonexistent Item').should('not.exist')
    })
    })
  
    describe('���������� �������', () => {
      beforeEach(() => {
      cy.visit('https://petstore.swagger.io')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('include', '/inventory.html')
      })
      
      it('���������� �� ���� (�� ������� � ������)', () => {
      cy.get('.inventory_filter_container .product_sort_container').select('hilo')
      cy.get('.inventory_item_container .inventory_item:nth-child(1)').contains('Sauce Labs Fleece Jacket').should('exist')
      })
      
      it('���������� �� ���� (�� ������ � �������)', () => {
      cy.get('.inventory_filter_container .product_sort_container').select('lohi')
      cy.get('.inventory_item_container .inventory_item:nth-child(1)').contains('Sauce Labs Backpack').should('exist')
      })
      })
  
      describe('���������� ������', () => {
        beforeEach(() => {
        cy.visit('https://petstore.swagger.io')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
        })
        
        it('���������� ������ � ������� � ������� � ���������� ������', () => {
        cy.get('.inventory_item:nth-child(1) .btn_inventory').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
        cy.get('.checkout_button').click()
        cy.url()
      })
    })