from django.contrib import admin
from .models import Student

class StudentAdmin(admin.ModelAdmin):
    list_display = ("firstname","lastname", "joined_date")
# Register your models here.
admin.site.register(Student,StudentAdmin)