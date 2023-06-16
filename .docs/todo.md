# Features

- [ ] Setup
- [ ] Template
- [ ] Theme
- [ ] Translate app

<br />

# Todo List

<br />

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

## 6. Setup - Gerando app portal com eslint, routing e style

> Cria o app usando o schema do eslint

```sh
ng g @angular-eslint/schematics:app portal --routing=true --style=scss
```

<br>

---

<br>
