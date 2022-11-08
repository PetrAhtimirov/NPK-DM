from itertools import permutations
from browser import document, html, window, alert


def f(n, m):
    arr = []
    t = 'abcdefghijklmnopqrstuvwxyz'
    s = t[:n]
    for i in permutations(s, m):
        i_str =  ' '.join(i)
        arr.append(i_str)
    return '\n'.join(arr)

def senddata(event):
    n = int(document["n"].value)
    m = int(document["m"].value)
    taera = document["ans-txt"]
    taera.value = f(n,m)
   
document["see-all"].bind("click", senddata)