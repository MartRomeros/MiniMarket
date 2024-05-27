from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'core/index.html')

def login(request):
    return render(request,'core/login.html')

def ayuda(request):
    return render(request,'core/ayuda.html')

def carniceria(request):
    return render(request,'core/carniceria.html')

def carrito_compras(request):
    return render(request,'core/Carrito.html')

def cervezas(request):
    return render(request,'core/Cervezas.html')

def despensa(request):
    return render(request,"core/despensa.html")

def info_legal(request):
    return render(request,"core/info-legal.html")

def lacteos(request):
    return render(request,"core/lacteos.html")

def limpieza(request):
    return render(request,"core/Limpieza.html")

def pets(request):
    return render(request,"core/Mascotas.html")

def pan(request):
    return render(request,"core/pan.html")

def perfil(request):
    return render(request,"core/perfil.html")

def politicas(request):
    return render(request,"core/politica_privacidad.html")

def promos(request):
    return render(request,"core/promos.html")

def terminos(request):
    return render(request,"core/terminos_condiciones.html")