import userData from "../fixtures/users/userData.json"
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from "../pages/menuPage.js"
import myInfoPage from "../pages/myInfoPage.js"


const Chance = require('chance')

const chance = new Chance()

const loginPage = new LoginPage()
const DashboardPage = new dashboardPage()
const MenuPage = new menuPage()
const MyInfoPage = new myInfoPage()


describe('Orange HRM Tests', () => {



  it('User Info Update - Sucess', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    DashboardPage.checkDashboardPage()
    MenuPage.accesMyInfo()
    MyInfoPage.fillPersonalDetails(chance.first(), chance.last())
    MyInfoPage.fillEmployeeDetails(chance.word(), chance.word(), '20025', '2025-07-11') 
    MyInfoPage.fillStatus()
    MyInfoPage.saveForm()
  })
 
})