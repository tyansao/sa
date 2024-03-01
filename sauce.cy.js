describe("Регистрация нового пользователя", () => {
    it("Успешная регистрация", () => {
    cy.visit("https://petstore.swagger.io");
    cy.contains("New User?").click();
    // Заполнение полей данных нового пользователя
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#username").type("johndoe");
    cy.get("#password").type("password");
    // Нажатие на кнопку "Register"
    cy.get("#register-button").click();
    // Проверка, что новый пользователь успешно зарегистрирован
    cy.contains("Registered Successfully!");
    });
    });
  
    describe("Авторизация существующего пользователя", () => {
      it("Успешная авторизация", () => {
      cy.visit("https://petstore.swagger.io");
      // Ввод логина и пароля существующего пользователя
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      // Нажатие на кнопку "Login"
      cy.get("#login-button").click();
      // Проверка, что авторизация прошла успешно
      cy.contains("PRODUCTS");
      });
      });
  
      describe("Добавление товара в корзину", () => {
        it("Товар успешно добавлен в корзину", () => {
        cy.visit("https://petstore.swagger.io");
        // Ввод логина и пароля существующего пользователя
        cy.get("#user-name").type("standard_user");
        cy.get("#password").type("secret_sauce");
        // Нажатие на кнопку "Login"
        cy.get("#login-button").click();
        // Выбор товара и добавление в корзину
        cy.get(".inventory_item")
      });
    });
  
  
  describe('Поиск товара', () => {
    beforeEach(() => {
    cy.visit('https://petstore.swagger.io')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
    })
    
    it('Поиск существующего товара', () => {
    cy.get('.inventory_filter_container .product_sort_container').select('za')
    cy.get('.inventory_item_container .inventory_item:nth-child(1)').contains('Sauce Labs Onesie').should('exist')
    })
    
    it('Поиск несуществующего товара', () => {
    cy.get('.inventory_filter_container .product_sort_container').select('za')
    cy.get('.inventory_item_container .inventory_item:nth-child(1)').contains('Nonexistent Item').should('not.exist')
    })
    })
  
    describe('Сортировка товаров', () => {
      beforeEach(() => {
      cy.visit('https://petstore.swagger.io')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('include', '/inventory.html')
      })
      
      it('Сортировка по цене (от высокой к низкой)', () => {
      cy.get('.inventory_filter_container .product_sort_container').select('hilo')
      cy.get('.inventory_item_container .inventory_item:nth-child(1)').contains('Sauce Labs Fleece Jacket').should('exist')
      })
      
      it('Сортировка по цене (от низкой к высокой)', () => {
      cy.get('.inventory_filter_container .product_sort_container').select('lohi')
      cy.get('.inventory_item_container .inventory_item:nth-child(1)').contains('Sauce Labs Backpack').should('exist')
      })
      })
  
      describe('Оформление заказа', () => {
        beforeEach(() => {
        cy.visit('https://petstore.swagger.io')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')
        })
        
        it('Добавление товара в корзину и переход к оформлению заказа', () => {
        cy.get('.inventory_item:nth-child(1) .btn_inventory').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')
        cy.get('.checkout_button').click()
        cy.url()
      })
    })