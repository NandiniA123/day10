from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .models import EmployeeModel
from .forms import EmployeeForm
from .models import StudentModel
from .forms import StudentForm

def insert_employee(request):
    context ={}
    ob_form = EmployeeForm(request.POST or None)
    if ob_form.is_valid():
        ob_form.save()
        return HttpResponse("Data Saved")
    context['form']= ob_form
    return render(request, "insert_employee.html", context)

def view_employee(request):
    ob=EmployeeModel.objects.all().values()
    context={
        'data':ob
    }
    temp=loader.get_template('view_employee.html')
    return HttpResponse(temp.render(context,request))

def insert_student(request):
    context ={}
    ob_form = StudentForm(request.POST or None)
    if ob_form.is_valid():
        ob_form.save()
        return HttpResponse("Data Saved")
    context['form']= ob_form
    return render(request, "insert_student.html", context)

def view_student(request):
    ob=StudentModel.objects.all().values()
    context={
        'data':ob
    }
    temp=loader.get_template('view_student.html')
    return HttpResponse(temp.render(context,request))


# Create your views here.
