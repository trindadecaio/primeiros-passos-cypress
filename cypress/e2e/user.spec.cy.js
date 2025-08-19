import userData from "../fixtures/users/userData.json"
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from "../pages/menuPage.js"



const loginPage = new LoginPage()
const DashboardPage = new dashboardPage()
const MenuPage = new menuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    sectionTitleTopBar: "oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input.oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericCombobox: ".oxd-select-text--arrow",
    twentysevenItemCombobox: ".oxd-select-dropdown > :nth-child(27)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    submitButton: ".oxd-button--secondary",

    
    


  }

  it.only('User Info Update - Sucess', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    DashboardPage.checkDashboardPage()
    MenuPage.accesMyInfo()
    
    
  
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-11-05')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.twentysevenItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click()


    
  

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  }) 
})