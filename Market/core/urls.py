from django.urls import path
from .views import *

urlpatterns = [
    path('',home, name="home"),
    path('login',login, name="login"),
    path("ayuda",ayuda,name="ayuda"),
    path("carniceria",carniceria,name="carniceria"),
    path("carrito",carrito_compras,name="carrito"),
    path("cerveza",cervezas,name="cerveza"),
    path("despensa",despensa,name="despensa"),
    path("info-legal",info_legal,name="info-legal"),
    path("lacteos",lacteos,name="lacteos"),
    path("limpieza",limpieza,name="limpieza"),
    path("mascotas",pets,name="mascotas"),
    path("pan",pan,name="pan"),
    path("perfil",perfil,name="perfil"),
    path("politicas",politicas,name="politicas"),
    path("promos",promos,name="promos"),
    path("terminos",terminos,name="terminos"),
]