"""Optional source refresh using standard library. Validate hashes afterward."""
import io,json,pathlib,urllib.request,zipfile
R=pathlib.Path(__file__).resolve().parents[1]
def get(url):
 with urllib.request.urlopen(url,timeout=120) as r:return r.read()
u='https://archive.ics.uci.edu/static/public/80/optical+recognition+of+handwritten+digits.zip'
z=zipfile.ZipFile(io.BytesIO(get(u)))
for n in ['optdigits.tra','optdigits.tes']:(R/'data/raw'/n).write_bytes(z.read(n))
u='https://media.githubusercontent.com/media/wmgeolab/geoBoundaries/9469f09/releaseData/gbOpen/IND/ADM2/geoBoundaries-IND-ADM2_simplified.geojson'
g=json.loads(get(u));features=[f for f in g['features'] if f['properties']['shapeName']=='Dakshina Kannada'];assert len(features)==1
(R/'public/data/dakshina-kannada.geojson').write_text(json.dumps({'type':'FeatureCollection','features':features},separators=(',',':')))
for code in ['1f34e','1f34c','1f9fc','1f4a7']:
 (R/'public/assets'/f'{code}.svg').write_bytes(get(f'https://raw.githubusercontent.com/twitter/twemoji/v14.0.2/assets/svg/{code}.svg'))
print('Pinned map, UCI and illustration sources refreshed. Run verify_artifacts.py before accepting changes.')
