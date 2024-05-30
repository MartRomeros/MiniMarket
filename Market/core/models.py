from django.db import models

# Create your models here.
class Producto(models.Model):
    codigo = models.CharField(max_length=4,primary_key=True)
    descripcion = models.CharField(max_length=200)
    stock = models.IntegerField()
    precio = models.IntegerField()
    oferta = models.BooleanField()
    image = models.CharField(max_length=2555)

    
    