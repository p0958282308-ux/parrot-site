const entries = {
  macaw: {
    title: 'Macaw｜金剛鸚鵡',
    subtitle: '高彩度、強社交性，以及無法忽略的舞台感。',
    gradient: 'gradient-macaw',
    copy: '金剛鸚鵡的網站條目可以同時承載物種文字、影像紀錄、影片觀察、互動式 HTML 小作品，以及課堂或研究用簡報。',
    slots: ['文字：物種介紹與觀察筆記', '圖片：攝影集或羽色細節', '影片：飛行、鳴叫與互動畫面', 'HTML：互動羽色圖鑑', '簡報：棲地與保育專題']
  },
  cockatiel: {
    title: 'Cockatiel｜玄鳳鸚鵡',
    subtitle: '冠羽像即時情緒指標，親近感是牠的招牌。',
    gradient: 'gradient-cockatiel',
    copy: '玄鳳鸚鵡適合用更生活化的內容呈現：日常照護、叫聲片段、行為觀察、互動小測驗與飼養簡報都能放進同一條目。',
    slots: ['文字：日常照護與性格', '圖片：冠羽與表情觀察', '影片：哨音與互動片段', 'HTML：情緒冠羽小測驗', '簡報：新手飼養指南']
  },
  'african-grey': {
    title: 'African Grey｜非洲灰鸚鵡',
    subtitle: '灰階外表下，是極具層次的聲音與觀察世界。',
    gradient: 'gradient-grey',
    copy: '非洲灰鸚鵡條目可以偏向知識與研究：語音模仿紀錄、行為訓練影片、認知互動作品，以及關於學習能力的簡報內容。',
    slots: ['文字：認知與行為筆記', '圖片：羽毛紋理與紅尾', '影片：聲音模仿紀錄', 'HTML：聲音辨識互動', '簡報：認知研究摘要']
  }
};

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.species-card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const f = btn.dataset.filter;
  cards.forEach(card => card.hidden = !(f === 'all' || card.dataset.size === f));
}));

const modal = document.getElementById('entryModal');
const modalContent = document.getElementById('modalContent');
document.querySelectorAll('.open-modal').forEach(btn => btn.addEventListener('click', () => openEntry(btn.dataset.entry)));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());

function openEntry(key){
  const e = entries[key];
  modalContent.innerHTML = `
    <div class="modal-inner">
      <div class="modal-hero ${e.gradient}"></div>
      <p class="eyebrow">EXPANDABLE ENTRY</p>
      <h3>${e.title}</h3>
      <p><b>${e.subtitle}</b></p>
      <p>${e.copy}</p>
      <div class="modal-grid">${e.slots.map((s,i)=>`<div class="slot"><b>${String(i+1).padStart(2,'0')}</b><small>${s}</small></div>`).join('')}</div>
    </div>`;
  modal.showModal();
}

document.getElementById('shuffleBtn').addEventListener('click', () => {
  const keys = Object.keys(entries);
  const key = keys[Math.floor(Math.random()*keys.length)];
  document.getElementById(key).scrollIntoView({behavior:'smooth', block:'center'});
  setTimeout(()=>openEntry(key), 500);
});

const header = document.querySelector('.site-header');
document.querySelector('.menu-btn').addEventListener('click', e => {
  const open = header.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', String(open));
});
