/* ========================================================
   SCRIPT - PORTAL DE APOIO A VENDAS LUQUINHAS (LOTEP & CAP)
   ======================================================== */

// Base de Dados de Produtos (LOTEP e CAP)
const PRODUCTS_DATA = {
  lotep: {
    badge: "LOTEP",
    badgeClass: "lotep",
    title: "Material Oficial LOTEP (Loteria da Paraíba)",
    simuladorLinks: [
      {
        title: "Simulador LOTEP (Sanasorte)",
        url: "https://simulador.sanasorte.com.br/",
        desc: "Simulador oficial online para cálculo de cotas, bilhetes e premiações diárias."
      }
    ],
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
    simuladorLinks: [
      {
        title: "Simulador Capitalização Incentivo (App Lovable)",
        url: "https://simuladplayyourwayorcap.lovable.app/auth",
        desc: "Acesso ao simulador web oficial de capitalização na modalidade incentivo."
      },
      {
        title: "Simulador Capitalização Filantropia (Google Sheets)",
        url: "https://docs.google.com/spreadsheets/d/162MhF_MiFt4oliIccJStU55pEJ4DRu4oMk5O9kIOAEI/edit?usp=sharing",
        desc: "Planilha oficial homologada para cálculo de títulos na modalidade filantropia premiável."
      }
    ],
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

let currentProduct = 'lotep';

// ========================================================
// MOTOR DA CALCULADORA TIPO CELULAR PADRÃO (EXATA DA FOTO 1)
// ========================================================
let iosCurrent = '0';
let iosPrevious = null;
let iosOp = null;
let iosResetNext = false;

function updateIosDisplay() {
  const display = document.getElementById('iosCalcDisplay');
  const btnAC = document.getElementById('btnAC');

  if (btnAC) {
    btnAC.textContent = (iosCurrent !== '0' || iosPrevious !== null) ? 'C' : 'AC';
  }

  let formatted = iosCurrent;
  if (!iosCurrent.includes('e') && !iosCurrent.includes('E')) {
    const parts = iosCurrent.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    formatted = parts.join(',');
  }

  if (formatted.length > 9) {
    display.style.fontSize = '1.8rem';
  } else if (formatted.length > 7) {
    display.style.fontSize = '2.2rem';
  } else if (formatted.length > 5) {
    display.style.fontSize = '2.5rem';
  } else {
    display.style.fontSize = '2.6rem';
  }

  display.textContent = formatted;
}

function iosCalcInput(key) {
  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
    if (iosCurrent === '0' || iosResetNext) {
      iosCurrent = key;
      iosResetNext = false;
    } else {
      if (iosCurrent.length < 10) {
        iosCurrent += key;
      }
    }
    updateIosDisplay();
    return;
  }

  if (key === '.') {
    if (iosResetNext) {
      iosCurrent = '0.';
      iosResetNext = false;
    } else if (!iosCurrent.includes('.')) {
      iosCurrent += '.';
    }
    updateIosDisplay();
    return;
  }

  if (key === 'AC') {
    iosCurrent = '0';
    iosPrevious = null;
    iosOp = null;
    iosResetNext = false;
    updateIosDisplay();
    return;
  }

  if (key === '+/-') {
    if (iosCurrent !== '0') {
      if (iosCurrent.startsWith('-')) {
        iosCurrent = iosCurrent.substring(1);
      } else {
        iosCurrent = '-' + iosCurrent;
      }
      updateIosDisplay();
    }
    return;
  }

  if (key === '%') {
    const val = parseFloat(iosCurrent);
    if (!isNaN(val)) {
      iosCurrent = String(val / 100);
      updateIosDisplay();
    }
    return;
  }

  if (['+', '-', '*', '/'].includes(key)) {
    if (iosOp && !iosResetNext) {
      executeIosOp();
    }
    iosPrevious = iosCurrent;
    iosOp = key;
    iosResetNext = true;
    updateIosDisplay();
    return;
  }

  if (key === '=') {
    if (iosOp && iosPrevious !== null) {
      executeIosOp();
      iosOp = null;
      iosResetNext = true;
    }
    updateIosDisplay();
    return;
  }
}

function executeIosOp() {
  const prev = parseFloat(iosPrevious);
  const current = parseFloat(iosCurrent);
  if (isNaN(prev) || isNaN(current)) return;

  let res = 0;
  switch (iosOp) {
    case '+': res = prev + current; break;
    case '-': res = prev - current; break;
    case '*': res = prev * current; break;
    case '/': 
      if (current === 0) {
        showToast("Erro: divisão por zero");
        iosCurrent = '0';
        iosPrevious = null;
        iosOp = null;
        return;
      }
      res = prev / current; 
      break;
    default: return;
  }

  res = Math.round(res * 100000000) / 100000000;
  iosCurrent = String(res);
  iosPrevious = null;
}

// Suporte ao teclado físico
document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
    iosCalcInput(e.key);
  } else if (e.key === '.' || e.key === ',') {
    iosCalcInput('.');
  } else if (['+', '-', '*', '/'].includes(e.key)) {
    iosCalcInput(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    iosCalcInput('=');
  } else if (e.key === 'Backspace') {
    if (iosCurrent.length > 1) {
      iosCurrent = iosCurrent.slice(0, -1);
    } else {
      iosCurrent = '0';
    }
    updateIosDisplay();
  } else if (e.key === 'Escape') {
    iosCalcInput('AC');
  } else if (e.key === '%') {
    iosCalcInput('%');
  }
});

// ========================================================
// MODAL DE APRESENTAÇÃO PDF
// ========================================================
function openApresentacaoPdf() {
  const modal = document.getElementById('apresentacaoModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeApresentacaoModal(event) {
  if (event.target === document.getElementById('apresentacaoModal')) {
    closeApresentacaoModalDirect();
  }
}

function closeApresentacaoModalDirect() {
  const modal = document.getElementById('apresentacaoModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ========================================================
// BLOCO DE NOTAS (COM AUTO-SAVE EM LOCALSTORAGE)
// ========================================================
let notepadSaveTimeout = null;

function saveNotepad() {
  const text = document.getElementById('salesNotepad').value;
  localStorage.setItem('luquinhas_sales_notes', text);

  const status = document.getElementById('notepadStatus');
  if (status) {
    status.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Salvando...`;
    if (notepadSaveTimeout) clearTimeout(notepadSaveTimeout);
    notepadSaveTimeout = setTimeout(() => {
      status.innerHTML = `<i class="fa-solid fa-check"></i> Salvo automaticamente`;
    }, 400);
  }
}

function loadNotepad() {
  const saved = localStorage.getItem('luquinhas_sales_notes');
  const notepad = document.getElementById('salesNotepad');
  if (saved !== null && notepad) {
    notepad.value = saved;
  }
}

function copyNotepadText() {
  const text = document.getElementById('salesNotepad').value;
  if (!text.trim()) {
    showToast("O bloco de notas está vazio!");
    return;
  }
  copyToClipboard(text, "Anotações copiadas para a área de transferência!");
}

function clearNotepadText() {
  if (confirm("Deseja realmente limpar todas as anotações?")) {
    document.getElementById('salesNotepad').value = '';
    localStorage.removeItem('luquinhas_sales_notes');
    showToast("Bloco de notas limpo!");
  }
}

// ========================================================
// AGENDA PARA MARCAR EVENTOS (COM PERSISTÊNCIA)
// ========================================================
let calendarEvents = [];

function loadCalendarEvents() {
  const saved = localStorage.getItem('luquinhas_events_list');
  if (saved) {
    try {
      calendarEvents = JSON.parse(saved);
    } catch (e) {
      calendarEvents = [];
    }
  } else {
    // Eventos padrão de demonstração
    calendarEvents = [
      { id: 1, title: "Sorteio Semanal CAP às 10h", datetime: "2026-11-22T10:00" },
      { id: 2, title: "Ligar p/ Cliente Bolão LOTEP", datetime: "2026-11-18T15:30" }
    ];
    saveCalendarEvents();
  }
  renderCalendarEvents();
}

function saveCalendarEvents() {
  localStorage.setItem('luquinhas_events_list', JSON.stringify(calendarEvents));
  renderCalendarEvents();
}

function renderCalendarEvents() {
  const list = document.getElementById('eventsList');
  const countBadge = document.getElementById('eventsCount');
  if (!list) return;

  if (countBadge) {
    countBadge.textContent = `${calendarEvents.length} evento${calendarEvents.length === 1 ? '' : 's'}`;
  }

  if (calendarEvents.length === 0) {
    list.innerHTML = `<div style="text-align: center; color: #64748b; font-size: 0.72rem; padding: 12px 0;">Nenhum evento marcado. Adicione um acima!</div>`;
    return;
  }

  // Ordenar por data crescente
  calendarEvents.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

  let html = '';
  calendarEvents.forEach(ev => {
    let formattedDate = 'Data a definir';
    if (ev.datetime) {
      const d = new Date(ev.datetime);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
      }
    }

    html += `
      <div class="event-item-card">
        <div class="event-item-info">
          <span class="event-item-title" title="${escapeHtml(ev.title)}">${escapeHtml(ev.title)}</span>
          <span class="event-item-time"><i class="fa-regular fa-clock"></i> ${formattedDate}</span>
        </div>
        <button class="btn-del-event" onclick="deleteCalendarEvent(${ev.id})" title="Remover evento">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;
  });

  list.innerHTML = html;
}

function addCalendarEvent() {
  const titleInput = document.getElementById('eventTitleInput');
  const dateInput = document.getElementById('eventDateInput');
  const title = titleInput.value.trim();
  const datetime = dateInput.value;

  if (!title) {
    showToast("Digite o título do evento!");
    return;
  }

  const newEvent = {
    id: Date.now(),
    title: title,
    datetime: datetime || new Date().toISOString().slice(0, 16)
  };

  calendarEvents.push(newEvent);
  saveCalendarEvents();

  titleInput.value = '';
  dateInput.value = '';
  showToast("Evento marcado na agenda com sucesso!");
}

function deleteCalendarEvent(id) {
  calendarEvents = calendarEvents.filter(e => e.id !== id);
  saveCalendarEvents();
  showToast("Evento removido da agenda!");
}

// ========================================================
// MODAL DE PRODUTO (LOTEP & CAP)
// ========================================================
function openProductModal(product) {
  currentProduct = product;
  const data = PRODUCTS_DATA[product];
  const modal = document.getElementById('productModal');

  const badgeEl = document.getElementById('modalProductBadge');
  badgeEl.textContent = data.badge;
  badgeEl.className = `modal-badge ${data.badgeClass}`;
  document.getElementById('modalProductTitle').textContent = data.title;

  renderModalSimuladores(data.simuladorLinks);
  renderModalLaws(data.leis);
  renderModalScripts(data.scripts);
  renderModalDownloads(data.downloads);

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

function renderModalSimuladores(links) {
  const container = document.getElementById('modalSimContent');
  let html = `
    <div style="margin-bottom: 20px;">
      <h3 style="font-size: 1.15rem; color: #fff; margin-bottom: 4px;">Simuladores Homologados & Oficiais</h3>
      <p style="font-size: 0.88rem; color: #94a3b8;">Acesse os links oficiais para cálculo de cotas, títulos e premiações em tempo real.</p>
    </div>
    <div style="display: flex; flex-direction: column; gap: 14px;">
  `;

  links.forEach(l => {
    html += `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 18px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div>
          <div style="font-weight: 700; color: #fff; font-size: 1rem; margin-bottom: 4px;">${l.title}</div>
          <div style="font-size: 0.84rem; color: #94a3b8;">${l.desc}</div>
        </div>
        <a href="${l.url}" target="_blank" rel="noopener noreferrer" style="background: #0284c7; color: #fff; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-size: 0.86rem; font-weight: 700; display: inline-flex; align-items: center; gap: 8px;">
          <span>Abrir Simulador</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;
  });

  html += `</div>`;
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
  if (el) el.classList.toggle('open');
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

// ========================================================
// CASES & LINKS OFICIAIS COM EDIÇÃO E FOTO DO INSTAGRAM
// ========================================================
const DEFAULT_CASES = [
  { id: 1, name: "JoseAldo Cunha", insta: "josealdo.cunha", link: "https://gay.com" },
  { id: 2, name: "Mariana Souza", insta: "mariana.souza", link: "https://gay.com" },
  { id: 3, name: "Lucas Andrade", insta: "lucas.andrade", link: "https://gay.com" },
  { id: 4, name: "Fernanda Lima", insta: "fernanda.lima", link: "https://gay.com" },
  { id: 5, name: "Carlos Eduardo", insta: "carlos.eduardo", link: "https://gay.com" }
];

let casesData = [];

function loadCases() {
  const saved = localStorage.getItem('luquinhas_custom_cases');
  if (saved) {
    try {
      casesData = JSON.parse(saved);
    } catch (e) {
      casesData = JSON.parse(JSON.stringify(DEFAULT_CASES));
    }
  } else {
    casesData = JSON.parse(JSON.stringify(DEFAULT_CASES));
  }
  renderCases();
}

function saveCases() {
  localStorage.setItem('luquinhas_custom_cases', JSON.stringify(casesData));
  renderCases();
}

function getCleanInstaHandle(insta) {
  if (!insta) return '';
  return String(insta).replace(/^@+/, '').trim();
}

function getInstaAvatarUrl(insta, name) {
  const handle = getCleanInstaHandle(insta);
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'User')}&background=1e293b&color=38bdf8`;
  if (handle) {
    return `https://unavatar.io/instagram/${encodeURIComponent(handle)}?fallback=${encodeURIComponent(fallback)}`;
  }
  return fallback;
}

function renderCases() {
  const container = document.getElementById('casesListGroup');
  if (!container) return;

  let html = '';
  casesData.forEach((item) => {
    const cleanInsta = getCleanInstaHandle(item.insta);
    const instaUrl = cleanInsta ? `https://instagram.com/${cleanInsta}` : '#';
    const avatarSrc = getInstaAvatarUrl(cleanInsta, item.name);
    const actionLink = item.link || '#';
    const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name || 'User')}&background=1e293b&color=38bdf8`;

    html += `
      <div class="case-row-item">
        <div class="case-avatar-col">
          <img 
            src="${avatarSrc}" 
            alt="${escapeHtml(item.name)}" 
            class="case-insta-avatar-img"
            loading="lazy"
            onerror="this.onerror=null; this.src='${fallbackAvatar}';"
          />
        </div>
        <div class="case-name-col">
          <a href="${instaUrl}" target="_blank" rel="noopener noreferrer" class="case-insta-link-name" title="Visitar Instagram de @${escapeHtml(cleanInsta)}">
            <span>${escapeHtml(item.name)}</span>
            <i class="fa-brands fa-instagram insta-mini-icon"></i>
          </a>
        </div>
        <div class="case-link-col">
          <a href="${actionLink}" target="_blank" rel="noopener noreferrer" class="case-link-pill" title="Acessar link oficial">
            ${escapeHtml(actionLink)}
          </a>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ========================================================
// MODAL DE EDIÇÃO DOS CASES & LINKS
// ========================================================
function openEditCasesModal() {
  const modal = document.getElementById('editCasesModal');
  const container = document.getElementById('editCasesFormContainer');
  if (!modal || !container) return;

  let formHtml = '';
  casesData.forEach((item, index) => {
    const cleanInsta = getCleanInstaHandle(item.insta);
    const avatarSrc = getInstaAvatarUrl(cleanInsta, item.name);
    const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name || 'User')}&background=1e293b&color=38bdf8`;

    formHtml += `
      <div class="edit-case-row-card">
        <img 
          src="${avatarSrc}" 
          alt="Avatar" 
          class="edit-avatar-preview" 
          id="previewAvatar_${index}"
          onerror="this.onerror=null; this.src='${fallbackAvatar}';"
        />
        <div class="edit-input-group">
          <label>Nome Completo</label>
          <input 
            type="text" 
            class="edit-input" 
            id="editCaseName_${index}" 
            value="${escapeHtml(item.name)}" 
            placeholder="Nome da pessoa"
            required
          />
        </div>
        <div class="edit-input-group">
          <label>Usuário do Instagram (@)</label>
          <input 
            type="text" 
            class="edit-input" 
            id="editCaseInsta_${index}" 
            value="${escapeHtml(cleanInsta)}" 
            placeholder="ex: josealdo.cunha"
            oninput="updateAvatarPreviewLive(${index})"
            required
          />
        </div>
        <div class="edit-input-group">
          <label>Link de Ações (URL visível)</label>
          <input 
            type="text" 
            class="edit-input" 
            id="editCaseLink_${index}" 
            value="${escapeHtml(item.link)}" 
            placeholder="https://..."
            required
          />
        </div>
      </div>
    `;
  });

  container.innerHTML = formHtml;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateAvatarPreviewLive(index) {
  const instaInput = document.getElementById(`editCaseInsta_${index}`);
  const nameInput = document.getElementById(`editCaseName_${index}`);
  const imgEl = document.getElementById(`previewAvatar_${index}`);
  if (!instaInput || !imgEl) return;

  const handle = getCleanInstaHandle(instaInput.value);
  const name = nameInput ? nameInput.value : 'User';
  imgEl.src = getInstaAvatarUrl(handle, name);
}

function closeEditCasesModal(event) {
  if (event.target === document.getElementById('editCasesModal')) {
    closeEditCasesModalDirect();
  }
}

function closeEditCasesModalDirect() {
  const modal = document.getElementById('editCasesModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function saveEditedCases(event) {
  if (event) event.preventDefault();

  const newCases = [];
  for (let i = 0; i < casesData.length; i++) {
    const nameInput = document.getElementById(`editCaseName_${i}`);
    const instaInput = document.getElementById(`editCaseInsta_${i}`);
    const linkInput = document.getElementById(`editCaseLink_${i}`);

    if (nameInput && instaInput && linkInput) {
      newCases.push({
        id: casesData[i].id || (i + 1),
        name: nameInput.value.trim() || `Pessoa ${i + 1}`,
        insta: getCleanInstaHandle(instaInput.value.trim()),
        link: linkInput.value.trim() || '#'
      });
    }
  }

  casesData = newCases;
  saveCases();
  closeEditCasesModalDirect();
  showToast("Cases e fotos do Instagram atualizados com sucesso!");
}

function restoreDefaultCases() {
  if (confirm("Deseja restaurar a lista padrão de cases e links?")) {
    casesData = JSON.parse(JSON.stringify(DEFAULT_CASES));
    saveCases();
    openEditCasesModal();
    showToast("Padrões restaurados!");
  }
}

// Inicializar na carga da página
document.addEventListener('DOMContentLoaded', () => {
  updateIosDisplay();
  loadNotepad();
  loadCalendarEvents();
  loadCases();
});
