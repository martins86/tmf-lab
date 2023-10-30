# Feature - Template

## 1. Template - Criar template default

> cria o modulo e as rotas do template default.

```sh
ng generate module layout/default --module --routing
```

> cria o componente do template default.

```sh
ng generate component layout/default
```

> cria os componentes para o template default.

```sh
ng generate component layout/default/components/top-bar
```

```sh
ng generate component layout/default/components/left-bar
```

```sh
ng generate component layout/default/components/bottom-bar
```

<br>

---

<br>

## 2. Template - Criar Componente e Service do Loading

> cria o module do loading.

```sh
ng g m layout/default/components/loading
```

> cria o componente do loading.

```sh
ng g c layout/default/components/loading
```

> cria a service loading.

```sh
ng g s shared/services/loading/loading
```

<br>

---

<br>

## 3. Template - Criando paginas principais

> cria o module e o router dashboard.

```sh
ng g m pages/dashboard --routing
```

> cria a pagina dashboard.

```sh
ng g c pages/dashboard
```

> cria o module e o router login.

```sh
ng g m pages/login --routing
```

> cria a pagina login.

```sh
ng g c pages/login
```

> cria o module e o router maintenance.

```sh
ng g m pages/maintenance --routing
```

> cria a pagina maintenance.

```sh
ng g c pages/maintenance
```

> cria o module e o router not-found.

```sh
ng g m pages/not-found --routing
```

> cria a pagina not-found.

```sh
ng g c pages/not-found
```

<br>

---

<br>
