const starterPosts = [
  {id:1,title:'In the Mood for Love',subtitle:'Wong Kar-wai · 2000',year:2000,mood:'tender',moodLabel:'Tender',rating:'9.8',date:'2026-10-22',image:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',alt:'A deep blue evening sky with a quiet, cinematic mood',excerpt:'A hallway, a glance held one second too long, and the ache of all the things left unsaid.',lede:'A film that makes longing feel like its own kind of weather.',body:['Two neighbors discover their spouses are having an affair. What follows is not the confrontation you might expect, but a delicate study of what people do with the feelings they cannot quite name.','Every frame feels remembered rather than witnessed: the saturated reds, the narrow corridors, the music returning like a thought you meant to leave behind. Wong Kar-wai understands that sometimes the most romantic thing a story can do is refuse to give its characters what they want.','I left this one thinking about all the almosts. The almost-hand-touch, almost-confession, almost-life. Some films end; this one lingers.'],tags:['tender']},
  {id:2,title:'Perfect Days',subtitle:'Wim Wenders · 2023',year:2023,mood:'comfort',moodLabel:'Comfort watch',rating:'9.4',date:'2026-10-17',image:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85',alt:'Sunlight filtering through a quiet green forest',excerpt:'A small, generous reminder that a life can be made beautiful by paying attention to it.',lede:'A gentle film about finding whole worlds in an ordinary day.',body:['Hirayama has a routine: wake up, tend the plants, listen to a cassette, go to work. The film follows that routine with the kind of patience that makes every small variation feel like a plot twist.','It is easy to mistake quiet for emptiness. Perfect Days knows better. It finds entire lives in the way someone looks up at a tree, the song they choose for the drive, the moment they make room for another person.','This is a film I want to keep on a shelf for the days when everything feels too loud. It does not offer a grand answer. It just reminds me to look.'],tags:['comfort','tender']},
  {id:3,title:'Before Sunrise',subtitle:'Richard Linklater · 1995',year:1995,mood:'restless',moodLabel:'Restless',rating:'9.6',date:'2026-10-11',image:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85',alt:'A European city street at dusk, lights just beginning to glow',excerpt:'Two strangers, one long night, and the lovely possibility that a conversation can change everything.',lede:'A city becomes a map of every possible version of your life.',body:['Jesse and Céline meet on a train, get off in Vienna, and spend the night walking and talking. That is the whole premise, and somehow it contains every big thing: chance, intimacy, time, the feeling of being truly listened to.','The film trusts conversation to be cinematic. They talk about parents and poetry and what makes a person; around them, the city keeps unfolding. Their connection feels light enough to float and real enough to hurt.','I love how it leaves the future open. We do not need to know what happens next to feel the weight of this one night.'],tags:['restless','tender']},
  {id:4,title:'Spirited Away',subtitle:'Hayao Miyazaki · 2001',year:2001,mood:'wonder',moodLabel:'Full of wonder',rating:'9.9',date:'2026-10-04',image:'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85',alt:'Deep teal water with soft, luminous reflections',excerpt:'A strange, beautiful world that makes growing up feel like the beginning of an adventure.',lede:'There is a whole world waiting on the other side of being brave.',body:['Chihiro enters a world where the rules are unfamiliar and the creatures are impossible. She is frightened, stubborn, kind, and entirely herself. That is enough to begin.','Miyazaki creates wonder without making it tidy. The bathhouse is busy, funny, a little scary. Even the spirits have their own work to do. The film feels less like an escape from the world than a reminder of how much world there is.','Every rewatch gives me a different thing to love: the food, the train over the water, the way Chihiro grows without ever becoming someone else.'],tags:['wonder','comfort']},
  {id:5,title:'Moonlight',subtitle:'Barry Jenkins · 2016',year:2016,mood:'tender',moodLabel:'Tender',rating:'9.7',date:'2026-09-26',image:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85',alt:'Moonlit blue waves meeting a quiet shoreline',excerpt:'Three chapters in one life, told with such care that every silence seems to say something.',lede:'A portrait of becoming, and of the rare kindness that lets us be seen.',body:['Moonlight moves through three moments in Chiron’s life, each with its own rhythm and its own name. The film never rushes to explain him. It lets us sit beside him, watch, and notice.','Barry Jenkins makes touch and light speak. A hand at the back of a head, a face held in a wash of blue, the patience it takes to ask a difficult question. It is an intimate film in the truest sense.','What stays with me is the tenderness at its center. It is not easy tenderness, or effortless tenderness. It is something chosen, offered, and accepted.'],tags:['tender']},
  {id:6,title:'The Grand Budapest Hotel',subtitle:'Wes Anderson · 2014',year:2014,mood:'comfort',moodLabel:'Comfort watch',rating:'9.2',date:'2026-09-18',image:'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85',alt:'Ornate old European architecture in warm afternoon light',excerpt:'A story inside a story, wrapped in pink walls, excellent pastries, and improbable loyalty.',lede:'A perfectly arranged world with a tender, beating heart.',body:['The Grand Budapest Hotel is so carefully made it feels like opening a beautiful little box. Pastel facades, fast footsteps, impossible adventures. But under all that precision is a story about memory and the people who shape it.','Gustave H. is funny, fussy, and devoted to a disappearing idea of good manners. His friendship with Zero gives the film its warmth. They move through a world that is changing faster than they can stop it, holding on to each other as best they can.','It is a comfort watch with a little ache tucked inside. I keep coming back for both.'],tags:['comfort','wonder']}
];

const postsStorageKey='afterCreditsCustomPosts';
const overridesStorageKey='afterCreditsPostOverrides';
const deletedStorageKey='afterCreditsDeletedPosts';
const moodLabels={tender:'Tender',restless:'Restless',wonder:'Full of wonder',comfort:'Comfort watch',unfiled:'Unsorted'};
const moodImages={
  tender:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
  restless:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85',
  wonder:'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85',
  comfort:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85',
  unfiled:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85'
};
function readStoredValue(key,fallback){
  try{
    const stored=localStorage.getItem(key);
    return stored===null?fallback:JSON.parse(stored);
  }catch{return fallback}
}
let savedPosts=readStoredValue(postsStorageKey,[]);
if(!Array.isArray(savedPosts))savedPosts=[];
let postOverrides=readStoredValue(overridesStorageKey,{});
if(!postOverrides||typeof postOverrides!=='object'||Array.isArray(postOverrides))postOverrides={};
let deletedPostIds=readStoredValue(deletedStorageKey,[]);
if(!Array.isArray(deletedPostIds))deletedPostIds=[];
const posts=[
  ...starterPosts
    .filter(post=>!deletedPostIds.includes(post.id))
    .map(post=>({...post,...postOverrides[post.id]})),
  ...savedPosts
];
function persistPostData(nextSavedPosts=savedPosts,nextOverrides=postOverrides,nextDeletedIds=deletedPostIds){
  try{
    localStorage.setItem(postsStorageKey,JSON.stringify(nextSavedPosts));
    localStorage.setItem(overridesStorageKey,JSON.stringify(nextOverrides));
    localStorage.setItem(deletedStorageKey,JSON.stringify(nextDeletedIds));
    return true;
  }catch{return false}
}

const grid=document.querySelector('#post-grid');
const status=document.querySelector('.search-status');
const searchPanel=document.querySelector('.search-panel');
const searchInput=document.querySelector('#site-search');
const articlePage=document.querySelector('#article-page');
const addDialog=document.querySelector('.add-dialog');
const addFilmForm=document.querySelector('#add-film-form');
let activeFilter='all';
let query='';
let newestFirst=true;
let editingPostId=null;
let currentPostId=null;
let favorites=[];
try{
  const storedFavorites=JSON.parse(localStorage.getItem('afterCreditsFavorites')||'[]');
  if(Array.isArray(storedFavorites))favorites=storedFavorites;
}catch{}
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function renderPosts(){
  const needle=query.trim().toLowerCase();
  const visible=posts.filter(post=>{
    const matchesMood=activeFilter==='all'||(activeFilter==='saved'?favorites.includes(post.id):post.tags.includes(activeFilter));
    const haystack=[post.title,post.subtitle,post.excerpt,post.moodLabel,...post.tags].join(' ').toLowerCase();
    return matchesMood&&(!needle||haystack.includes(needle));
  }).sort((a,b)=>newestFirst?new Date(b.date)-new Date(a.date):new Date(a.date)-new Date(b.date));
  document.querySelector('#post-count').textContent=String(posts.length).padStart(2,'0');
  document.querySelector('#issue-count').textContent=String(posts.length).padStart(2,'0');
  grid.innerHTML=visible.map((post,index)=>`<article class="post-card">
    <span class="film-index">${String(index+1).padStart(2,'0')}</span>
    <div class="film-main">
      <div class="film-meta"><span>${escapeHTML(post.subtitle)}</span><span class="mood">${escapeHTML(post.moodLabel)}</span></div>
      <h3 class="film-title"><a href="?post=${post.id}">${escapeHTML(post.title)}</a></h3>
      <p class="film-excerpt">${escapeHTML(post.excerpt)}</p>
    </div>
    <div class="film-side">
      <span class="rating"><strong>${post.rating==='—'?'—':escapeHTML(post.rating)}</strong>${post.rating==='—'?'':' / 10'}</span>
      <button class="save-button ${favorites.includes(post.id)?'saved':''}" data-save="${post.id}" aria-label="${favorites.includes(post.id)?'Remove':'Save'} ${escapeHTML(post.title)}" title="Save note">${favorites.includes(post.id)?'♥':'♡'}</button>
      <a class="read-link" href="?post=${post.id}">Read note <span aria-hidden="true">↗</span></a>
    </div>
  </article>`).join('');
  document.querySelector('.empty-state').hidden=visible.length>0;
  document.querySelector('.empty-state h3').textContent=activeFilter==='saved'&&!favorites.length?'Nothing saved yet.':'No notes found.';
  document.querySelector('.empty-state p').textContent=activeFilter==='saved'&&!favorites.length?'Save a note with the heart and it will appear here.':'Try another title, filmmaker, or feeling.';
  grid.hidden=visible.length===0;
  status.textContent=needle?`${visible.length} ${visible.length===1?'note':'notes'} found`:'';
}

function toggleSearch(open){searchPanel.classList.toggle('open',open);searchPanel.setAttribute('aria-hidden',String(!open));document.body.classList.toggle('search-open',open);document.querySelector('.search-toggle').setAttribute('aria-expanded',String(open));if(open) setTimeout(()=>searchInput.focus(),120)}
function renderArticle(post){
  currentPostId=post.id;
  document.querySelector('#top').hidden=true;
  articlePage.hidden=false;
  articlePage.querySelector('.longform-article').hidden=false;
  articlePage.querySelector('.article-not-found').hidden=true;
  document.querySelector('#article-kicker').textContent=`${post.moodLabel.toUpperCase()} / FILM NOTE`;
  document.querySelector('#article-page-title').textContent=post.title;
  const dek=document.querySelector('#article-page-dek');
  dek.textContent=post.lede;
  dek.hidden=post.body[0]===post.lede;
  document.querySelector('#article-page-rating').textContent=post.rating==='—'?'NOT RATED':`MY NOTE: ${post.rating} / 10`;
  document.querySelector('#article-page-director').textContent=getPostDirector(post);
  document.querySelector('#article-page-year').textContent=post.year||'';
  document.querySelector('#article-content').innerHTML=post.body.map(paragraph=>`<p>${escapeHTML(paragraph)}</p>`).join('');
  document.title=`${post.title} — After the Credits`;
  document.body.classList.add('reading-page');
}
function renderRoute(){
  const postId=new URLSearchParams(window.location.search).get('post');
  if(!postId){
    document.querySelector('#top').hidden=false;
    articlePage.hidden=true;
    document.body.classList.remove('reading-page');
    document.title='After the Credits — Notes on films we love';
    return;
  }
  document.querySelector('#top').hidden=true;
  articlePage.hidden=false;
  document.body.classList.add('reading-page');
  const post=posts.find(item=>String(item.id)===String(postId));
  if(post){
    renderArticle(post);
  }else{
    articlePage.querySelector('.longform-article').hidden=true;
    articlePage.querySelector('.article-not-found').hidden=false;
    document.title='Film note not found — After the Credits';
  }
}
function getPostDirector(post){
  if(Object.prototype.hasOwnProperty.call(post,'director'))return post.director;
  if(post.year)return post.subtitle.replace(/\s*·\s*\d{4}$/,'');
  return post.userCreated&&post.subtitle==='Your film note'?'':post.subtitle;
}
function setAddFormMode(post=null){
  editingPostId=post?post.id:null;
  addFilmForm.reset();
  document.querySelector('.add-form-feedback').textContent='';
  document.querySelector('#add-dialog-title').innerHTML=post?'Edit film note':'Add a film';
  document.querySelector('.submit-add').innerHTML=post?'Save changes <span aria-hidden="true">↗</span>':'Add to the journal <span aria-hidden="true">↗</span>';
  if(!post)return;
  const director=getPostDirector(post);
  const placeholderNote=post.hasPersonalNote===false||(post.body.length===1&&post.body[0]==='Add a few lines about this film whenever you like.');
  addFilmForm.elements.title.value=post.title;
  addFilmForm.elements.director.value=director;
  addFilmForm.elements.year.value=post.year||'';
  addFilmForm.elements.mood.value=post.mood||'unfiled';
  addFilmForm.elements.rating.value=post.rating==='—'?'':post.rating;
  addFilmForm.elements.note.value=placeholderNote?'':post.body.join('\n\n');
}

document.querySelector('.search-toggle').addEventListener('click',()=>toggleSearch(!searchPanel.classList.contains('open')));
document.querySelector('.close-search').addEventListener('click',()=>toggleSearch(false));
searchInput.addEventListener('input',event=>{const firstCharacter=!query&&event.target.value.length>0;query=event.target.value;renderPosts();if(firstCharacter)document.querySelector('#journal').scrollIntoView({behavior:'smooth',block:'start'})});
document.addEventListener('keydown',event=>{if(event.key==='Escape')toggleSearch(false);if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();toggleSearch(true)}});
document.querySelectorAll('.filter-pill').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter-pill.selected')?.classList.remove('selected');button.classList.add('selected');activeFilter=button.dataset.filter;renderPosts()}));
document.querySelector('#sort-button').addEventListener('click',event=>{newestFirst=!newestFirst;event.currentTarget.innerHTML=`${newestFirst?'Newest':'Oldest'} first <span aria-hidden="true">⌄</span>`;renderPosts()});
grid.addEventListener('click',event=>{const save=event.target.closest('[data-save]');if(save){const id=Number(save.dataset.save);favorites=favorites.includes(id)?favorites.filter(item=>item!==id):[...favorites,id];localStorage.setItem('afterCreditsFavorites',JSON.stringify(favorites));renderPosts()}});
document.querySelector('#add-film-button').addEventListener('click',()=>{setAddFormMode();addDialog.showModal()});
document.querySelector('.add-dialog-close').addEventListener('click',()=>addDialog.close());
document.querySelector('.cancel-add').addEventListener('click',()=>addDialog.close());
addDialog.addEventListener('click',event=>{if(event.target===addDialog)addDialog.close()});
document.querySelector('.edit-entry').addEventListener('click',()=>{
  const post=posts.find(item=>String(item.id)===String(currentPostId));
  if(!post)return;
  setAddFormMode(post);
  addDialog.showModal();
});
document.querySelector('.delete-entry').addEventListener('click',()=>{
  const post=posts.find(item=>String(item.id)===String(currentPostId));
  if(!post||!window.confirm(`Delete “${post.title}” from this journal?`))return;
  const nextSavedPosts=post.userCreated?savedPosts.filter(item=>item.id!==post.id):savedPosts;
  const nextOverrides={...postOverrides};
  let nextDeletedPostIds=deletedPostIds;
  if(post.userCreated){
    delete nextOverrides[post.id];
  }else{
    delete nextOverrides[post.id];
    nextDeletedPostIds=[...new Set([...deletedPostIds,post.id])];
  }
  if(!persistPostData(nextSavedPosts,nextOverrides,nextDeletedPostIds)){
    window.alert('Your browser could not save this change. Check local storage settings and try again.');
    return;
  }
  savedPosts=nextSavedPosts;
  postOverrides=nextOverrides;
  deletedPostIds=nextDeletedPostIds;
  const postIndex=posts.findIndex(item=>item.id===post.id);
  if(postIndex!==-1)posts.splice(postIndex,1);
  favorites=favorites.filter(id=>id!==post.id);
  try{localStorage.setItem('afterCreditsFavorites',JSON.stringify(favorites))}catch{}
  window.location.href='./index.html#journal';
});
addFilmForm.addEventListener('submit',event=>{
  event.preventDefault();
  const values=new FormData(addFilmForm);
  const existing=editingPostId===null?null:posts.find(item=>String(item.id)===String(editingPostId));
  const title=String(values.get('title')||'').trim();
  const director=String(values.get('director')||'').trim();
  const yearValue=String(values.get('year')||'').trim();
  const year=yearValue?Number(yearValue):null;
  const mood=String(values.get('mood')||'unfiled');
  const note=String(values.get('note')||'').trim();
  const noteParagraphs=note?note.split(/\n\s*\n/).map(paragraph=>paragraph.trim()).filter(Boolean):['A title for the films you want to remember.'];
  const ratingValue=String(values.get('rating')||'').trim();
  const rating=ratingValue?Number(ratingValue).toFixed(1).replace(/\.0$/,''):'—';
  const subtitle=[director,year].filter(Boolean).join(' · ')||'Your film note';
  const post={
    id:existing?.id??Math.max(0,...starterPosts.map(item=>item.id),...posts.map(item=>Number(item.id)||0))+1,
    title,
    director,
    subtitle,
    year,
    mood,
    moodLabel:moodLabels[mood]||moodLabels.unfiled,
    rating,
    date:existing?.date||new Date().toISOString().slice(0,10),
    image:moodImages[mood]||moodImages.unfiled,
    alt:`A film journal image for ${title}`,
    excerpt:note?note.replace(/\s+/g,' ').slice(0,170):'A new title for the films you want to remember.',
    lede:noteParagraphs[0],
    body:noteParagraphs,
    hasPersonalNote:Boolean(note),
    tags:[mood],
    userCreated:existing?existing.userCreated:true
  };
  let nextSavedPosts=savedPosts;
  let nextOverrides=postOverrides;
  if(existing?.userCreated){
    nextSavedPosts=savedPosts.map(item=>item.id===existing.id?post:item);
  }else if(existing){
    nextOverrides={...postOverrides,[existing.id]:post};
  }else{
    nextSavedPosts=[...savedPosts,post];
  }
  if(!persistPostData(nextSavedPosts,nextOverrides,deletedPostIds)){
    const feedback=document.querySelector('.add-form-feedback');
    feedback.textContent='Your browser could not save this change. Check local storage settings and try again.';
    return;
  }
  savedPosts=nextSavedPosts;
  postOverrides=nextOverrides;
  if(existing){
    const postIndex=posts.findIndex(item=>item.id===existing.id);
    if(postIndex!==-1)posts[postIndex]=post;
  }else{
    posts.push(post);
  }
  activeFilter='all';
  query='';
  searchInput.value='';
  document.querySelector('.filter-pill.selected')?.classList.remove('selected');
  document.querySelector('[data-filter="all"]').classList.add('selected');
  renderPosts();
  addDialog.close();
  setAddFormMode();
  if(existing){
    renderRoute();
    window.scrollTo({top:0,behavior:'smooth'});
  }else{
    document.querySelector('#journal').scrollIntoView({behavior:'smooth',block:'start'});
  }
});
document.querySelector('.reset-search').addEventListener('click',()=>{query='';activeFilter='all';searchInput.value='';document.querySelector('.filter-pill.selected')?.classList.remove('selected');document.querySelector('[data-filter="all"]').classList.add('selected');renderPosts()});
document.querySelector('.menu-toggle').addEventListener('click',event=>{const nav=document.querySelector('.main-nav');const open=nav.classList.toggle('open');event.currentTarget.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{document.querySelector('.main-nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();
renderPosts();
renderRoute();
