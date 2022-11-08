from itertools import combinations
from browser import document, html, window, alert


def COM(x, m):
    arr = []
    t = 'abcdefghijklmnopqrstuvwxyz'
    s = t[:x]
    for i in combinations(s, m):
        i_str =  ' '.join(i)
        arr.append(i_str)
    return '\n'.join(arr)

def senddata(event):
    n = int(document["n"].value)
    k = int(document["k"].value)
    taera = document["ans-txt"]
    taera.value = COM(n,k)
   
document["see-all"].bind("click", senddata)