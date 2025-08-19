class LoginPage {
    selectorslist() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors
    }

    accesLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorslist().usernameField).type(username)
        cy.get(this.selectorslist().passwordField).type(password)
        cy.get(this.selectorslist().loginButton).click()
    }
}

export default LoginPage