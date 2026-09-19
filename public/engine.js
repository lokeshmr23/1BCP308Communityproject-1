export const categories=['numbers','colours','shapes','life','digits'];
export function selectCards(cards,category,length=5,offset=0){const pool=cards.filter(c=>c.category===category);return Array.from({length:Math.min(length,pool.length)},(_,i)=>pool[(offset+i)%pool.length]);}
export function summarize(log){
 const finished=log.filter(x=>x.type==='answer');
 return {completed:finished.length,firstCorrect:finished.filter(x=>x.firstCorrect).length,sessions:new Set(finished.map(x=>x.session)).size,byCategory:Object.fromEntries(categories.map(c=>[c,finished.filter(x=>x.category===c).length]))};
}
export function grade(card,choice){return card.answer===choice;}
export function predictKnn(pixels,model){
 if(pixels.length!==64||pixels.some(n=>!Number.isFinite(n)||n<0||n>16))throw new Error('Expected 64 pixel values in 0..16');
 const distances=model.x.map((row,i)=>({i,d:row.reduce((sum,v,j)=>sum+(v-pixels[j])**2,0)})).sort((a,b)=>a.d-b.d||a.i-b.i);
 const votes=Array(10).fill(0);for(const n of distances.slice(0,model.k))votes[model.y[n.i]]++;
 return votes.indexOf(Math.max(...votes));
}
export function toCsv(log){
 const fields=['date','session','category','card','attempts','firstCorrect'];
 return [fields.join(','),...log.filter(x=>x.type==='answer').map(r=>fields.map(f=>'"'+String(r[f]??'').replaceAll('"','""')+'"').join(','))].join('\r\n');
}
