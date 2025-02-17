* Features que eu aprendi desenvolvendo esse projeto

- Self closing Tag
  * Exemplo => <Teste /> ele abre e fecha nele messmo

- Propiedade inherit
  * Ela Herda a cor ou valor que deveria receber herdada pelo elemento pai

-  Uso de : depois da / em uma rota
  * Uma forma de acessar uma variavel em uma rota, apos o /, utilizasse o :, depois desses :, o que for escrito, vira uma variavel
  * Example => (<Route path="/artist/:id" element={<Artist />}/>)

- JavaScript Assincrono
  * técnica que permite que um programa execute uma tarefa longa e continue respondendo a outros eventos.
  * async
  * await
  * no javaScript padrão sincrono, são executados linha apos linha, quando tem uma instrução no assincrono, o js continua executando
  os outros codigos, e quando o bloco assincrono estiver pronto e carregado ele executa

- BASE__URL
  * BASE__URL significa a url fixa da aplicação, o caminho que independente do endpoint, não ira alterar
  * exemplo const BASE__URL = "http://localhost:3000"


- Axios
  * Axios é um cliente HTTP baseado em Promises para fazer requisições

- Função de tratamento, pode ser usada no value do useState

- UseRef
  * Server para vincular elementos html ao DOM


{<-----------------------------------------------------------------------BACKEND----------------------------------------------------------------------------------------------->}


-  API - Significa Application Programing Interface
  * As APIs são conjuntos de regras e protocolos que permitem a comunicação entre aplicações de software. Elas funcionam como uma ponte, facilitando a troca de dados e comandos. 

- Requisições HTTP or (crud => create read update delete)
  * GET
  * POST
  * PUT
  * DELETE

- EndPoint
  * Uma rota que pode ser acessada dentro de uma API

- Request and Response
  * 

- node --watch server.js
 * - --watch Server para não ficar matando o terminal a cada mudança, servidor sempre fica ativo

- delete
  * Usamos o delete para, quando pecorremos o nosso array de objeto, acessamos cada objeto pecorrido, e podemos deletar uma propidade de todos elementos

- MongoDB
  * Criar um projeto
  * Criar um cluster
  * Criar uma data base / collections
  * Usar npm i no vsconde
  * Permitir que o mongoDb, permita outros IP
  * conectar o cluster no vscode

  *insertMany() => Adiciona elementos na nossa collection no banco de dados
  *insertOne() => Adiciona apenas um elemento na nossa collection no banco de dados


- Arquivo connect.js
  * Precisamor importar o MongoClient
  * Trazer nossa conexão do cluster do mongoDB, e armazenar em uma variavel, colocando nossa senha
  * Instacia um client, em uma variavel. Exemplo :<Const client = new MongoClient(URI)>
  * Criar nossa dataBase = <const db = client.db("spotifyClone")>
  * Pegar a collection que queremos = <const songsCollection = await db.collection("songs").find({}).toArray() >


- Arquivo insertMany.js
  * Esse script foi montando seguindo a seguinte logica...
  * Cria uma copia do array de musicas e artistas
  * pecorre cada um dos objetos, e com o delete remove a propiedade id
  * retorna o novo array
  * Porm fim pega esses 2 array de musicas e artistas e popula as collections no mongoDB


- MiddleWare  /  cors
  * O pacote `cors` é um middleware que permite que você controle quais origens (ou domínios) podem acessar seus recursos na sua API.
    Quando configurado corretamente, ele garante que suas rotas backend sejam expostas de forma segura e que possam ser consumidas por aplicações frontend,
    mesmo quando estão rodando em domínios diferentes.

