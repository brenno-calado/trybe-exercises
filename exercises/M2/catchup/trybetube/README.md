# Grupo2 - Parte1 #

Essa seção contém os requisitos de um projeto para ser desenvolvido usando a base do React.

Nessa Parte:

Vamos desenvolver, usando apenas o React (Redux ainda não, ok!?) o app TrybeTube, em que desenvolveremos front que controla os vídeos a serem exibidos.

_Protótipo_

![TrybeTube](./prototipo.png)

Desenvolveremos um TrybeTube, que possui os vídeos da Trybe! Não se preocupem, ainda não queremos que os vídeos sejam reproduzidos ainda...  =)
A idéia aqui é que tenhamos uma funcionalidade básica assim como o YouTube.

# Passo 1 - Começando um novo App #
npx create-react-app trybetube

# Passo 2 - Criando um componente simples #
```javascript
<index>
  <App>
    <Video />
    <ul>
      <Link to="/video/:id">
        <button>
          <img />
        </button>
      </Link>
    </ul>
  </App>
</index>
```

# Passo 3 - Definindo informações dinâmicas da aplicação #
data com todos os videos e 
# Passo 4 - Como funciona o App, com o que da página interagimos? #
Abra a página do YouTube, dê uma olhada nas suas funcionalidades, como podemos reproduzi-la no nosso app? Será que podemos usar o react-router?