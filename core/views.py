from django.shortcuts import render,redirect
from django.contrib.auth.views import logout_then_login
from .forms import *
from .models import *
import numpy as np

# Create your views here.
def home(request):
    return render(request,'index.html')

def addtocar(request,codigo):
    producto = Producto.objects.get( codigo = codigo )
    carrito = request.session.get("carrito",[])   
    total = request.session.get("total",0)
    for item in carrito:
        if item[0] == codigo:
            item[4] = item[4]+1
            item[3] = item[3] * item[4]
            total += item[3]
            break
    else:
        carrito.append([codigo,producto.detalle,producto.imagen,producto.precio,1])
    
    request.session["carrito"] = carrito
    request.session["total"] = total
    print(total)
    return redirect(to='productos')

def drop_item(request,codigo):
    carrito = request.session.get("carrito",[])   
    for item in carrito:
        if item[0] == codigo:
            if item[4] >= 1:
                producto = Producto.objects.get(codigo=codigo)
                item[4] = item[4] - 1
                item[3] = producto.precio * item[4]
                break
            else:
                carrito.remove(item)
                
    request.session["carrito"] = carrito
    return redirect(to='carrito')

def borrar_item(request,codigo):
    carrito = request.session.get("carrito",[])
    for item in carrito:
        if item[0] == codigo:
            carrito.remove(item)
            break
                
    request.session["carrito"] = carrito
    return redirect(to='carrito')

def anadir_item(request,codigo):
    carrito = request.session.get("carrito",[])
    for item in carrito:
        if item[0] == codigo:
            item[4] = item[4]+1
            item[3] = item[3] * item[4]
            break
                
    request.session["carrito"] = carrito
    return redirect(to='carrito')
    
    
    


def limpiar(request):
    request.session.flush()
    return redirect(to='productos')
    

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
    
    return render(request,'productos.html',{"productos":productos,"categorias":categorias,"carrito":request.session.get("carrito",[])})

def carrito(request):
    return render(request,'carrito.html',{"carrito":request.session.get("carrito",[]),"total":request.session.get("total",0)})
