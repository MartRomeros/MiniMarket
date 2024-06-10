from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

#creamos el formulario como si fuera una clase o model:
class Registro(UserCreationForm):
    
    first_name = forms.CharField(max_length=20, help_text="Ingresa tu nombre")
    last_name = forms.CharField(max_length=20, help_text="Ingresa tu apellido")
    email = forms.EmailField(max_length=200,help_text="Ingresa tu correo electronico")
    
    class Meta(UserCreationForm.Meta):
        model = User
        fields = ("username","first_name","last_name","email","password1","password2")