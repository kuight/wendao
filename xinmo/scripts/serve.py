# -*- coding: utf-8 -*-
import subprocess, sys, time, urllib.request, json
proc = subprocess.Popen([sys.executable, '-m', 'uvicorn', 'server:app', '--port', '8092'],
                        cwd=r'E:\work\wendao\wendao-main\xinmo',
                        stdout=subprocess.PIPE, stderr=subprocess.PIPE)
print('pid', proc.pid)
for i in range(20):
    time.sleep(1)
    try:
        with urllib.request.urlopen('http://127.0.0.1:8092/api/topics', timeout=2) as r:
            d = json.loads(r.read().decode('utf-8'))
            print('probe OK chapters=', len(d['physics']['chapters']))
            print('ALL GOOD')
            sys.exit(0)
    except Exception as e:
        pass
print('SERVER DID NOT COME UP')
out, err = proc.communicate(timeout=2)
print('STDOUT:', out.decode('utf-8', 'replace')[-2000:])
print('STDERR:', err.decode('utf-8', 'replace')[-2000:])
sys.exit(1)