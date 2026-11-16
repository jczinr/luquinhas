/* ========================================================
   SCRIPT - PORTAL DE APOIO A VENDAS LUQUINHAS (LOTEP & CAP)
   ======================================================== */

// Base de Dados de Produtos (LOTEP e CAP)
const PRODUCTS_DATA = {
  lotep: {
    badge: "LOTEP",
    badgeClass: "lotep",
    title: "Material Oficial LOTEP (Loteria da Paraíba)",
    simulador: {
      title: "Simulador de Cotas & Premiações LOTEP",
      description: "Calcule a premiação proporcional e a quantidade de bilhetes para o seu cliente.",
      defaultTicketPrice: 5,
      modes: [
        { name: "Bilhete Simples (Milhar/Centena)", multiplier: 4000, desc: "R$ 1,00 concorre a até R$ 4.000,00" },
        { name: "Cota Turbinada da Sorte", multiplier: 10000, desc: "Cota com 10 combinações + Giro Instantâneo" },
        { name: "Bolão Especial de Fim de Semana", multiplier: 50000, desc: "Premiação máxima acumulada com rateio" }
      ]
    },
    leis: [
      {
        id: "lotep-1",
        title: "Lei Estadual nº 7.382 - Criação e Competência da LOTEP",
        tags: ["Estadual", "Oficial", "Paraíba"],
        resumo: "Estabelece a Loteria do Estado da Paraíba (LOTEP) como autarquia responsável pela exploração dos serviços de loteria no âmbito estadual, com destinação de receitas para assistência social e saúde pública.",
        artigoChave: "Art. 2º - É facultado à LOTEP a exploração de modalidades lotéricas de números, instantânea e de quota fixa em todo o território paraibano, com segurança e idoneidade garantidas pelo Estado."
      },
      {
        id: "lotep-2",
        title: "Decreto Estadual de Regulamentação e Distribuição de Prêmios",
        tags: ["Decreto", "Regras", "Pagamento"],
        resumo: "Regulamenta o recolhimento, a segurança dos bilhetes emitidos fisicamente ou online e garante o pagamento compulsório das premiações em até 90 dias após o sorteio homologado.",
        artigoChave: "Art. 14 - Os bilhetes contemplados conferem direito inalienável ao recebimento integral do valor líquido estipulado no plano de sorteios oficial, sem taxas extras ao apostador."
      },
      {
        id: "lotep-3",
        title: "Lei Federal nº 14.790 (Marco Regulatório das Apostas e Loterias Estaduais)",
        tags: ["Federal", "Marco Legal", "Segurança"],
        resumo: "Reconhece a competência dos Estados brasileiros para operar suas próprias loterias, resguardando os direitos das autarquias tradicionais como a LOTEP com validade em todo o território nacional.",
        artigoChave: "§ 4º - As loterias estaduais legalmente constituídas mantêm sua prerrogativa de comercialização e recolhimento social dentro da conformidade do pacto federativo."
      }
    ],
    scripts: [
      {
        title: "🎯 Abordagem Rápida no WhatsApp (Quebra de Gelo)",
        tipo: "WhatsApp",
        texto: `Olá [Nome do Cliente], tudo bem? 😊 Passando rapidinho pra te avisar que abrimos hoje a nova rodada da LOTEP Oficial!
        
Com apenas R$ 5 ou R$ 10 você garante seu bilhete oficial com chances reais de levar prêmios diários de até R$ 10.000 no PIX.

Quer que eu separe uma cota com números da sorte pra você conferir hoje às 18h?`
      },
      {
        title: "🛡️ Resposta a Objeção: 'Isso é seguro / regulamentado?'",
        tipo: "Objeção",
        texto: `Excelente pergunta! A LOTEP é a Loteria Oficial do Estado da Paraíba, 100% legalizada e respaldada por Lei Estadual e Federal (Lei nº 14.790).

Os sorteios são públicos, auditados pelo Estado e o pagamento do prêmio é garantido direto na sua conta bancária sem burocracia. Aqui você joga com transparência total!`
      },
      {
        title: "⚡ Fechamento de Bolão / Grupo de Amigos",
        tipo: "Fechamento",
        texto: `Fala pessoal! Fechamos um bolão especial da LOTEP com 20 cotas exclusivas multiplicando nossas chances de premiação por 10x!
        
Ficou só R$ 15 por cota. Já temos 14 preenchidas e restam só 6. Vou colocar seu nome na lista antes que encerre?`
      }
    ],
    downloads: [
      { title: "Tabela Oficial de Premiações LOTEP 2026.pdf", tamanho: "1.4 MB", tipo: "PDF" },
      { title: "Cartilha de Segurança & Legislação da LOTEP.pdf", tamanho: "2.8 MB", tipo: "PDF" },
      { title: "Pack de Criativos & Stories da LOTEP (ZIP).zip", tamanho: "18.2 MB", tipo: "ZIP" }
    ]
  },

  cap: {
    badge: "CAP",
    badgeClass: "cap",
    title: "Material Oficial CAP (Títulos de Capitalização)",
    simulador: {
      title: "Simulador de Capitalização & Retorno CAP",
      description: "Demonstre ao cliente como o título protege o dinheiro e ainda concorre a grandes prêmios semanais.",
      defaultTicketPrice: 10,
      modes: [
        { name: "CAP Semanal Premiável", multiplier: 20000, desc: "Título com sorteios aos domingos e resgate proporcional" },
        { name: "CAP Mensal Ouro", multiplier: 100000, desc: "Prêmio principal de R$ 100 mil + Casas e Carros" },
        { name: "CAP Fidelidade Acumulado", multiplier: 250000, desc: "Maior percentual de resgate final + mega prêmio" }
      ]
    },
    leis: [
      {
        id: "cap-1",
        title: "Circular SUSEP nº 569/2018 e 656/2022 - Normas de Capitalização",
        tags: ["SUSEP", "Federal", "Capitalização"],
        resumo: "Normas da Superintendência de Seguros Privados (SUSEP) que regem as modalidades de títulos de capitalização no Brasil, estabelecendo regras de sorteio, quotas de resgate e auditoria independente.",
        artigoChave: "Art. 5º - Todo título de capitalização é emitido por sociedade autorizada pela SUSEP, com provisões técnicas e ativos garantidores auditados periodicamente pelo Banco Central e Ministério da Fazenda."
      },
      {
        id: "cap-2",
        title: "Decreto-Lei Federal nº 261/1967 - Garantia de Reserva Financeira",
        tags: ["Federal", "Garantia", "Reserva"],
        resumo: "Dispõe sobre a operação de capitalização no país, obrigando a empresa emissora a manter fundo de liquidez em títulos públicos para honrar resgates e premiações.",
        artigoChave: "Art. 12 - Os fundos garantidores dos títulos de capitalização possuem preferência legal e destinação exclusiva para a quitação das obrigações contratuais assumidas com os adquirentes."
      },
      {
        id: "cap-3",
        title: "Regulamento Geral do Consumidor e Prazos de Resgate",
        tags: ["Consumidor", "Transparência"],
        resumo: "Determina prazo máximo de 15 dias para crédito de prêmios sorteados e estabelece os percentuais transparentes de cessão para entidades filantrópicas ou resgate pessoal.",
        artigoChave: "Art. 22 - A notificação dos contemplados nos sorteios deve ocorrer de maneira ativa pelos canais cadastrados em até 48 horas após a apuração."
      }
    ],
    scripts: [
      {
        title: "💡 Argumento Comparativo: Poupança x CAP Premiável",
        tipo: "Argumentação",
        texto: `Sabe aquele dinheiro parado na poupança rendendo quase nada? 
        
Com o nosso Título de Capitalização CAP você guarda um valor mensal, concorre toda semana a prêmios de até R$ 100.000 no sorteio oficial da SUSEP e ainda tem a liquidez garantida! 

É juntar dinheiro tendo a chance real de mudar de vida toda semana.`
      },
      {
        title: "🎁 Script de Abordagem para Presente ou Família",
        tipo: "Família",
        texto: `Oi [Nome], já pensou em dar um presente diferente para alguém da sua família?
        
O título CAP custa só R$ 10, concorre a um carro 0km neste domingo e o bilhete fica registrado no nome da pessoa. É o presente mais emocionante que você pode dar!`
      },
      {
        title: "🛡️ Resposta a Objeção: 'Isso é igual a jogo de azar?'",
        tipo: "Objeção",
        texto: `Não! O CAP é um Título de Capitalização regulamentado pela SUSEP (órgão do Governo Federal que fiscaliza seguros e previdência). 

Diferente de aposta onde o dinheiro 'some' se não ganhar, no título de capitalização você tem um contrato formal registrado, com reservas financeiras que garantem o pagamento integral do prêmio fiscalizado pelo governo!`
      }
    ],
    downloads: [
      { title: "Manual de Produtos e Modalidades CAP 2026.pdf", tamanho: "3.1 MB", tipo: "PDF" },
      { title: "Certificado de Homologação SUSEP.pdf", tamanho: "1.2 MB", tipo: "PDF" },
      { title: "Folder Explicativo para Clientes (Imprimir ou Enviar).pdf", tamanho: "4.5 MB", tipo: "PDF" }
    ]
  }
};

// Dados detalhados dos Cases para cópia
const CASES_PITCH = {
  mariana: {
    nome: "Mariana Souza (@mariana.vendas)",
    cidade: "Campina Grande - PB",
    premio: "R$ 5.840,00 no 1º mês",
    produto: "LOTEP",
    mensagem: `🌟 *CASE DE SUCESSO - Mariana Souza (@mariana.vendas)*
📍 Campina Grande - PB • Destaque LOTEP
💰 Faturamento: R$ 5.840,00 em comissões no 1º mês!

"No começo achei que ia ser difícil, mas quando usei o script oficial e mostrei a tabela de chances oficiais da LOTEP aos clientes, fechei mais de 10 cotas por dia. A comissão cai certinha!"

👉 Veja como aplicar o método no Portal Luquinhas!`
  },
  lucas: {
    nome: "Lucas Andrade (@lucas.consultoria)",
    cidade: "João Pessoa - PB",
    premio: "Cliente premiado com R$ 35.000",
    produto: "CAP Premiável",
    mensagem: `🏆 *CASE DE SUCESSO - Lucas Andrade (@lucas.consultoria)*
📍 João Pessoa - PB • Especialista CAP SUSEP
🎉 Resultado: Cliente comtemplado com R$ 35.000,00 no sorteio de domingo!

"Vendi 3 títulos CAP para o seu Raimundo da padaria. No domingo ele levou R$ 35 mil no giro da sorte! A notícia explodiu no bairro e agora vendo mais de 50 títulos por dia só por indicação."`
  },
  carlos: {
    nome: "Carlos Eduardo (@carlos.vendas.pb)",
    cidade: "Santa Rita - PB",
    premio: "140 cotas em um sábado",
    produto: "LOTEP",
    mensagem: `🚀 *CASE DE SUCESSO - Carlos Eduardo (@carlos.vendas.pb)*
📍 Santa Rita - PB • Vendas Externas
⚡ Meta: 140 cotas vendidas em um único sábado!

"Com a calculadora no celular e as legislações oficiais da LOTEP na mão, mostrei a segurança jurídica da operação para cada cliente. Fechei na hora!"`
  }
};

let currentProduct = 'lotep';

// ========================================================
// MOTOR DA CALCULADORA DE CELULAR SMARTPHONE
// ========================================================
let calcCurrentVal = '0';
let calcPreviousVal = '';
let calcOperator = null;
let calcResetOnNext = false;

function updateCalcDisplay() {
  const display = document.getElementById('calcDisplay');
  const history = document.getElementById('calcHistory');

  // Formatação com separador de milhar
  let formatted = calcCurrentVal;
  if (!calcCurrentVal.includes('e') && !calcCurrentVal.includes('E')) {
    const parts = calcCurrentVal.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    formatted = parts.join(',');
  }

  // Ajuste do tamanho da fonte se o número for muito longo
  if (formatted.length > 9) {
    display.style.fontSize = '2rem';
  } else if (formatted.length > 7) {
    display.style.fontSize = '2.4rem';
  } else {
    display.style.fontSize = '2.8rem';
  }

  display.textContent = formatted;

  if (calcOperator && calcPreviousVal !== '') {
    let opSymbol = calcOperator;
    if (opSymbol === '*') opSymbol = '×';
    if (opSymbol === '/') opSymbol = '÷';
    if (opSymbol === '-') opSymbol = '−';
    history.textContent = `${calcPreviousVal.replace('.', ',')} ${opSymbol}`;
  } else {
    history.innerHTML = '&nbsp;';
  }
}

function calcInput(key) {
  // Números
  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
    if (calcCurrentVal === '0' || calcResetOnNext) {
      calcCurrentVal = key;
      calcResetOnNext = false;
    } else {
      if (calcCurrentVal.length < 12) {
        calcCurrentVal += key;
      }
    }
    updateCalcDisplay();
    return;
  }

  // Ponto / Vírgula decimal
  if (key === '.') {
    if (calcResetOnNext) {
      calcCurrentVal = '0.';
      calcResetOnNext = false;
    } else if (!calcCurrentVal.includes('.')) {
      calcCurrentVal += '.';
    }
    updateCalcDisplay();
    return;
  }

  // Limpar (AC)
  if (key === 'AC') {
    calcCurrentVal = '0';
    calcPreviousVal = '';
    calcOperator = null;
    calcResetOnNext = false;
    updateCalcDisplay();
    return;
  }

  // Apagar último dígito (DEL)
  if (key === 'DEL') {
    if (calcResetOnNext) return;
    if (calcCurrentVal.length > 1) {
      calcCurrentVal = calcCurrentVal.slice(0, -1);
    } else {
      calcCurrentVal = '0';
    }
    updateCalcDisplay();
    return;
  }

  // Inversão de sinal (+/-)
  if (key === '+/-') {
    if (calcCurrentVal !== '0') {
      if (calcCurrentVal.startsWith('-')) {
        calcCurrentVal = calcCurrentVal.substring(1);
      } else {
        calcCurrentVal = '-' + calcCurrentVal;
      }
      updateCalcDisplay();
    }
    return;
  }

  // Porcentagem (%)
  if (key === '%') {
    const val = parseFloat(calcCurrentVal);
    if (!isNaN(val)) {
      calcCurrentVal = String(val / 100);
      updateCalcDisplay();
    }
    return;
  }

  // Operadores aritméticos (+, -, *, /)
  if (['+', '-', '*', '/'].includes(key)) {
    if (calcOperator && !calcResetOnNext) {
      executeCalcOperation();
    }
    calcPreviousVal = calcCurrentVal;
    calcOperator = key;
    calcResetOnNext = true;
    updateCalcDisplay();
    return;
  }

  // Igual (=)
  if (key === '=') {
    if (calcOperator && calcPreviousVal !== '') {
      executeCalcOperation();
      calcOperator = null;
      calcResetOnNext = true;
    }
    updateCalcDisplay();
    return;
  }
}

function executeCalcOperation() {
  const prev = parseFloat(calcPreviousVal);
  const current = parseFloat(calcCurrentVal);
  if (isNaN(prev) || isNaN(current)) return;

  let result = 0;
  switch (calcOperator) {
    case '+': result = prev + current; break;
    case '-': result = prev - current; break;
    case '*': result = prev * current; break;
    case '/': 
      if (current === 0) {
        showToast("Não é possível dividir por zero!");
        return;
      }
      result = prev / current; 
      break;
    default: return;
  }

  // Truncar casas decimais excessivas
  result = Math.round(result * 100000000) / 100000000;
  calcCurrentVal = String(result);
  calcPreviousVal = '';
}

// Atalhos Rápidos de Venda no Celular
function calcQuickSales(valorBilhete) {
  calcInput('AC');
  calcCurrentVal = String(valorBilhete);
  calcInput('*');
  showToast(`Multiplicando por R$ ${valorBilhete},00. Digite a quantidade de bilhetes e aperte '='`);
}

function calcQuickPercent(pct) {
  const val = parseFloat(calcCurrentVal);
  if (isNaN(val) || val === 0) {
    showToast("Digite o valor das vendas primeiro!");
    return;
  }
  const comissao = val * (pct / 100);
  calcPreviousVal = `${val} × ${pct}%`;
  calcCurrentVal = String(Math.round(comissao * 100) / 100);
  calcResetOnNext = true;
  updateCalcDisplay();
  showToast(`Comissão de ${pct}% calculada: R$ ${calcCurrentVal.replace('.', ',')}`);
}

function copyCalcResult() {
  const displayVal = document.getElementById('calcDisplay').textContent;
  copyToClipboard(`R$ ${displayVal}`, `Resultado R$ ${displayVal} copiado!`);
}

// Captura de teclas físicas do teclado
document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return;

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
    calcInput(e.key);
  } else if (e.key === '.' || e.key === ',') {
    calcInput('.');
  } else if (['+', '-', '*', '/'].includes(e.key)) {
    calcInput(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    calcInput('=');
  } else if (e.key === 'Backspace') {
    calcInput('DEL');
  } else if (e.key === 'Escape') {
    calcInput('AC');
  } else if (e.key === '%') {
    calcInput('%');
  }
});

// Relógio no topo do celular
function updatePhoneClock() {
  const clock = document.getElementById('liveClock');
  if (!clock) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  clock.textContent = `${h}:${m}`;
}

// ========================================================
// CASES DE SUCESSO & LINKS DE AÇÕES
// ========================================================
function copyCaseStory(caseKey) {
  const c = CASES_PITCH[caseKey];
  if (!c) return;
  copyToClipboard(c.mensagem, `Prova social de ${c.nome.split(' ')[0]} copiada!`);
}

function openSiteVendas() {
  alert("Link do Portal Oficial de Emissão de Vendas configurável pelo gestor.");
}

function openDriveArtes() {
  alert("Pasta Google Drive com criativos para Stories, artes prontas e panfletos digitais.");
}

// ========================================================
// MODAL DE PRODUTO (LOTEP & CAP)
// ========================================================
function openProductModal(product) {
  currentProduct = product;
  const data = PRODUCTS_DATA[product];
  const modal = document.getElementById('productModal');

  // Badge e Titulo
  const badgeEl = document.getElementById('modalProductBadge');
  badgeEl.textContent = data.badge;
  badgeEl.className = `modal-badge ${data.badgeClass}`;
  document.getElementById('modalProductTitle').textContent = data.title;

  // Carregar Conteúdo das Abas
  renderModalSimulador(data);
  renderModalLaws(data.leis);
  renderModalScripts(data.scripts);
  renderModalDownloads(data.downloads);

  // Abrir modal na aba 1
  switchModalTab('simulador');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(event) {
  if (event.target === document.getElementById('productModal')) {
    closeProductModalDirect();
  }
}

function closeProductModalDirect() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function switchModalTab(tabName) {
  const tabs = ['simulador', 'legislacao', 'scripts', 'downloads'];
  tabs.forEach(t => {
    const tabBtn = document.getElementById(`mTab${capitalize(t)}`);
    const pane = document.getElementById(`pane${capitalize(t)}`);
    if (t === tabName) {
      tabBtn.classList.add('active');
      pane.classList.add('active');
    } else {
      tabBtn.classList.remove('active');
      pane.classList.remove('active');
    }
  });
}

function renderModalSimulador(data) {
  const container = document.getElementById('modalSimContent');
  const sim = data.simulador;

  let html = `
    <div style="margin-bottom: 20px;">
      <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 4px;">${sim.title}</h3>
      <p style="font-size: 0.88rem; color: #94a3b8;">${sim.description}</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-bottom: 24px;">
  `;

  sim.modes.forEach((m) => {
    html += `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px;">
        <div style="font-weight: 700; color: #fff; font-size: 0.95rem; margin-bottom: 6px;">${m.name}</div>
        <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 12px;">${m.desc}</div>
        <div style="font-size: 1.2rem; font-weight: 800; color: #f59e0b;">Multiplicador ${m.multiplier}x</div>
      </div>
    `;
  });

  html += `
    </div>
    <div style="background: #0b0f19; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px;">
      <div style="font-weight: 700; color: #fff; margin-bottom: 8px;">Dica de Fechamento ao vivo para este produto:</div>
      <p style="font-size: 0.86rem; color: #cbd5e1; line-height: 1.5;">
        Sempre apresente 3 opções de cotas para o seu cliente (ex: R$ 10, R$ 25 e R$ 50). Quando você dá alternativas fechadas, o cérebro escolhe a opção intermediária em mais de 70% dos casos!
      </p>
    </div>
  `;

  container.innerHTML = html;
}

function renderModalLaws(leis) {
  const container = document.getElementById('modalLawsContent');
  if (!leis || leis.length === 0) {
    container.innerHTML = `<p style="color: #94a3b8; font-size: 0.9rem;">Nenhuma legislação encontrada para esta busca.</p>`;
    return;
  }

  let html = '';
  leis.forEach((lei, idx) => {
    html += `
      <div class="law-item ${idx === 0 ? 'open' : ''}" id="lawItem-${lei.id}">
        <div class="law-header" onclick="toggleLawAccordion('lawItem-${lei.id}')">
          <div>
            <span>${lei.title}</span>
            ${lei.tags.map(t => `<span class="law-badge-pill">${t}</span>`).join('')}
          </div>
          <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; color: #94a3b8;"></i>
        </div>
        <div class="law-content">
          <p style="margin-bottom: 10px;">${lei.resumo}</p>
          <div style="background: rgba(14, 165, 233, 0.08); border-left: 3px solid #0ea5e9; padding: 10px 14px; border-radius: 4px; font-size: 0.84rem; color: #e2e8f0;">
            <strong>Texto na íntegra:</strong> ${lei.artigoChave}
          </div>
          <button style="margin-top: 12px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 0.76rem; cursor: pointer;" onclick="copyLawText('${lei.title}', '${escapeQuotes(lei.artigoChave)}')">
            <i class="fa-solid fa-copy"></i> Copiar Artigo para Enviar ao Cliente
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function toggleLawAccordion(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.toggle('open');
  }
}

function filterLaws(query) {
  const q = query.toLowerCase().trim();
  const currentLaws = PRODUCTS_DATA[currentProduct].leis;
  if (!q) {
    renderModalLaws(currentLaws);
    return;
  }
  const filtered = currentLaws.filter(l => 
    l.title.toLowerCase().includes(q) || 
    l.resumo.toLowerCase().includes(q) || 
    l.tags.some(t => t.toLowerCase().includes(q))
  );
  renderModalLaws(filtered);
}

function copyLawText(title, text) {
  const msg = `📜 *BASE LEGAL & LEGISLAÇÃO OFICIAL*
*${title}*

${text}

(Fonte: Legislação Oficial Regulamentada)`;
  copyToClipboard(msg, "Base legal copiada para envio!");
}

function renderModalScripts(scripts) {
  const container = document.getElementById('modalScriptsContent');
  let html = '';

  scripts.forEach((s, idx) => {
    html += `
      <div class="script-card">
        <div class="script-header">
          <div class="script-title">
            <span class="tag-pill">${s.tipo}</span>
            <span>${s.title}</span>
          </div>
          <button class="btn-copy-script" onclick="copySpecificScript(${idx})">
            <i class="fa-solid fa-copy"></i> Copiar Script
          </button>
        </div>
        <div class="script-body" id="scriptText-${idx}">${escapeHtml(s.texto)}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function copySpecificScript(index) {
  const scriptObj = PRODUCTS_DATA[currentProduct].scripts[index];
  if (scriptObj) {
    copyToClipboard(scriptObj.texto, "Script copiado com sucesso! Agora é só colar no WhatsApp.");
  }
}

function renderModalDownloads(downloads) {
  const container = document.getElementById('modalDownloadsContent');
  let html = '';

  downloads.forEach(d => {
    html += `
      <div class="download-card">
        <div class="download-icon">
          <i class="fa-solid fa-file-pdf"></i>
        </div>
        <div class="download-info">
          <h4>${d.title}</h4>
          <p>Tamanho: ${d.tamanho} • Formato: ${d.tipo}</p>
        </div>
        <button class="btn-download-file" onclick="simulateDownload('${d.title}')">
          <i class="fa-solid fa-download"></i> Baixar Arquivo
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

function simulateDownload(filename) {
  showToast(`Baixando "${filename}"...`);
  setTimeout(() => {
    showToast(`Download de "${filename}" concluído!`);
  }, 1000);
}

// ========================================================
// UTILITÁRIOS E TOAST
// ========================================================
function copyToClipboard(text, customMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(customMsg || "Copiado para a área de transferência!");
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(customMsg || "Copiado para a área de transferência!");
  });
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeQuotes(string) {
  return String(string).replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// Inicializar Relógio e Display
document.addEventListener('DOMContentLoaded', () => {
  updatePhoneClock();
  setInterval(updatePhoneClock, 10000);
  updateCalcDisplay();
});
