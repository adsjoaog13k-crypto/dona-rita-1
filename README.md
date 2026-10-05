DONA CLARA — PANIFICADORA & EMPÓRIO

Projeto acadêmico da disciplina Design Profissional — Produção de Portfólio & Desenvolvimento Empresarial.

1. BRIEFING DO PROBLEMA

A Panificadora & Empório Dona Clara possui 12 anos de tradição, qualidade artesanal e relacionamento com a vizinhança. Entretanto, pedidos para viagem e encomendas de bolos e tábuas de frios ainda são realizados presencialmente ou por anotações no caderno da cozinha.

A mudança na rotina dos moradores do bairro, o crescimento de concorrentes com presença digital e os erros em encomendas de eventos criaram a necessidade de um canal digital estruturado.

Principais dores identificadas:

• Filas e dependência do atendimento presencial.
• Risco de o cliente chegar e encontrar produtos esgotados.
• Pedidos registrados manualmente.
• Erros de sabores, quantidades e horários em encomendas.
• Atrasos em pedidos para eventos.
• Baixa presença digital diante de novos moradores e empresas da região.

2. SOLUÇÃO ESCOLHIDA

Foi escolhido um web app responsivo, acessível pelo navegador em computador ou celular.

Por que um web app?

A solução atende diretamente o problema sem exigir instalação de aplicativo. O cliente pode acessar o catálogo, montar um pedido e informar data e horário de retirada de qualquer dispositivo.

A proposta também é adequada para a realidade da empresa: começa simples, com baixo custo e pode evoluir posteriormente para banco de dados, painel administrativo, pagamentos e integração com WhatsApp.

3. OBJETIVOS

4. Criar um canal digital de pedidos.

5. Apresentar os produtos de forma organizada.

6. Registrar informações essenciais das encomendas.

7. Reduzir erros causados por anotações manuais.

8. Facilitar solicitações de coffee break por empresas.

9. Reforçar a identidade artesanal e tradicional da marca.

10. PÚBLICO-ALVO

• Moradores do bairro que buscam praticidade.
• Clientes que desejam reservar produtos antes de ir à loja.
• Pessoas que precisam encomendar bolos e tábuas de frios.
• Empresas regionais que organizam reuniões, treinamentos e coffee breaks.

5. PROTÓTIPO / TELAS

O projeto implementa as principais telas e estados do fluxo.

Tela inicial:
Apresenta a proposta de valor, diferenciais e chamadas para ação.

Catálogo:
Exibe produtos, descrições e preços, permitindo adicionar itens ao pedido.

Carrinho:
Mostra quantidade, itens selecionados e total estimado.

Finalização da encomenda:
Solicita nome, data, horário e observações, reduzindo ambiguidades do pedido.

Coffee break:
Apresenta uma área específica para empresas solicitarem orçamento.

Nossa história:
Comunica os 12 anos de tradição e o papel de Clara e Roberto.

6. ARQUITETURA

A estrutura do projeto é composta pelos seguintes arquivos:

• index.html
• styles.css
• script.js
• README.md
• LICENSE
• .gitignore

TECNOLOGIAS

• HTML5 — estrutura semântica.
• CSS3 — layout responsivo e identidade visual.
• JavaScript — catálogo, carrinho, formulário e persistência local.
• LocalStorage — armazenamento demonstrativo do carrinho e último pedido.

Não há dependências externas obrigatórias.

7. SEGURANÇA

Nenhuma senha, token, chave de API ou credencial é utilizada no projeto.

O .gitignore inclui arquivos de ambiente e credenciais comuns, como .env, chaves e certificados.

8. COMO EXECUTAR

Opção A — navegador:

Baixe ou clone o repositório e abra o arquivo index.html no navegador.

Opção B — servidor local:

Com Python instalado, execute o comando:

python -m http.server 8000

Depois, acesse:

http://localhost:8000

9. PUBLICAÇÃO NO GITHUB

Crie um repositório chamado:

dona-clara-emporio

Depois, no terminal dentro da pasta, execute:

git init

git add .

git commit -m "feat: cria web app da Panificadora Dona Clara"

git branch -M main

git remote add origin SEU_LINK_DO_REPOSITORIO

git push -u origin main

Para publicar como site, habilite o GitHub Pages nas configurações do repositório, utilizando a branch main e a pasta raiz.

10. EVOLUÇÕES FUTURAS

Esta versão é um protótipo funcional para a atividade. Em uma versão de produção, recomenda-se:

• Banco de dados para pedidos.
• Login administrativo.
• Painel para Clara e Roberto acompanharem encomendas.
• Integração com WhatsApp.
• Pagamento online.
• Controle de estoque em tempo real.
• Status do pedido.
• Relatórios financeiros.
• Autenticação e regras de acesso.

