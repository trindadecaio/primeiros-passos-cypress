import userData from "../fixtures/users/userData.json"
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from "../pages/menuPage.js"
import myInfoPage from "../pages/myInfoPage.js"




const loginPage = new LoginPage()
const DashboardPage = new dashboardPage()


describe('Login Orange HRM Tests', () => {
  

  it('Login - Fail', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  }) 

   it('Login - Success', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    DashboardPage.checkDashboardPage()

  }) 
})