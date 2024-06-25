from django.urls import path
from .views import *
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('',home,name='home'),
    path('login/',LoginView.as_view(template_name='login.html'),name='login'),
    path('logout',logout,name='logout'),
    path('registro',registro,name='registro'),
    path('productos',productos,name='productos'),
    path('carrito',carrito,name='carrito'),
    path('addtocar/<codigo>',addtocar,name='addtocar'),
    path('drop_item/<codigo>',drop_item,name='drop_item'),
    path('borrar_item/<codigo>',borrar_item,name='borrar_item'),
    path('añadir_item/<codigo>',anadir_item,name='añadir_item'),
    path('limpiar',limpiar,name='limpiar'),
    path('comprar',comprar,name='comprar'),
    path('terminos',terminos,name='terminos'),
    path('privacidad',privacidad,name='privacidad'),
]

