from itertools import combinations
from browser import document, html, window, alert


def COM(x, m):
    arr = []
    for i in combinations(x, m):
        arr.append(i)
    return arr

def senddata(event):
    n = int(document["n"].value)
    k = int(document["k"].value)
    taera = document["ans-txt"]
    taera.value = COM(n,k)
   
document["see-all"].bind("click", senddata)