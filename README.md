# orgsHooks
Aplicativo utilizando React Native CLI

Aprendizado:
Produzir um Componente:

Criando diferentes partes da tela separadamente, podemos controlá-las separadamente também. Começamos aprendendo como produzir o componente Topo com estilos distintos para cada Texto e imagens disponíveis.
Criar um Mock:

Simulando uma API, criamos um Mock para receber dados como se fosse um serviço externo. Dessa forma, podemos aprender a nos comunicar com uma API sem de fato estar utilizando uma!
Salvar um Estado:
Imaginando que nossos dados externos mudam, nossa aplicação tem que acompanhar as mudanças dos dados e renderizar na tela as tais mudanças. Para isso, aprendemos a criar um estado que se encarrega de mudar o componente na tela sempre que algum dos dados é alterado.

Modificar a lista de produtores do app Orgs:
Aprendi o que são os Hooks, uma nova adição do React Native que nos permite a fazer ações de classe dentro dos componentes de função. Vimos um exemplo de Hooks que é o UseEffect e como os componentes de função são mais recomendados.
Usar o State do Hook:
Apliquei o Hook de useState para criar um estado na lista de produtores do app Orgs.
Criar uma lista de produtores:
No app Orgs, criei uma lista de produtores. Renderizando os textos da lista com o renderItem. Implementei estilos para mostrar uma lista bem bonita no app!
Estilizar a lista de produtores:
Estruturei a lista, adicionando uma View. Depois inserimos as imagens dos produtores, com um accessibilityLabel para permitir que pessoas cegas possam usar o app! Apliquei estilos de cor, margens, borda arredondada, alinhamento, distância, tamanho da fonte, sombra no cartão.
Adicionar as estrelas para classificar produtores no App:
Criei, na pasta src, o componente de estrelas que podem ser clicadas pelo usuário para avaliar os produtores. As propriedades foram a quantidade, tamanho etc. Aplicamos um estilo de tamanho e largura condicionais em função das propriedades das estrelas.
Refatorar as estrelas:
Para diminuir o tamanho do código, organizamos e enxugamos o componente de estrelas.

A Criçaõ seu próprio Hook:
Aprendi a criar um Hook personalizado (useProdutores) para o aplicativo, a fim de facilitar a reutilização da função em outros pontos do código.
Utilizar o Hook Reducer:
Vi como o useState pode complicar a criação de métodos complexos, portanto, para que não tenhamos problemas com funções extensas, usamos o useReducer, que simplifica lógicas extensas.
Utilizar o Hook de Memória:
Com o useMemo, temos a possibilidade de escolher os estados que vão ser atualizados de acordo com o método, melhorando a performance do aplicativo (uma vez que ele não precisa recarregar todos os estados sempre que algum deles mudar).
