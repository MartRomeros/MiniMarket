from django.shortcuts import render,redirect
from django.contrib.auth.views import logout_then_login
from .forms import *
from .models import *

# Create your views here.
def home(request):
    return render(request,'index.html')

def logout(request):
    return logout_then_login(request,login_url='login')

def registro(request):
       
    if request.method == "POST":
        form = Registro(request.POST)
        if form.is_valid():
            form.save()
            return redirect(to='login')
    else:
        form = Registro()
        
    return render(request,'registro.html',{"form":form})

def productos(request):
    productos = Producto.objects.all()
    categorias = Categoria.objects.all()
    
    return render(request,'productos.html',{"productos":productos,"categoria":categorias})
