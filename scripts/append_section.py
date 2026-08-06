import sys,io,re
# usage: append_section.py <path> <n> <sectionfile>
path,n,secfile=sys.argv[1],sys.argv[2],sys.argv[3]
s=io.open(path,encoding='utf-8').read()
body=io.open(secfile,encoding='utf-8').read()
ref='%s. Badlands Brief — "Women, Children ... and Terror", URL: https://badlands.substack.com/p/women-children-and-terror\n'%n
if '## References' in s:
    i=s.index('## References')
    s=s[:i]+body.rstrip('\n')+'\n\n'+s[i:]
    s=s.rstrip('\n')+'\n'+ref
else:
    s=s.rstrip('\n')+'\n\n'+body.rstrip('\n')+'\n\n## References\n'+ref
io.open(path,'w',encoding='utf-8',newline='').write(s)
print('ok')
