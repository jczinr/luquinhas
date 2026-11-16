# 🚀 Portal de Apoio a Vendas - Luquinhas (LOTEP & CAP)

Material de apoio e capacitação oficial para vendedores, consultores e promotores das modalidades **LOTEP** (Loteria Estadual) e **CAP** (Títulos de Capitalização Premiáveis SUSEP).

Desenvolvido com base no rascunho de arquitetura estrutural do projeto.

---

## 📐 Estrutura do Site (Baseado no Rascunho)

```
+-----------------------------------------------------------------+
|                  VENDAS SUPORTE - LUQUINHAS                     |
|        [Status: Atualizado 2026]    [Acesso Rápido Calculadora]  |
+-----------------------------------------------------------------+
|                                                                 |
|   [  LOTEP (Loteria Estadual)  ]     [  CAP (Capitalização)  ]  |
|   - Simulador de Cotas e Bilhetes   - Simulador de Títulos SUSEP|
|   - Legislações e Portarias          - Normas e Garantias Legais |
|   - Scripts Prontos de WhatsApp      - Pitch Poupança vs CAP     |
|   - Downloads e Criativos            - Tabela de Resgate         |
|                                                                 |
+--------------------------------+--------------------------------+
|          CALCULADORA           |          LINKS & CASES         |
|                                |                                |
| • Modo 1: Minhas Comissões     | 🔗 Links Úteis Oficiais:       |
|   - Preço Unitário x Vendas    |   - Instagram Oficial          |
|   - Taxa % com Slider          |   - Grupo VIP WhatsApp         |
|   - Dias de Trabalho           |   - Portal de Vendas Web       |
|   - Faturamento e Meta Mensal  |   - Drive de Criativos         |
|   - [Copiar Resumo da Meta]    |                                |
|                                | ⭐ Cases de Sucesso (Insta):   |
| • Modo 2: Simulação p/ Cliente |   - Stories com foto e @       |
|   - Investimento do cliente    |   - Depoimentos reais          |
|   - Chances e Prêmios          |   - Prova social pronta p/     |
|   - [Copiar Mensagem WhatsApp] |     copiar e mandar pro cliente|
+--------------------------------+--------------------------------+
```

---

## 📂 Arquivos do Repositório

- **`index.html`**: Estrutura semântica com os 2 botões master no topo (LOTEP e CAP), a calculadora multifuncional à esquerda, e os links rápidos + cases estilo Instagram à direita. Modal com abas para leis, simuladores, scripts e downloads.
- **`style.css`**: Design moderno em dark theme com acentos em ciano/azul elétrico (LOTEP), esmeralda (CAP) e dourado/Instagram, responsivo para celulares, tablets e computadores.
- **`script.js`**: Reatividade total da calculadora, formatação de moedas em BRL, gerador de mensagens prontas para WhatsApp com 1 clique, alternador de cases e acordos legislativos com filtro de busca em tempo real.

---

## 🛠️ Como Visualizar e Testar

Basta abrir o arquivo `index.html` em qualquer navegador (Google Chrome, Edge, Safari, Opera), ou iniciar um servidor local:

```powershell
# Opção 1: Via navegador direto
Start-Process "index.html"

# Opção 2: Via servidor HTTP simples (Node)
npx serve .
```

---

## 📱 Recursos de Venda Incluídos

1. **Scripts Prontos com 1 Clique**:
   - Abordagem no WhatsApp (quebra de gelo).
   - Quebra de objeção sobre legalidade e segurança regulatória.
   - Fechamento rápido de bolões e títulos familiares.
2. **Base Jurídica**:
   - Lei Estadual nº 7.382 (LOTEP).
   - Lei Federal nº 14.790 (Marco Regulatório das Apostas e Loterias).
   - Circulares SUSEP nº 569/2018 e 656/2022 (Capitalização).
3. **Calculadora & Metas**:
   - Permite que o vendedor simule comissões diárias e mensais.
   - Gera mensagem personalizada para o cliente com números da sorte e chances.
