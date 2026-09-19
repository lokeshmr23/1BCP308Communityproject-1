import json,pathlib
R=pathlib.Path(__file__).resolve().parents[1]
def pair(en,kn): return {'en':en,'kn':kn}
lessons=[]
def add(id,cat,q,kind,value,choices,answer):
 # Rotate choices deterministically, so answers are not always in the same position.
 offset=len(lessons)%len(choices);choices=choices[offset:]+choices[:offset]
 lessons.append({'id':id,'category':cat,'prompt':q,'visual':{'kind':kind,'value':value},'choices':choices,'answer':answer,'source':'project-authored' if cat!='digits' else 'uci-optdigits'})
for n in range(1,6):add(f'count-{n}','numbers',pair('How many apples do you see?','ಎಷ್ಟು ಸೇಬುಗಳಿವೆ?'),'count',n,[{'id':str(v),'label':pair(str(v),str(v))} for v in sorted(set([n, n%5+1,(n+1)%5+1]))],str(n))
colors=[('red','Red','ಕೆಂಪು','#cf3f43'),('blue','Blue','ನೀಲಿ','#286bc4'),('green','Green','ಹಸಿರು','#258051'),('yellow','Yellow','ಹಳದಿ','#f2c94c'),('orange','Orange','ಕಿತ್ತಳೆ','#df7a29')]
for i,(id,en,kn,h) in enumerate(colors):
 choices=[{'id':v[0],'label':pair(v[1],v[2])} for v in [colors[i],colors[(i+1)%5],colors[(i+2)%5]]]
 add(f'colour-{id}','colours',pair('Which colour is this?','ಇದು ಯಾವ ಬಣ್ಣ?'),'colour',h,choices,id)
shapes=[('circle','Circle','ವೃತ್ತ'),('square','Square','ಚೌಕ'),('triangle','Triangle','ತ್ರಿಕೋನ'),('star','Star','ನಕ್ಷತ್ರ'),('heart','Heart','ಹೃದಯ')]
for i,(id,en,kn) in enumerate(shapes):add(f'shape-{id}','shapes',pair('Which shape is this?','ಇದು ಯಾವ ಆಕಾರ?'),'shape',id,[{'id':s[0],'label':pair(s[1],s[2])} for s in [shapes[i],shapes[(i+1)%5],shapes[(i+2)%5]]],id)
life=[('wash','What do we use to wash our hands?','ಕೈ ತೊಳೆಯಲು ಏನು ಬಳಸುತ್ತೇವೆ?','1f9fc','Soap','ಸಾಬೂನು','Sand','ಮರಳು'),('drink','What do we drink when thirsty?','ಬಾಯಾರಿಕೆಯಾದಾಗ ಏನು ಕುಡಿಯುತ್ತೇವೆ?','1f4a7','Clean water','ಶುದ್ಧ ನೀರು','Paint','ಬಣ್ಣದ ದ್ರವ'),('fruit','Which fruit do you see?','ಇದು ಯಾವ ಹಣ್ಣು?','1f34c','Banana','ಬಾಳೆಹಣ್ಣು','Apple','ಸೇಬು'),('apple','Which fruit do you see?','ಇದು ಯಾವ ಹಣ್ಣು?','1f34e','Apple','ಸೇಬು','Banana','ಬಾಳೆಹಣ್ಣು'),('before','When should we wash our hands?','ನಾವು ಯಾವಾಗ ಕೈ ತೊಳೆಯಬೇಕು?','1f9fc','Before eating','ಊಟದ ಮೊದಲು','Never','ಎಂದಿಗೂ ಬೇಡ')]
for id,en,kn,v,a,ak,b,bk in life:add('life-'+id,'life',pair(en,kn),'asset',v,[{'id':'a','label':pair(a,ak)},{'id':'b','label':pair(b,bk)}],'a')
examples=json.loads((R/'public/data/digits-examples.json').read_text())
for n in range(10):
 sample=next(x for x in examples if x['label']==n)
 add(f'digit-{n}','digits',pair('Which handwritten number is this?','ಇದು ಯಾವ ಕೈಬರಹದ ಸಂಖ್ಯೆ?'),'digit',sample['pixels'],[{'id':str(v),'label':pair(str(v),str(v))} for v in [n,(n+1)%10,(n+3)%10]],str(n))
(R/'public/data/lessons.json').write_text(json.dumps(lessons,ensure_ascii=False,sort_keys=True,separators=(',',':'))+'\n')
print(f'Content: {len(lessons)} bilingual cards / 5 categories; Kannada review pending')
