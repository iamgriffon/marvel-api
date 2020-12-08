# Marvel API

## Como a API funciona?

Ela usa os dados da API da Marvel (https://developer.marvel.com) como base de dados e faz requisições dinâmicas de GET afim de pegar os HQs disponíveis

## Projeto  

* O projeto foi estruturado em 3 grandes partes: Components, Pages e Utils.  
  *  Components: Aqui ficam estruturados os pedaços de código que serão reutilizados ao longo do projeto
  *  Pages: Aqui ficam as páginas que possuem rota e carregam a maior parte dos componentes
  *  Utils: Aqui ficam arquivos como Tipagens, Stores de contextos e dados mockup.
  
 ### O que pensei para o projeto?
 
 * De maneira sucinta, pensei na seguinte estruturação:  
    * Para gerenciamento de estados locais, usei os hooks useState e useEffect
    * Para gerenciamento de estado global, usei o Context API (Com Provider e createContext)
    * Para Design e aparência usei React-bootstrap, Material-UI/core e SCSS
    * Para chamadas AJAX (API Calls), usei o Axios, que é a biblioteca na qual estou mais familiarizado.
    * Separei os principais pilares do projeto em pastas
    * Usei TypeScript afim de aproveitar meus conhecimentos em Angular, Python e C.
  
 ### Ficou faltando:
 
1. Terminar a aparência geral do site
2. Funcionalidade de remover itens unitários da sacola
3. Testes unitários no geral
4. Outras features adicionais (Busca, Serviços de Session (login/logout etc) e Integrações com APIs de pagamento)

Espero que tenha gostado! :)
