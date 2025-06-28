from django.forms import fields
from .models import EmployeeModel
from django import forms
class EmployeeForm(forms.ModelForm):
    class Meta:
        model=EmployeeModel
        fields='__all__'

# Create your views here.
