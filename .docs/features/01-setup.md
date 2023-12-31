# Feature - Setup

## 1. Setup - Criar WorkSpace tmf-lab

> cria o workspace dentro de uma pasta que já existe.

```sh
ng new tmf-lab --create-application=false --directory .
```

<br>

---

<br>

## 2. Setup - Adicionando e configurando o Eslint

> Adicionando eslint.

```sh
ng add @angular-eslint/schematics@13.1.0
```

> Incluindo no cli angular.json.

```sh
ng config cli.defaultCollection @angular-eslint/schematics
```

> Adicionando eslint, babel e eslint-parser.

```sh
npm install eslint @babel/core @babel/eslint-parser --save-dev
```

> Criando .eslintrc.json.

```sh
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "requireConfigFile": false
  },
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json", "e2e/tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {}
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ]
}
```

<br>

---

<br>

## 3. Setup - Adicionando e configurando o Commits

> Instalando o Commitizen no projeto.

```sh
npm install commitizen --save-dev
```

> Inicializando o configurador do changelog.

```sh
commitizen init cz-conventional-changelog --save-dev --save-exact
```

> Adicionando Commitlint.

```sh
npm add @commitlint/config-conventional @commitlint/cli --save-dev
```

> Configurando Commitlint.

```sh
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

> Adicionar o script no package.json.

```sh
"commit": "git-cz",
```

<br>

---

<br>

## 4. Setup - Adicionando e configurando o Prettier

> Criando o .prettierignore.

```sh
coverage
node_modules
dist
.angular

```

> Criando o .prettierrc.json.

```sh
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true
}
```

> Adicionando o Prettier.

```sh
npm install prettier --save-dev --save-exact
```

> Adicionar scripts do prettier no package.json.

```sh
"pwrite": "npx prettier --write --ignore-unknown .",
"pcheck": "npx prettier --check .",
```

<br>

---

<br>

## 5. Setup - Adicionando e configurando o Lint-staged

> Criando o .lintstagedrc.json.

```sh
{
  "*.{js,ts,md,html,scss,json}": [
    "npm run pwrite",
    "git add",
    "npm run pcheck"
  ]
}
```

> Adicionando o Lint Staged.

```sh
npm install lint-staged --save-dev
```

<br>

---

<br>

## 6. Setup - Adicionando e configurando o Husky

> Adicionando o Husky.

```sh
npm install husky --save-dev
```

> Iniciando configuração do Husky.

```sh
npx husky install
```

```sh
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

```sh
npx husky add .husky/pre-commit "npm run pre-commit"
```

```sh
npx husky add .husky/pre-push "npm run pre-push"
```

> Iniciando scripts no package.json.

```sh
"pre-commit": "",
"pre-push": "",
```

<br>

---

<br>

## 7. Setup - Adicionando e configurando o SonarCloud

> Acesse o https://sonarcloud.io entre com sua conta do github para acesso aos projetos.

```sh
https://sonarcloud.io
```

> Crie a empresa e adicione o repositório desejado, logo após ele executara um scan, finalizando o scan acesse o information para obter as keys do projeto.

```sh
https://sonarcloud.io/project/information?id=martins86_tmf-lab
```

> Adicionando sonar-project.properties.

```sh
sonar.host.url=https://sonarcloud.io
sonar.organization=martins86
sonar.projectVersion=1.0
sonar.projectName=martins86_tmf-lab
sonar.projectKey=martins86_tmf-lab

sonar.links.homepage=https://martins86.github.io/tmf-lab
sonar.links.ci=https://app.travis-ci.com/github/martins86/tmf-lab
sonar.links.scm=https://github.com/martins86/tmf-lab
sonar.links.issue=https://github.com/martins86/tmf-lab/issue

sonar.sourceEncoding=UTF-8
sonar.sources=.

sonar.exclusions=**/node_modules/**,**/*.js
sonar.coverage.exclusions=**/*.js,**/src/main.ts,**/src/polyfills.ts,**/*environment*.ts,**/*module.ts

sonar.tests=./projects/portal/src
sonar.test.inclusions=**/*.spec.ts,**/*test.ts

sonar.typescript.tsconfigPath=tsconfig.json
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

> Configurando os scripts para o sonar local.
> Gerar token do projeto no site do https://sonarcloud.io.
> Crie a empresa e adicione o repositório desejado, logo após ele executara um scan, finalizando o scan acesse o information para obter as keys do projeto.

<br>

> Instale o sonarqube-scanner.

```sh
npm install sonarqube-scanner --save-dev
```

> Adicione o script sonar ao package.json.

```sh
sonar "",
```

> Rode(via Docker) o container com o sonar.
> Baixa a ultima versão do sonar e sobe em um container.

```sh
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

> Acesse via navegador.

```sh
http://localhost:9000/

#login: admin
#password: admin
```

> Comandos Docker.

```sh
docker start sonarqube
docker stop sonarqube
docker kill sonarqube
```

<br>

---

<br>

## 8. Setup - Gerando app portal com eslint, routing e style

> Cria o app usando o schema do eslint

```sh
ng g @angular-eslint/schematics:app portal --routing=true --style=scss
```

<br>

---

<br>

## 9. Setup - Instalando packages

> Angular Material

```sh
ng add @angular/material@13.2.5
```

> Instalando o ngx translate

```sh
npm install @ngx-translate/core@14.0.0 @ngx-translate/http-loader@7.0.0
```

> Instalando o ngx translate test

```sh
npm install ngx-translate-testing@6.0.0 --save-dev
```

> Instalando package para deploy do projeto no ghpages.

```sh
ng add angular-cli-ghpages
```

<br>

---

<br>

## 10. Setup - Configurando o Karma

> Adicionando o karma-spec-reporter.

```sh
npm install karma-spec-reporter --save-dev
```

> Adicionando o karma.root.conf.js

```sh
module.exports = function () {
  return {
    basePath: './',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter'),
    ],
    client: {
      jasmine: {
        failSpecWithNoExpectations: true,
      },
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    thresholds: {
      emitWarning: false,
      global: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },
      each: {
        statements: 80,
        lines: 80,
        branches: 80,
        functions: 80,
      },
    },
    reporters: ['progress', 'kjhtml', 'spec'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--headless', '--no-sandbox', '--remote-debugging-port=9222'],
      },
      ChromeDebug: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222'],
        debug: true,
      },
      ChromeHeadlessDocker: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    browserDisconnectTolerance: 8,
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 20000,
    captureTimeout: 210000,
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false,
      showSpecTiming: true,
      failFast: false,
      prefixes: {
        success: '    OK: ',
        failure: 'FAILED: ',
        skipped: 'SKIPPED: ',
      },
    },
  }
}

```

> Editando o karma.conf.js.

```sh
var getBaseKarmaConfig = require('./../../karma.root.conf');

module.exports = function (config) {
  var baseRootConfig = getBaseKarmaConfig();
  config.set({
    ...baseRootConfig,
    coverageReporter: {
      dir: require('path').join(__dirname, '../../coverage'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }, { type: 'lcov' }],
      fixWebpackSourcePaths: true,
    },
    logLevel: config.LOG_INFO,
  });
};
```

<br>

---

<br>

## 11. Setup - Adicionando o Coveralls

- [Coveralls](https://coveralls.io/)

> Instalando package.

```sh
npm install coveralls --save-dev
```

> Script.

```sh
"coveralls": "cat ./coverage/lcov.info | coveralls"
```

<br>

---

<br>

## 00. Setup - Editando os Scripts no package

> Scripts no package.json.

```sh
    "start": "ng serve --project=portal --port=4200 --host=0.0.0.0 --disable-host-check --open",
    "build": "ng build --project=portal --output-hashing=none --build-optimizer --optimization --vendor-chunk=false --aot",
    "build:ci": "npm run build -- --base-href=./ --vendor-chunk=false --aot",
    "deploy:gh": "ng deploy --base-href=/tmf-lab/",
    "pwrite": "npx prettier --write --ignore-unknown .",
    "pcheck": "npx prettier --check .",
    "test": "ng test --code-coverage",
    "test:dev": "npm run test -- --progress --browsers Chrome",
    "test:ci": "npm run test -- --no-watch --no-progress --browsers ChromeHeadlessNoSandbox",
    "lint": "ng lint",
    "commit": "git-cz",
    "pre-commit": "npx --no-install lint-staged && npm run lint",
    "sonar": "sonar-scanner -Dsonar.login=eec5da7da1fe70005eecea1552e3e30de6407ea9",
    "pre-push": "npm run test:ci && npm run sonar",
    "coveralls": "cat ./coverage/lcov.info | coveralls",
    "postinstall": "npx husky install && chmod ug+x .husky/*"
```

<br>

---

<br>
