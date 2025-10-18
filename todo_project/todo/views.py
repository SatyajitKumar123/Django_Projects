from django.shortcuts import render,redirect
from .models import Task

# Create your views here.
def home(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        Task.objects.create(title=title)
        return redirect('/')
    tasks = Task.objects.all()
    return render(request, 'todo/home.html', {'tasks': tasks})

def delete_task(request, id):
    task = Task.objects.get(id=id)
    task.delete()
    return redirect('/')

def update_task(request, id):
    task = Task.objects.get(id=id)
    if request.method == 'POST':
        new_title = request.POST.get('title')
        task.title = new_title
        task.save()
        return redirect('/')
    return render(request, 'todo/update.html', {'taks': task})

def complete_task(request, id):
    task = Task.objects.get(id=id)
    task.completed = not task.completed
    task.save()
    return redirect('/')