"""Rebuild bundled secondary-data artifacts; offline once raw files are present."""
import hashlib, json, pathlib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, confusion_matrix
ROOT=pathlib.Path(__file__).resolve().parents[1]
def write(path,obj):
 (ROOT/path).write_text(json.dumps(obj,ensure_ascii=False,sort_keys=True,separators=(',',':'))+'\n')
train=np.loadtxt(ROOT/'data/raw/optdigits.tra',delimiter=',',dtype=int)
test=np.loadtxt(ROOT/'data/raw/optdigits.tes',delimiter=',',dtype=int)
x,y=train[:,:64],train[:,64]; tx,ty=test[:,:64],test[:,64]
model=KNeighborsClassifier(n_neighbors=3,weights='uniform',algorithm='brute',metric='euclidean',n_jobs=1).fit(x,y)
pred=model.predict(tx)
metrics={'model':'3-nearest neighbours','implementation':'scikit-learn KNeighborsClassifier / browser equivalent','train_rows':len(train),'test_rows':len(test),'correct':int((pred==ty).sum()),'accuracy':float(accuracy_score(ty,pred)),'confusion_matrix':confusion_matrix(ty,pred).tolist(),'split':'Original UCI optdigits.tra / optdigits.tes; distinct source writer groups','seed':'not applicable; original fixed split','features':64,'classes':10,'preprocessing':'Source 8x8 integer intensities, 0..16; no extra scaling','limitation':'Repository digit classification only; not a measure of learning, disability, or Kannada handwriting.'}
write('public/models/knn.json',{'k':3,'x':x.tolist(),'y':y.tolist()})
# First two examples of each class, fixed source order; never training examples.
examples=[]
for label in range(10):
 for i in np.where(ty==label)[0][:2]: examples.append({'id':f'uci-test-{i}','row':int(i),'label':int(label),'pixels':tx[i].tolist(),'prediction':int(pred[i])})
write('public/data/digits-examples.json',examples);write('public/data/model-metrics.json',metrics)
# Geometry -> offline SVG. Equirectangular local map, true geometry, no invented sites.
g=json.loads((ROOT/'public/data/dakshina-kannada.geojson').read_text())['features'][0]['geometry']
polys=[g['coordinates']] if g['type']=='Polygon' else g['coordinates']
pts=[pt for poly in polys for ring in poly for pt in ring]
xs=[p[0] for p in pts];ys=[p[1] for p in pts];lo,hi=min(xs),max(xs); bot,top=min(ys),max(ys)
cos=float(np.cos(np.deg2rad((top+bot)/2)));scale=min(550/((hi-lo)*cos),330/(top-bot))
def xy(p):return 140+(p[0]-lo)*cos*scale,48+(top-p[1])*scale
paths=[]
for poly in polys:
 d=' '.join('M '+' L '.join(f'{xy(p)[0]:.2f},{xy(p)[1]:.2f}' for p in ring)+' Z' for ring in poly)
 paths.append(f'<path d="{d}"/>')
mx,my=xy([74.8560,12.9141]);bar=20/111.32*scale
svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" role="img" aria-labelledby="title desc"><title id="title">Dakshina Kannada district, Karnataka, India</title><desc id="desc">District outline from geoBoundaries, 2021. Approximate Mangaluru city marker near the southwest coast. No school locations.</desc><rect width="760" height="440" rx="20" fill="#edf4f2"/><path d="M0 0H130L155 170 112 310 90 440H0Z" fill="#dcebf0"/><text x="24" y="340" fill="#536f7a" font-size="13" font-family="sans-serif" transform="rotate(-90 24 340)">ARABIAN SEA · schematic background</text><g fill="#c1d7c4" stroke="#356b50" stroke-width="2" fill-rule="evenodd">{''.join(paths)}</g><circle cx="{mx:.2f}" cy="{my:.2f}" r="8" fill="#183f32" stroke="white" stroke-width="3"/><path d="M{mx+8:.2f} {my:.2f}h28" stroke="#183f32"/><text x="{mx+42:.2f}" y="{my+5:.2f}" font-family="sans-serif" font-size="17" font-weight="bold" fill="#17392e">Mangaluru</text><text x="{mx+42:.2f}" y="{my+25:.2f}" font-family="sans-serif" font-size="12" fill="#36594c">District headquarters · approximate point</text><text x="460" y="70" fill="#36594c" font-family="sans-serif" font-size="12">KARNATAKA / INDIA</text><text x="620" y="320" fill="#536b5d" font-family="sans-serif" font-size="12">Western Ghats</text><path d="M700 110V60m-6 10 6-10 6 10" fill="none" stroke="#183f32" stroke-width="2"/><text x="695" y="48" font-family="sans-serif" font-size="14">N</text><path d="M150 390v7h{bar:.2f}v-7" fill="none" stroke="#183f32" stroke-width="2"/><text x="150" y="416" font-family="sans-serif" font-size="12">20 km · approximate local scale</text></svg>'''
(ROOT/'public/assets/district-map.svg').write_text(svg)
print(f'UCI original split: train={len(train)}, test={len(test)}')
print(f'3-NN: {metrics["correct"]}/{len(test)} correct; accuracy={metrics["accuracy"]:.6f}')
print(f'District: Dakshina Kannada; boundary year=2021; geometry={g["type"]}')
print(f'Bounds: {lo:.4f}, {bot:.4f}, {hi:.4f}, {top:.4f}')
