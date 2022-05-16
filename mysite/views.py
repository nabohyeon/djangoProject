from pyexpat import model
from typing import List
from django.shortcuts import render
from django.views.generic.list import ListView
from .models import AssetStatus

# Create your views here.

def AssetStatusView(request):
    assetStatus = AssetStatus.objects.all()
    return render(request, 'index.html', {"assetStatus": assetStatus})