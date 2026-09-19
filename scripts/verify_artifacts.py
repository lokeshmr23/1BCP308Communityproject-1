"""Verify source hashes and byte-stable derived artifacts on bundled inputs."""
import hashlib,json,pathlib,subprocess,sys
R=pathlib.Path(__file__).resolve().parents[1]
manifest=json.loads((R/'evidence/artifact-manifest.json').read_text())
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
for f,h in manifest.items():assert sha(R/f)==h, f'Hash mismatch: {f}'
for command in [[sys.executable,'scripts/prepare_data.py'],[sys.executable,'scripts/make_lessons.py'],['node','scripts/build.mjs']]:
 subprocess.run(command,cwd=R,check=True)
for f,h in manifest.items():assert sha(R/f)==h, f'Regeneration mismatch: {f}'
print(f'RESULT: {len(manifest)} artifact hashes verified before and after regeneration')
