from django.contrib import admin
from .models import EmployeeModel
admin.site.register(EmployeeModel)
from .models import StudentModel
admin.site.register(StudentModel)
# Register your models here.
