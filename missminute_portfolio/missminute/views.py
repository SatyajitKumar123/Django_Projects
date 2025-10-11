from django.shortcuts import render
from datetime import datetime

# Create your views here.
def home(request):
    current_year = datetime.now().year
    return render(request, 'missminute/home.html', {
        'year': current_year,
    })
