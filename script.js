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

  // Alternar entre AC e C
  if (btnAC) {
    btnAC.textContent = (iosCurrent !== '0' || iosPrevious !== null) ? 'C' : 'AC';
  }

  // Formatação com separadores de milhares e vírgula
  let formatted = iosCurrent;
  if (!iosCurrent.includes('e') && !iosCurrent.includes('E')) {
    const parts = iosCurrent.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    formatted = parts.join(',');
  }

  // Redução automática da fonte conforme quantidade de dígitos
  if (formatted.length > 9) {
    display.style.fontSize = '2.4rem';
  } else if (formatted.length > 7) {
    display.style.fontSize = '3.1rem';
  } else if (formatted.length > 5) {
    display.style.fontSize = '3.6rem';
  } else {
    display.style.fontSize = '4.2rem';
  }

  display.textContent = formatted;
}

function iosCalcInput(key) {
  // Números
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

  // Ponto decimal / Vírgula
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

  // AC / C
  if (key === 'AC') {
    iosCurrent = '0';
    iosPrevious = null;
    iosOp = null;
    iosResetNext = false;
    updateIosDisplay();
    return;
  }

  // Inversão (+/-)
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

  // Porcentagem (%)
  if (key === '%') {
    const val = parseFloat(iosCurrent);
    if (!isNaN(val)) {
      iosCurrent = String(val / 100);
      updateIosDisplay();
    }
    return;
  }

  // Operadores (+, -, *, /)
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

  // Igual (=)
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

// Suporte ao teclado físico do computador
document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return;

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

  // Carregar Conteúdo
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

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  updateIosDisplay();
});
