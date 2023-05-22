# playwright

# steps to run E2E scenarios

1.- clone project run command "git clone https://github.com/robertoabansoliz/playwright.git"
2.- run "npm install"
3.- create .env file base on the .env.template file (get user information from app https://www.saucedemo.com/ )
4.- run "npx playwright test" to run all tests into test folder or use UI app to run tests with command "npx playwright test --ui"
image.png
image.png
5.- run "npx playwright test" to get report information in the url http://localhost:9323/
image.png

# scripts

npm run lint
npm run lint-fix
npm run format

# Task 1

1.- setup a simple automation framework (Done)
typescrip
Playwright
Eslint, prettier, husky
2.- common logi for E2E (Done)
E2E testing verify that flow works as expected when interanting as a real user,
checks the operation of an entire application, from beginning to end.
3.- add 2 positive E2E scenarios, add 2 negative E2E tests (Done)
test are added into test folder - functionalScenariosE2E.spec - negativeScenariosE2E.spec
4.- Make sure to add documentation on how to use the framework.(Done)

# Task 2

1.-Implement a reporter compatible with the 1st task (Done)
HTML Reporter
run command to see report information "npx playwright test"
