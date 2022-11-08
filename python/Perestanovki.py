from itertools import permutations
from browser import document, html, window, alert


def perm(x):
    arr = []
    t = 'abcdefghijklmnopqrstuvwxyz'
    s = t[:x]
    for i in permutations(s):
        i_str =  ' '.join(i)
        arr.append(i_str)
    return '\n'.join(arr)

def senddata(event):
    n = int(document["n"].value)
    taera = document["ans-txt"]
    taera.value = perm(n)
   
document["see-all"].bind("click", senddata)