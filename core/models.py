from django.db import models

# Create your models here.
class Categoria(models.Model):
    id_categoria = models.IntegerField(auto_created=True,primary_key=True)
    nombre_categoria = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.nombre_categoria

class Producto(models.Model):
    
    codigo = models.CharField(max_length=6,primary_key=True)
    detalle = models.CharField(max_length=200)
    precio = models.IntegerField()
    stock = models.IntegerField()
    imagen = models.CharField(max_length=2555)
    id_categoria = models.ForeignKey(Categoria,on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return self.detalle + "(" + self.codigo + ")"


