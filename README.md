# Instruções

### O projeto foi feito com o Adonisjs

[Documentação Adonis](https://adonisjs.com/docs/4.1/installation#_installing_adonisjs)

Para instalar o Adonisjs

```
npm i -g @adonisjs/cli
```

***Instale as dependências***

```
npm install
```

ou

```
yarn install
```

***Configure o arquivo .env. Copie e cole as informações do .env.example***

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development

APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=

DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis

HASH_DRIVER=bcrypt
```

- ##### APP_KEY= 
informe uma chave, por exemplo dA6klRsQtVLUZ0mrxQYt3B6Zm5fNfKde

- ##### DB_HOST=
Informe o endereço do banco

- ##### DB_PORT
Informe a porta do endereço do banco de dados

- ##### DB_USER
Informe usuário do banco de dados

- ##### DB_PASSWORD=
Informe a senha do banco de dados

- ##### DB_DATABASE=
Informe o nome do banco de dados

###OBS
- É importante criar as migrations com o comando:

```
adonis migration:run
```

- Para cadastrar um usuário acesse a rota http://{{localhost}}/users
```
{
    "email": "user@mail.com",
    "username": "user",
    "password": "123456",
    "password_confirmation": "123456"
}
```

- Para logar na aplicação acesse a rota http://{{localhost}}/session
```
{
  "email": "user@mail.com",
  "password": "123456"
}
```





