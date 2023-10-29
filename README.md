# TMF Lab

> Projeto para estudos

- Padronização de pastas/arquivos
- Estrutura modular
- Testes de Unidade com Jasmine/Karma
- Internacionalização

<br>
<br>

## Mapa do projeto

```sh
.
├── ...
├── 📁docs/-----------------------------------------------------------> # Documentação.
│   ├── 📁features/---------------------------------------------------> # Arquivos com detalhes de próximos passos/implementações.
│   │   └── ...
│   ├── 📁prints/-----------------------------------------------------> # Imagens usadas na documentação.
│   │   └── ...
│   ├── git-commit.md-------------------------------------------------> # Guia de como fazer um commit no projeto.
│   ├── git-flow.md---------------------------------------------------> # Guia de branch's.
│   ├── todo.md-------------------------------------------------------> # Rascunho do que estou fazendo.
│   └── ...
├── 📁.github/
│   ├── 📁workflows/--------------------------------------------------> # Arquivo yml com o fluxo de CI/CD
│   │   └── continuous-integration-workflow.yml
│   └── ...
├── 📁.husky/----------------------------------------------------------> # Arquivos de configuração do pre commit/push
│   └── ...
├── 📁.vscode/---------------------------------------------------------> # Arquivos com extensões, snippets, settings do vscode.
│   └── ...
├── 📁node_modules/---------------------------------------------------> # Pacotes usados no projeto.
│   └── ...
├── 📁projects/
│   ├── 📁portal/
│   │   ├── 📁src/
│   │   │   ├── 📁app/
│   │   │   │   ├── 📁layout/
│   │   │   │   │   ├── 📁default/------------------------------------> # Modulo do theme default.
│   │   │   │   │   │   ├── 📁components/-----------------------------> # Componentes exclusivos do theme default (Top bar, Menu lateral e Footer).
│   │   │   │   │   │   │   └── ...
│   │   │   │   │   │   ├── 📁theme/----------------------------------> # Folhas de estilos para o theme default.
│   │   │   │   │   │   │   ├── 📁style/
│   │   │   │   │   │   │   └── ...
│   │   │   │   │   │   └── ...
│   │   │   │   ├── 📁pages/------------------------------------------> # Diretório das páginas do projeto.
│   │   │   │   │   ├── 📁dashboard/----------------------------------> # Modulo página de dashboard.
│   │   │   │   │   │   └── ...
│   │   │   │   ├── 📁shared/-----------------------------------------> # Diretório das itens compartilhados por todo o projeto.
│   │   │   │   │   ├── 📁components/
│   │   │   │   │   │   ├── 📁select-language/------------------------> # Modulo componente que faz a troca de linguagem / tradução.
│   │   │   │   │   │   │   └── ...
│   │   │   │   │   │   └── ...
│   │   │   │   │   ├── 📁interfaces/---------------------------------> # Arquivos de interfaces / model.
│   │   │   │   │   │   └── ...
│   │   │   │   │   ├── 📁services/
│   │   │   │   │   │   ├── 📁feature-toggle/-------------------------> # Serviço que busca as feature toggles.
│   │   │   │   │   │   │   └── ...
│   │   │   │   │   │   ├── 📁loading/--------------------------------> # Serviço que controla o loading nas páginas (requisição http).
│   │   │   │   │   │   │   └── ...
│   │   │   │   │   │   ├── 📁user/-----------------------------------> # Serviço de controle de usuário.
│   │   │   │   │   │   │   └── ...
│   │   │   │   │   │   └── ...
│   │   │   │   │   ├── 📁utils/
│   │   │   │   │   │   ├── 📁stubs/-----------------------------------> # Stubs / Mocks reutilizados em testes de unidade.
│   │   │   │   │   │   │   └── ...
│   │   │   │   │   │   └── ...
│   │   │   │   │   └── ...
│   │   │   │   ├── ...
│   │   │   │   └── ...
│   │   │   ├── 📁assets/
│   │   │   │   ├── 📁data/------------------------------------------> # Dados para um fake api.
│   │   │   │   │   └── ...
│   │   │   │   ├── 📁i18n/------------------------------------------> # Arquivos de tradução do projeto en / pt.
│   │   │   │   │   ├── en.json
│   │   │   │   │   ├── pt.json
│   │   │   │   │   └── ...
│   │   │   │   ├── 📁icons/-----------------------------------------> # Icones personalizados.
│   │   │   │   │   └── favicon.ico
│   │   │   │   │   └── ...
│   │   │   │   ├── 📁images/----------------------------------------> # Imagens.
│   │   │   │   │   ├── logo.png
│   │   │   │   │   └── ...
│   │   │   │   ├── 📁styles/----------------------------------------> # Folhas de estilos compartilháveis.
│   │   │   │   │   ├── media-devices-breakpoints.scss
│   │   │   │   │   └── ...
│   │   │   │   └── ...
│   │   │   ├── 📁environments/
│   │   │   │   ├── ...
│   │   │   │   └── ...
│   │   │   └── ...
│   │   └── ...
│   └── ...
└── ...
```

## Abrir IDE On-line

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/workspaces)

<br>
<br>

## Info Badges

<div>
<div align="center">

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=martins86_tmf-lab)

</div>
</div>

<br>

<div>
<div align="center">

[![CI Build](https://github.com/martins86/tmf-lab/actions/workflows/continuous-integration-workflow.yml/badge.svg)](https://github.com/martins86/tmf-lab/actions/workflows/continuous-integration-workflow.yml)
&nbsp;
![GitHub package.json version](https://img.shields.io/github/package-json/v/martins86/mfe-portal)
&nbsp;
![GitHub last commit](https://img.shields.io/github/last-commit/martins86/tmf-lab)
&nbsp;
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=martins86_tmf-lab&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=martins86_tmf-lab)
&nbsp;
[![Coverage Status](https://coveralls.io/repos/github/martins86/tmf-lab/badge.svg?branch=master)](https://coveralls.io/github/martins86/tmf-lab?branch=master)

</div>
</div>

<br>

<div>
<div align="center">

![npm](https://img.shields.io/npm/v/npm)
&nbsp;
![node-current](https://img.shields.io/node/v/latest-version)
&nbsp;
![GitHub top language](https://img.shields.io/github/languages/top/martins86/mfe-portal)

</div>
</div>

<br>
<br>
<br>

# Licença de uso &nbsp; | &nbsp; [![GitHub license](https://img.shields.io/github/license/martins86/tmf-lab)](https://github.com/martins86/tmf-lab/blob/main/LICENSE)

TMF Lab is licensed under [MIT licensed](./LICENSE).
